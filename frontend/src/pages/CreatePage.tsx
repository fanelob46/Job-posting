import { useState } from "react"


const CreatePage = () => {
const [newJob, SetnewJob] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    type: ""
})

const handleAddJob = () => {
    console.log(newJob);
}

  return (
    <div>
      <h1>Create a new Job</h1>

      <div className="rounded-lg shadow-md p-6 grid place-items-center dark:text-white dark:bg-[#1c2434] w-[700px] space-y-5">
        <input
          type="text"
          placeholder="Job Title"
          name="title"
          value={newJob.title}
          onChange={(e) => SetnewJob({ ...newJob, title: e.target.value })}
          className="dark:bg-gray-400 p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Job Description"
          name="description"
          value={newJob.description}
          onChange={(e) =>
            SetnewJob({ ...newJob, description: e.target.value })
          }
          className="dark:bg-gray-400 p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Job Location"
          name="location"
          value={newJob.location}
          onChange={(e) => SetnewJob({ ...newJob, location: e.target.value })}
          className="dark:bg-gray-400 p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Job Salary"
          name="price"
          value={newJob.salary}
          onChange={(e) => SetnewJob({ ...newJob, salary: e.target.value })}
          className="dark:bg-gray-400 p-2 rounded w-full"
        />

        <input
          type="text"
          placeholder="Job Type"
          name="image"
          value={newJob.type}
          onChange={(e) => SetnewJob({ ...newJob, type: e.target.value })}
          className="dark:bg-gray-400 p-2 rounded w-full"
        />

        <button
          onClick={handleAddJob}
          className="bg-slate-400 rounded-lg px-3 py-2 text-white"
        >
          Add Job
        </button>
      </div>
    </div>
  );
}

export default CreatePage