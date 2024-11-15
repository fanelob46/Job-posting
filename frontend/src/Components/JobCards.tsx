
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import {useProductStore} from '../../store/jobs.tsx'
import { useEffect } from "react";

// type props = {
//     jobs : String
// }

const JobCards = () => {

    useEffect
  return (
    <section className="bg-[#f0ecec]">
      <div className="py-5 px-10">
        <div className="rounded bg-white px-10 w-fit ">
          <h1>Software developer</h1>
          
          <p className="flex">
            {" "}
            <IoLocation />
            South africa, durban
          </p>
          <p>this is a software development role</p>
          <div>
            <h1>R 25000</h1>
            <p>full-time</p>
          </div>
          <div className="flex">
            <FaRegEdit />
            <MdDelete />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobCards