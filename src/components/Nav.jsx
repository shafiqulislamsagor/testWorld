import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="sticky top-0 z-10">
            <div className="navbar items-center bg-base-100 lg:w-[85%] mx-auto lg:py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/bookList'}>Listed Books</NavLink></li>
                            <li><NavLink to={'/page'}>Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost pl-11 lg:pl-0 work text-3xl text-[#131313]">Book World</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex menu-horizontal px-1 work gap-8 text-lg text-[#131313CC]">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] py-2 px-3 rounded-lg hover:bg-white active:text-[#23BE0A]' : 'py-2 px-3 text-[#131313c5]'}>Home</NavLink></li>
                        <li><NavLink to={'/bookList'} className={({ isActive }) => isActive ? 'text-[#23BE0A] py-2 px-3 rounded-lg border border-[#23BE0A] hover:bg-white active:text-[#23BE0A]' : 'py-2 px-3 text-[#131313c5]'}>Listed Books</NavLink></li>
                        <li><NavLink to={'/page'} className={({ isActive }) => isActive ? 'text-[#23BE0A] py-2 px-3 rounded-lg border border-[#23BE0A] hover:bg-white active:text-[#23BE0A]' : 'py-2 px-3 text-[#131313c5]'}>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className=" navbar-end ">
                    <div className="hidden lg:flex gap-4">
                        <a className="btn bg-[#23BE0A] work text-base text-white">Sign In</a>
                        <a className="btn bg-[#59C6D2] text-white text-base work">Sign Up</a>
                    </div>
                    {/* sm device logo */}
                    <div className="lg:hidden dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/wCwRrMF/sagor-White.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;