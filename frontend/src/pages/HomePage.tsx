import { Link } from "react-router-dom";
import { useJobStore } from "../../store/jobs";
import { useEffect, useState } from "react";
import JobCards from "../Components/JobCards";

const HomePage = () => {
  const { jobs, fetchJobs } = useJobStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      await fetchJobs();
      setLoading(false);
    };
    loadJobs();
  }, [fetchJobs]);

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div>
      <Link to={"/create"}>
        <button>Create a new job</button>
      </Link>

      <div className="grid grid-cols-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCards key={job._id} job={job} />)
        ) : (
          <p>No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
