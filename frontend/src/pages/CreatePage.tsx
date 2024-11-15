import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJobStore } from "../../store/jobs";

// Define types for the job object
interface NewJob {
  title: string;
  description: string;
  location: string;
  salary: string;
  type: string;
}

const CreatePage = () => {
  const [newJob, setNewJob] = useState<NewJob>({
    title: "",
    description: "",
    location: "",
    salary: "",
    type: "",
  });

  const { createJob } = useJobStore();
  const navigate = useNavigate();

  // Function to handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Ensure salary is converted to a number if needed
      const jobData = {
        ...newJob,
        salary: parseFloat(newJob.salary) || 0, // Convert salary to a number
      };

      // Call the createJob function (assuming it's asynchronous)
      await createJob(jobData);

      // Optionally reset the form after submitting
      setNewJob({
        title: "",
        description: "",
        location: "",
        salary: "",
        type: "",
      });

      // Navigate to another page (e.g., the job listings page)
      navigate("/");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <div>
      <h1>Create a new Job</h1>

      <div className="rounded-lg shadow-md p-6 grid place-items-center dark:text-white dark:bg-[#1c2434] w-[700px] space-y-5">
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            className="dark:bg-gray-400 p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Job Description"
            name="description"
            value={newJob.description}
            onChange={(e) =>
              setNewJob({ ...newJob, description: e.target.value })
            }
            className="dark:bg-gray-400 p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Job Location"
            name="location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            className="dark:bg-gray-400 p-2 rounded w-full"
          />

          <input
            type="number"
            placeholder="Job Salary"
            name="salary"
            value={newJob.salary}
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
            className="dark:bg-gray-400 p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Job Type"
            name="type"
            value={newJob.type}
            onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
            className="dark:bg-gray-400 p-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-slate-400 rounded-lg px-3 py-2 text-white"
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
