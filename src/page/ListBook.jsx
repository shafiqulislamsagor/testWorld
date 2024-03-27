import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";

const ListBook = () => {
    const [tab,setTab] = useState(0)
    const [click, setClick] = useState(true);
    const clicked = () => {
        setClick(!click)
    }
    
    
    return (
        <div className="w-[80%] mx-auto  mt-8">
            <div className="bg-base-200 text-center text-xl rounded-xl font-bold py-7">
                <h2>Books</h2>
            </div>
            <div className="flex justify-center mt-8 relative">
                <button onClick={clicked} className="btn btn-success w-36 py-5 h-auto min-h-0 text-white">Short By <IoIosArrowDropdown className="text-2xl " /></button>
                <div className="absolute top-full">
                    <ul className={`bg-base-200 menu menu-sm z-[1] p-2 shadow  rounded-box ${click ? 'hidden' : 'block'}`}>
                        <li><button>Rating</button></li>
                        <li><button>Number of pages</button></li>
                        <li><button>Publisher year</button></li>
                    </ul>
                </div>
            </div>
            <main>
                <div className="flex mt-16 items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap bg-base-100 ">
                    <Link to={''} onClick={()=> setTab(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===0 ? 'border border-b-0':'border-b'} rounded-t-lg bg-base-100`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to={`wish`} onClick={()=>setTab(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab===1 ? 'border border-b-0':'border-b'} rounded-t-lg bg-base-100`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
                <Outlet/>
            </main>
        </div>
    );
};

export default ListBook;