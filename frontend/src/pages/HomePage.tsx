import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/create"}>
        <button>Create a new job</button>
      </Link>
    </div>
  );
}

export default HomePage