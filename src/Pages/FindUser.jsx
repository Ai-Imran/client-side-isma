import { useEffect, useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
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
        <div className="mt-3 mx-2 text-white overflow-x-auto">
            <h2></h2>
            <div className="mt-5">
                {
                    users.slice(0, 15).map(user => <div key={user._id} className="flex  py-1 items-center gap-3" >
                        <img  className="w-[60px] h-[60px] border shadow-2xl border-lime-500 rounded" src={user?.photoUrl} alt="image" />
                        <span className="">{user?.name}</span>
                        <span className="">{user?.role}</span>
                        <Link className="text-3xl text-lime-400 "><BiSolidUserDetail /></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FindUser;