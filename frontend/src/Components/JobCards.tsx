import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useJobStore } from "../../store/jobs"; // Adjust according to your store location
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  salary: number;
  type: string;
}

type JobCardProps = {
  job: Job;
};

const JobCards: React.FC<JobCardProps> = ({ job }) => {
  const { deleteJob, updateJob } = useJobStore(); // Assuming you have deleteJob in your store
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [editedJob, setEditedJob] = useState<Job>({ ...job }); // State to hold edited
  const navigate = useNavigate();

  const handleDelete = async (jobId: string) => {
    try {
      await deleteJob(jobId); // Call the delete function from your store or API
      console.log(`Job with ID ${jobId} deleted successfully.`);
      // Optionally, navigate to another page or show a success message
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleEdit = (jobId: string) => {
    // Navigate to the edit page for the job (assuming there's an Edit page)
    navigate(`/edit-job/${jobId}`);
  };

  return (
    <section className="bg-[#f0ecec]">
      <div className="py-5 px-10">
        <div className="rounded bg-white px-10 w-fit">
          <h1 className="text-xl font-bold">{job.title}</h1>
          <p className="flex items-center text-gray-600">
            <IoLocation className="mr-1" />
            {job.location}
          </p>
          <p className="text-gray-800">{job.description}</p>
          <div className="mt-3">
            <h1 className="text-lg font-semibold">
              R{job.salary.toLocaleString()}
            </h1>
            <p className="text-gray-700">{job.type}</p>
          </div>
          <div className="flex mt-4 gap-4 text-blue-600">
            <FaRegEdit
              className="cursor-pointer"
              onClick={() => handleEdit(job._id)}
            />
            <MdDelete
              className="cursor-pointer"
              onClick={() => handleDelete(job._id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCards;
