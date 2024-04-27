import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from '../Providers/AuthProviders';

const UserStartService = () => {
    const {user} = useContext(AuthContext)
    const [publicPrice, setPublicPrice] = useState(0);
    const taxPrice = 5;
    const othersCost = 0;
    const [totalPassenger, setTotalPassenger] = useState(0);
    const [selectedPlace, setSelectedPlace] = useState("");
    const [totalCost, setTotalCost] = useState(5);
    const [errorMessage, setErrorMessage] = useState("");
    const [nullError, setNullError] = useState("আপনার যায়গা সিলেক্ট করুন");

    const handlePlaceChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedPlace(selectedValue);
    
        if(selectedValue === "null") {
            setNullError("আপনার যায়গা সিলেক্ট করুন ")
            setPublicPrice(0);
            setTotalCost(0);
            setTotalPassenger(0); // Reset the total passenger count
            setErrorMessage(""); // Reset the error message
            return;
        } else if (selectedValue === "homna to goaribhanga") {
            setPublicPrice(15);
            setTotalCost(15 + taxPrice);
            setNullError("");
        } else if (selectedValue === "homna to batakandi") {
            setPublicPrice(25);
            setTotalCost(25 + taxPrice);
            setNullError("");
        } else {
            setNullError("");
            setPublicPrice(0);
        }
    };
    
    const handlePublicNumber = (e) => {
        const selectedValue = parseInt(e.target.value); // Convert to number
    
        if (isNaN(selectedValue) || selectedValue === 0) {
            // Show error message
            setErrorMessage("Please enter a valid number greater than 0.");
            return; // Exit the function early
        } 
        setErrorMessage('');
        setTotalPassenger(selectedValue);
        
        // Recalculate total cost based on updated total passenger count
        setTotalCost((publicPrice + taxPrice) * selectedValue); 
    };
    
    const handleCarChange = () => {
       
    };

    useEffect(() => {
        // Calculate total cost whenever publicPrice, totalPassenger, or taxPrice changes
        setTotalCost((publicPrice + taxPrice) * totalPassenger);
      }, [publicPrice, totalPassenger, taxPrice]);
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    // console.log(totalCost);

    return (
        <div className="text-white px-3 min-h-screen">
            <div className="lg:mx-auto mt-8 text-center">
                <p className="text-yellow-300 lg:text-xl ">
                    গাড়ির জন্য ঘন্টার পর ঘন্টা বসে না থেকে এখনই গাড়ি অর্ডার দিন।আর খুব সহজে পৌঁছে যান আপনার গন্তব্যে
                </p>
                <p className="lg:w-3/4 mx-auto lg:text-xl ">
                    তাই আর দেরি কিসের পছন্দ অনুযায়ী গাড়ি সিলেক্ট করে, সবগুলো তথ্য দিয়ে শুধু একবার যোগাযোগ করুন। আমরা আপনার সুবিধা অনুযায়ী যেকোনো সার্ভিস দিতে এগিয়ে যাবো সবসময়
                </p>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-1/2 text-[14px] lg:text-[16px]  mx-auto my-8">
                <div className="my-2">
                    <label className="font-bold" htmlFor="name">আপনার নাম লিখুন</label>
                    <input required defaultValue={user?.displayName} className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="mobile-number">আপনার মোবাইল নাম্বার </label>
                    <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="mobile-number" placeholder="এখানে আপনার নাম লিখুন" />
                </div>
                <div className="my-2">
                    <label  className="font-bold" htmlFor="email">আপনার ইমেইল লিখুন</label>
                    <input defaultValue={user?.email} required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="email" name="email" placeholder="এখানে আপনার ইমেইল লিখুন" />
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="targetplace">আপনি কোথায় থেকে কোথায় যেতে চান</label>
                    <select required onChange={handlePlaceChange} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="targetplace" name="targetplace">

                        <option value="null">এখানে ক্লিক করুন </option>

                        <option value="homna to goaribhanga">হোমনা থেকে গোয়ারিভাংঙ্গা </option>
                        <option value="homna to batakandi">হোমনা থেকে বাতাকান্দি</option>
                    </select>
                    {nullError && <span className="text-red-500">{nullError}</span>}
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="choosecar">আপনার কোন ধরনের গাড়ি প্রয়োজন</label>
                    <select  onChange={handleCarChange} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="choosecar" name="choosecar">
                        <option value="auto car">অটো গাড়ি</option>
                        <option value="rikshaw">রিক্সা</option>
                        <option value="cng">সিএনজি</option>
                        <option value="van">ভ্যান</option>
                        <option value="bike">বাইক</option>
                        <option value="cycle">সাইকেল</option>
                        <option value="nosimon car">নসিমন মালবহনকারী গাড়ি </option>
                        <option value="nosimon malbhi car">নসিমন যাত্রীবহনকারী গাড়ি</option>
                        <option value="private car">মাইক্রো গাড়ি</option>
                        <option value="hybrid car">হাইব্রিড গাড়ি</option>
                        <option value="bus">বাস</option>
                        <option value="track">ট্রাক</option>
                        <option value="backu">বেকু</option>
                        <option value="others">অন্যান্য</option>
                    </select>

                </div>

                <div className="flex gap-5">
                    <div className="my-2">
                        <label className="font-bold" htmlFor="my-work">আপনার পেশা</label>
                        <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="my-work" name="my-work">
                            <option value="student">ছাত্র/ছাত্রী </option>
                            <option value="public">সাধারণ যাত্রী</option>
                        </select>
                    </div>
                </div>            
                <div className="my-2 mb-3">
                        <label className="font-bold" htmlFor="public-number">যাত্রী সংখ্যা</label>
                        <input required onChange={handlePublicNumber} className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="public-number" id="public-number" placeholder="যাত্রী সংখ্যা লিখুন" />
                        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
                 </div>

                <div className="bg-white lg:text-xl text-black px-4 rounded py-4">
                    <h3 className="mx-auto  text-center">আপনার হিসাব-নিকাশ</h3>
                    <div className="flex  justify-between">
                        <p className=" ">
                            একজন যাত্রীর ভাড়া
                        </p> <span>{publicPrice} টাকা</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <p>মোট যাত্রীসংখ্যা</p> <span>{totalPassenger} জন</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সার্ভিসজনিত ট্যাক্স/ভ্যাট</p> <span>{taxPrice} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>অন্যান্য খরচ</p> <span> {othersCost} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সর্বমোট খরচ</p> <span> {totalCost} টাকা</span>
                    </div>
                </div>

                <div className="mx-auto  text-center">
                    <div className='bg-emerald-950 mx-auto text-center  to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer '>
                        <input className=' lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer' type="submit" value="সাবমিট করুন" />
                    </div>
                </div>
            </form>

        </div>
    )
}
export default UserStartService;
