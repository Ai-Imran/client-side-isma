import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCwOff, LuRefreshCcw } from "react-icons/lu";
import Swal from "sweetalert2";

const AllOrders = () => {
    const fetchOrders = async () => {
        const response = await fetch("http://localhost:5000/users-orders");
        if (!response.ok) {
            throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        // Sort orders by orderDate in descending order
        data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
        return data;
    };

    const { data: orders = [], isLoading, error, refetch } = useQuery({
        queryKey: ["orders"], // Change to an array
        queryFn: fetchOrders,
    });

    const [isLoadingRefetch, setIsLoadingRefetch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleRefetch = async () => {
        setIsLoadingRefetch(true);
        try {
            await refetch();
        } catch (error) {
            console.error("Error refetching orders:", error.message);
        } finally {
            setIsLoadingRefetch(false);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
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
                    await fetch(`http://localhost:5000/users-orders/${id}`, {
                        method: "DELETE",
                    });
                    await refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your order has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Error deleting order:", error.message);
                }
            }
        });
    };

    const filteredOrders = orders.filter((order) =>
        order["mobile-number"].includes(searchTerm)
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="min-h-screen text-gray-200 overflow-x-auto px-2 mt-1">
            <div className="flex rounded  lg:w-1/2 items-center mx-auto">
                <input
                    className="px-2 w-[280px] my-1 rounded-l py-1 outline-none lg:w-[590px] text-black"
                    type="search"
                    placeholder="Search here"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div onClick={handleRefetch} className="bg-black p-2 px-4">
                    <FaSearch />
                </div>
            </div>
            <div className="flex lg:w-1/2 lg:mx-auto my-1 justify-between mx-2">
                <h2>All Orders: {filteredOrders.length} </h2>
                <button className="text-2xl  text-lime-400" onClick={handleRefetch} disabled={isLoadingRefetch}>
                    {isLoadingRefetch ? <LuRefreshCwOff className="text-yellow-400" /> : <LuRefreshCcw />}
                </button>
            </div>
            <div className="lg:w-1/2 lg:mx-auto">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                        <div className=" border rounded border-gray-400 my-1 p-2" key={order._id}>
                            <p className="text-[12px] text-lime-300"> {new Date(order?.orderDate).toLocaleString("en-US")}</p>
                            <div className="flex justify-between">
                                <p className="text-purple-400"> {order?.name}</p>
                                <p> {order["mobile-number"]}</p>
                            </div>
                            <p> Place : {order?.targetplace}</p>
                            <div className="flex justify-between">
                                <p> Car Name :  {order?.choosecar}</p>
                                <p> {order?.["my-work"]}</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                    <p> {order?.["public-number"]}</p> *
                                    (<p> {order?.publicPrice}</p> + 5<span className="text-[10px] -mx-1 text-yellow-300">: tax</span>)
                                </div>
                                <p className="text-red-300"> Total :  {order?.totalCost}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[14px]">{order?.email}</p>
                                <button className="text-gray-300 bg-black px-2 rounded" onClick={() => handleDelete(order._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <li>No orders available</li>
                )}
            </div>
        </div>
    );
};

export default AllOrders;
