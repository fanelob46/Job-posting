import { create } from "zustand";

interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  type: string;
}

interface JobStore {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  createJob: (
    newJob: Omit<Job, "_id">
  ) => Promise<{ success: boolean; message: string }>;
  fetchJobs: () => Promise<void>;
  deleteJob: (pid: string) => Promise<{ success: boolean; message: string }>;
  updateJob: (
    pid: string,
    updatedJob: Partial<Omit<Job, "_id">>
  ) => Promise<{ success: boolean; message: string }>;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),

  createJob: async (newJob) => {
    if (
      !newJob.title ||
      !newJob.description ||
      !newJob.location ||
      !newJob.salary ||
      !newJob.type
    ) {
      return { success: false, message: "Please enter all fields..." };
    }

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    const data = await res.json();
    if (!data?.data)
      return { success: false, message: "Failed to create job." };

    set((state) => ({ jobs: [...state.jobs, data.data] }));
    return { success: true, message: "Job created successfully" };
  },

  fetchJobs: async () => {
    const res = await fetch("/api/jobs");
    const data = await res.json();
    set({jobs: data.data})
  },

  deleteJob: async (pid) => {
    const res = await fetch(`/api/jobs/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      jobs: state.jobs.filter((job) => job._id !== pid),
    }));
    return { success: true, message: data.message };
  },

  updateJob: async (pid, updatedJob) => {
    const res = await fetch(`/api/jobs/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      jobs: state.jobs.map((job) => (job._id === pid ? data.data : job)),
    }));

    return { success: true, message: data.message };
  },
}));
