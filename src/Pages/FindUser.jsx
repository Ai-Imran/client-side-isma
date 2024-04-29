import { useEffect, useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const FindUser = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/users-my');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    };
    return (
        <div className="mt-2 mx-2 text-white overflow-x-auto">
           <div className="flex rounded gap-2 bg-black w-3/4 lg:w-1/2 items-center mx-auto">
            <input className="px-2 rounded-l py-1 outline-none lg:w-[590px] text-black " type="search" name="" id="" placeholder="serach here" /> <FaSearch className="ml-2 lg:ml-4"/>
           </div>
            <div className="mt-2 lg:w-1/2 lg:text-xl mx-auto">
                {
                    users.slice(0, 15).map(user => <div key={user._id} className="flex lg:gap-8 lg:my-2 py-1 items-center gap-3" >
                        <img  className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border shadow-2xl border-lime-500 rounded" src={user?.photoUrl} alt="image" />
                        <span className="">{user?.name}</span>
                        <span className="">{user?.role}</span>
                        <Link className="text-3xl lg:text-5xl text-lime-400 "><BiSolidUserDetail /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FindUser;