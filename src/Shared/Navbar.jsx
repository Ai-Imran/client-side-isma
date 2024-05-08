import { Link, NavLink, useNavigate } from "react-router-dom";
import './style.css'
import { AiFillHome } from "react-icons/ai";
import { FaAddressCard, FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

// import useAdmin from "../hooks/useAdmin";
// import RandomColorText from "./RandomColorText";

const Navbar = () => {
    // const [isAdmin] = useAdmin();
    // const isAdmin = true;

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
        navigate("/login")
    }
    return (
        <div >
            <div className="navbar pt-1 md:pt-8">
                <div className="flex flex-row-reverse justify-between ">

                    <div className="drawer  lg:hidden drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <div className=" ml-[165px]">
                                <Link to={'/posts'}>
                                    {
                                        user && <>
                                            <img className="text-white w-[60px] h-[60px] border shadow-2xl border-purple-400 rounded" src={user?.photoURL} alt="Photo" />
                                        </>
                                    }
                                </Link>
                            </div>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                            <ul className="menu backimage space-y-6 p-4 w-3/4 min-h-full text-xl font-bold text-base-content">
                                {/* Sidebar content here */}
                                <div className="text-white">
                                    {
                                        user && <>
                                            <img className="text-white rounded-sm  mx-auto" src={user?.photoURL} alt="photo" />
                                            <p className="text-lime-400">{user?.displayName}</p>

                                        </>
                                    }
                                </div>
                                <NavLink to={'/'} ink="true">হোম</NavLink>
                                {(user?.email === 'iamsmallboy004@gmail.com' || user?.email === 'mdimranahmed0143@gmail.com' || user?.email === 'imran@gmail.com' || user?.email === 'ismaqwhelp@gmail.com' || user?.email === 'ikimranahmed00143@gmail.com' || user?.email === 'ikimranahmed0143@gmail.com' || user?.email === 'iamfirstwin022@gmail.com') && (
                                    <>
                                        <NavLink to={'/secret-users'} className="text-white">All_Users</NavLink>
                                        <NavLink to={'/show-orders'} className="text-white">All_Orders</NavLink>
                                        <NavLink to={'/fix-problems'} className="text-white">All_Problems</NavLink>
                                        <NavLink to={'/secret-revenue'} className="text-white">Revenue</NavLink>
                                    </>
                                )}
                                {
                                    user ? <NavLink to={'/user-start'}>শুরু করুন</NavLink> : <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                                }
                                <NavLink to={'/posts'}>পোস্ট</NavLink>
                                <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                                <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                                <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                                <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                                {
                                    user ? <span onClick={handleLogout} className="text-yellow-500 pb-4">Logout</span> : <NavLink to={'/login'}>লগইন করুন</NavLink>
                                }
                            </ul>
                        </div>

                    </div>

                    <Link to={'/'} className=" ml-3 rounded font-serif  px-1 text-shadow text-lime-300 shad text-3xl" >Ismaqw</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu space-x-4  text-[17px] lg:text-[14px]  ml-10 font-bold menu-horizontal px-1">
                        <NavLink to={'/'} ink="true">হোম</NavLink>
                        {(user?.email === 'iamsmallboy004@gmail.com' || user?.email === 'mdimranahmed0143@gmail.com' || user?.email === 'imran@gmail.com' || user?.email === 'ismaqwhelp@gmail.com' || user?.email === 'ikimranahmed00143@gmail.com' || user?.email === 'ikimranahmed0143@gmail.com' || user?.email === 'iamfirstwin022@gmail.com') && (
                                    <>
                                        <NavLink to={'/secret-users'} className="text-white">All_Users</NavLink>
                                        <NavLink to={'/show-orders'} className="text-white">All_Orders</NavLink>
                                        <NavLink to={'/fix-problems'} className="text-white">All_Problems</NavLink>
                                        <NavLink to={'/secret-revenue'} className="text-white">Revenue</NavLink>
                                    </>
                                )}
                        {
                            user ? <NavLink to={'/user-start'}>শুরু করুন</NavLink> : <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                        }

                        <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                        <NavLink to={'/posts'}>পোস্ট</NavLink>
                        <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                        <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                        <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                        <span className="text-purple-400">{user?.displayName}</span>
                        {
                            user ? <span onClick={handleLogout} className="text-yellow-500">Logout</span> : <NavLink to={'/login'}>লগইন করুন</NavLink>
                        }
                        <Link to={'/posts'}>
                            {
                                user && <img className="text-white w-[60px] h-[60px] -mt-5 rounded-full" src={user?.photoURL} alt="Photo" />
                            }
                        </Link>
                    </ul>
                </div>

            </div>

            <div className="grid  justify-items-center text-white grid-cols-6 lg:hidden text-3xl">
                <NavLink to={'/'} ink="true"><AiFillHome className=" transition delay-100" /></NavLink>
                <NavLink to={'/contact'}><FaSearch className=" transition delay-100" /></NavLink>
                <NavLink to={'/posts'} className=" transition delay-100"><FaAddressCard /></NavLink>
                {
                    user ? <NavLink to={'/user-start'}><FaCarSide className=" transition delay-100" /></NavLink> : <NavLink to={'/startSerives'}><FaCarSide className=" transition delay-100" /></NavLink>
                }
                <NavLink to={'/problem'}><FaFacebookMessenger className=" transition delay-100" /></NavLink>
                <label htmlFor="my-drawer-4" className="drawer-button text-white text-3xl ">  <FaUser className="transition delay-100 hover:text-purple-600" /></label>


            </div>

        </div>
    );
};

export default Navbar;