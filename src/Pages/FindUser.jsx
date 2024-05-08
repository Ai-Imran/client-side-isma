import { useEffect, useState } from "react";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";

const FindUser = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [displayedUsers, setDisplayedUsers] = useState([]);

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
            // Sort users by creation time (new to old)
            const sortedUsers = data.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime));
            setUsers(sortedUsers);
            // Initially, display the first 15 users
            setDisplayedUsers(sortedUsers.slice(0, 15));
        } catch (error) {
            console.error('There was a problem fetching the data:', error);
        }
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        if (value === "") {
            // Show all users when search field value is empty
            setDisplayedUsers(users);
        }
    };


    const handleSearch = () => {
        fetchFilteredUsers();
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchFilteredUsers();
        }
    };

    const fetchFilteredUsers = () => {
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (filteredUsers.length === 0) {
            // Show error message if no users found

        }
        setDisplayedUsers(filteredUsers);
    };

    return (
        <div className="mt-2 mx-2 text-white min-h-screen overflow-x-auto">
            <div className="flex rounded  w-3/4 lg:w-1/2 items-center mx-auto">
                <input
                    className="px-2 rounded-l py-1 outline-none lg:w-[590px] text-black"
                    type="search"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                />
                <div onClick={handleSearch} onKeyPress={handleKeyPress} className="  bg-black p-2 px-4 " >
                    <FaSearch />
                </div>
            </div>
            <div className="mt-2 lg:w-1/2 lg:text-xl  overflow-x-auto mx-auto">
                {displayedUsers.length > 0 ? (
                    displayedUsers.map(user => (
                        <div key={user._id} className="flex lg:gap-8 lg:my-2 py-1 items-center gap-3">
                            <img
                                className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border shadow-2xl border-lime-500 rounded cursor-pointer"
                                src={user?.photoUrl}
                                alt="image"

                            />

                            <span>{user?.name}</span>

                            {user.role === 'admin' ? (
                                <span className="text-yellow-400 font-bold">{user.role}</span>
                            ) : (
                                <p>{user?.work}</p>
                            )}
                           { user.role === 'admin' ? <RiAdminFill className="text-2xl text-rose-400 lg:text-5xl" /> :
                            <div onClick={() => Swal.fire(`তথ্য সিকিউরিটির জন্য তার সম্পর্কে গোপন রাখা হয়েছে যদি বিস্তারিত জানতে চান আমাদের সাথে যোগাযোগ করুন`)} className="text-3xl lg:text-5xl text-lime-400">
                                <BiSolidUserDetail />
                            </div>}
                            {
                                user.role === 'admin' && <p>{user?.phoneNumber}</p>
                            }
                        </div>
                    ))
                ) : (
                    <div className="text-center text-yellow-500">No users found.</div>
                )}
            </div>
        </div>
    );
};

export default FindUser;
