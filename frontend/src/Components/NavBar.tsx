import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between text-black py-3 px-10">
      <Link to={"/"}>
        <h1>Job posting</h1>
      </Link>
      <div className="space-x-5 ">
        <button className="bg-slate-500 rounded-xl px-5">Login</button>
        <button className="bg-slate-500 rounded-xl px-5">SignUp</button>
      </div>
    </div>
  );
}

export default NavBar