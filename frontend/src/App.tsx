import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import JobCards from "./Components/JobCards"
import NavBar from "./Components/NavBar"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit-job/:jobId" element={<EditPage />} />
      </Route>
    )
  );
 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App
