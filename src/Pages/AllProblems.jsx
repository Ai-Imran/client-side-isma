import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

const AllProblems = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const fetchProblems = async () => {
        const response = await fetch("http://localhost:5000/users-problems");
        if (!response.ok) {
            throw new Error("Failed to fetch problems");
        }
        const data = await response.json();
        return data;
    };

    const { data: problems, isLoading, error, refetch } = useQuery({
        queryKey: ["problems"],
        queryFn: fetchProblems,
    });

    const filteredProblems = problems && problems.filter((problem) =>
        problem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = async () => {
        try {
            await refetch();
        } catch (error) {
            console.error("Error searching problems:", error.message);
        }
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`http://localhost:5000/users-problems/${id}`, {
                        method: "DELETE",
                    });
                    await refetch();
                    Swal.fire(
                        "Deleted!",
                        "Your problem has been deleted.",
                        "success"
                    );
                } catch (error) {
                    console.error("Error deleting problem:", error.message);
                }
            }
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="min-h-screen text-gray-200 overflow-x-auto px-2">
            <div className="flex rounded  lg:w-1/2 items-center mx-auto">
                <input
                    className="px-2 w-[280px] my-1 rounded-l py-1 outline-none lg:w-[590px] text-black"
                    type="search"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                />
                <div onClick={handleSearch} onKeyPress={handleKeyPress} className="bg-black p-2 px-4">
                    <FaSearch />
                </div>
            </div>
            <h2 className="lg:text-center">All Problems : {filteredProblems.length} </h2>
            <div className="w-11/12 lg:mx-auto lg:w-1/2">
                {filteredProblems && filteredProblems.map((problem) => (
                    <div className="border w-full p-1 rounded border-gray-500  my-1 " key={problem._id}>
                        {problem.date && <p>Date: {new Date(problem.date).toLocaleString()}</p>}
                        <p>Name: {problem.name}</p>
                        <p>Phone Number: {problem.phoneNumber}</p>
                        <p>Email: {problem.email}</p>
                        <p>Message: {problem.message}</p>
                        <button className="text-gray-400 bg-black px-2 rounded" onClick={() => handleDelete(problem._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProblems;
