import NavBar from "../Components/NavBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="bg-[#f0ecec] h-[100vh] text-">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default MainLayout