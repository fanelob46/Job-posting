import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useJobStore } from "../../store/jobs"; // Adjust according to your store location

interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  type: string;
}

const EditJobPage: React.FC = () => {
  const { jobId } = useParams(); // Get the jobId from URL params
  const { jobs, fetchJobs, updateJob } = useJobStore(); // Access Zustand store methods
  const [editedJob, setEditedJob] = useState<Job | null>(null); // Store edited job data
  const navigate = useNavigate();

  // Fetch all jobs when the component mounts (only once)
  useEffect(() => {
    const fetchJobData = async () => {
      await fetchJobs(); // Fetch all jobs from API and store
      if (jobId) {
        const job = jobs.find((job) => job._id === jobId);
        if (job) {
          setEditedJob(job); // Set job details to be edited
        } else {
          navigate("/"); // Navigate back if job not found
        }
      }
    };
    fetchJobData();
  }, [jobId, jobs, fetchJobs, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedJob((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSaveChanges = async () => {
    if (editedJob) {
      try {
        const { success, message } = await updateJob(editedJob._id, {
          title: editedJob.title,
          description: editedJob.description,
          location: editedJob.location,
          salary: editedJob.salary,
          type: editedJob.type,
        });

        if (success) {
          console.log(message);
          navigate("/"); // Navigate back to jobs list after successful update
        } else {
          alert(message); // Show error message
        }
      } catch (error) {
        console.error("Error updating job:", error);
      }
    }
  };

  if (!editedJob) {
    return <div>Loading...</div>; // Show loading state until job data is available
  }

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Edit Job</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={editedJob?.title || ""}
            onChange={handleInputChange} // Editable
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={editedJob?.description || ""}
            onChange={handleInputChange} // Editable
            className="w-full p-2 border border-gray-300 rounded"
            rows={3}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={editedJob?.location || ""}
            onChange={handleInputChange} // Editable
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Salary</label>
          <input
            type="number"
            name="salary"
            value={editedJob?.salary || ""}
            onChange={handleInputChange} // Editable
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Job Type</label>
          <input
            type="text"
            name="type"
            value={editedJob?.type || ""}
            onChange={handleInputChange} // Editable
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/")} // Navigate back to job list
            className="px-4 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSaveChanges} // Save changes
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPage;
