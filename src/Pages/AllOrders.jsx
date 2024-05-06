import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { LuRefreshCwOff } from "react-icons/lu";
import { LuRefreshCcw } from "react-icons/lu";

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

    const { data: orders, isLoading, error, refetch } = useQuery({
        queryKey: ["orders"], // Change to an array
        queryFn: fetchOrders,
    });
    const [isLoadingRefetch, setIsLoadingRefetch] = useState(false);

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

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="min-h-screen  text-gray-200 overflow-x-auto px-2 mt-1">
           <div className="flex lg:w-1/2 lg:mx-auto my-1 justify-between mx-2">
           <h2>All Orders: {orders.length} </h2>
            <button className="text-2xl  text-lime-400" onClick={handleRefetch} disabled={isLoadingRefetch}>
                {isLoadingRefetch ? <LuRefreshCwOff className="text-yellow-400" /> : <LuRefreshCcw />}
            </button>
           </div>
            <div className="lg:w-1/2 lg:mx-auto">
                {orders ? (
                    orders.map((order) => (
                        <div className=" border rounded border-gray-400 my-1 p-2" key={order._id}>
                             <p className="text-[12px] text-lime-300"> {new Date(order?.orderDate).toLocaleString("en-US")}</p>

                           <div className="flex justify-between">
                           <p className="text-purple-400"> {order?.name}</p>
                            <p> {order["mobile-number"]}</p>
                           </div >
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
                           <p>{order?.email}</p>
                          
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
