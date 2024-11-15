import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between text-black ">
      <Link to={"/"}>
        <h1>Job posting</h1>
      </Link>
      <div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

export default NavBar