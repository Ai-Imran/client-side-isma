import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import imo from '../assets/imo.png'

const OrderCar = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Assuming you want to go back one step
    };
    const [showBanglaText, setShowBanglaText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBanglaText(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    


    return (
        <div className="px-4 text-gray-200 min-h-screen">
            <span onClick={goBack}>
                <IoArrowBack className="my-1  text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
            <div className="mx-auto flex lg:w-1/2 items-center my-3">
                {!showBanglaText && (
                    <div className="flex gap-4 justify-center items-center">
                        <p className="font-bold">Your order Car is Pending</p>
                        <div className="animate-spin w-10 ml-2 my-2 border-8 border-dotted rounded-full p-4 border-white"></div>
                    </div>
                )}
                {showBanglaText && (
                    <p className="mx-1 w-11/12 text-[14px] lg:text-[16px]">

                        আপনার অর্ডার টি সম্পন্ন হয়েছে। <span className="text-yellow-400"> যদি এখনই নিতে চান তাহলে নিচের
                            দেয়া নাম্বারে কল করুন অথবা ফেসবুকে মেসেজ করুন।</span>
                    </p>
                )}
            </div>


            <div className="lg:w-1/2 mx-2 lg:mx-auto min-h-screen">


                <div className=" w-11/12 py-3 mx-2 lg:text-xl">
                    <div className="flex  gap-2 items-center">
                        <div className="flex gap-2">
                            <span className=" ">Md Imran </span> <IoArrowForward className="text-green-400 text-xl" />
                        </div>
                        <div className="space-x-2 grid grid-cols-1 text-center">
                            <span>01906951915</span>
                            <span>01605969098</span>
                        </div>
                    </div>

                    <div className="flex mt-3 text-center w-3/4 mx-auto text-4xl gap-6">

                        <FaWhatsapp className="  " />
                        <a target="_blank" href="https://www.facebook.com/imran.chowdhury.90663894"> <FaFacebook className="" /></a>
                        <img className="w-10" src={imo} alt="imo" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderCar;