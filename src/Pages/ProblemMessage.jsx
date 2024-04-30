import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const ProblemMessage = () => {
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
        <div className="min-h-screen text-gray-200 px-3 mt-4">
            <span onClick={goBack}>
                <IoArrowBack className="my-1  text-orange-500 hover:text-lime-500 text-3xl" />
            </span>
            <div className="mx-auto flex lg:w-1/2 items-center my-3">
                {!showBanglaText && (
                    <div className="flex gap-4 justify-center items-center">
                        <p className="font-bold">Your message is Pending</p>
                        <div className="animate-spin w-10 ml-2 my-2 border-8 border-dotted rounded-full p-4 border-white"></div>
                    </div>
                )}
                {showBanglaText && (
                    <p className="mx-1 w-11/12 text-justify text-[14px] lg:text-[16px]">

                        আপনার সমস্যাটি আমাদের জানানোর জন্য ধন্যবাদ। সমস্যাটি আমরা যতদ্রুত সম্ভব তা সমাধানের চেষ্টা করবো।আপনার আর কিছু জানার থাকলে আপনার সমস্যা টি লিখে পাঠাতে পারেন। আপনার যদি এখনই গাড়ি প্রয়োজন কোনো ড্রাইভার পাচ্ছেন না বসে না থেকে <Link className="text-lime-400" to={'/user-start'}>অর্ডার করুন</Link> ।গাড়ি পৌঁছে যাবে আপনার বাসায়
                    </p>
                )}
            </div>

            <p>

            </p>
        </div>
    );
};

export default ProblemMessage;