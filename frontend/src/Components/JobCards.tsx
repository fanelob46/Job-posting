import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

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
              ${job.salary.toLocaleString()}
            </h1>
            <p className="text-gray-700">{job.type}</p>
          </div>
          <div className="flex mt-4 gap-4 text-blue-600">
            <FaRegEdit className="cursor-pointer" />
            <MdDelete className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCards;
