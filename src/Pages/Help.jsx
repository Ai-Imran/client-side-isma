import { Link } from "react-router-dom";

const Help = () => {
    return (
        <div className="text-gray-300 min-h-screen">
            <div className="mx-auto lg:ml-[300px] mt-10 text-[18px] md:text-[20px]">
                <p className="lg:w-3/4 px-4 text-justify">
                আপনার বিভিন্ন সমস্যার সমাধান এখানে দিয়ে থাকবো।আপনি যদি কোনো সমস্যায় পড়ে থাকেন তাহলে এখানে ক্লিক করে <Link ink to={'/problem'}><span className="text-lime-500 underline italic px-1"> আপনার সমস্যা </span> </Link> লিখতে পারেন। <br />
                এছাড়াও আমাদের বিভিন্ন সুযোগ-সুবিধা এখানে দিয়ে থাকবো। আপনার যদি কোনো একাউন্ট না থাকে এখানে ক্লিক করে <Link ink to={'/signup'}><span className="text-lime-500 underline italic px-1"> একাউন্ট খুলুন </span> </Link> একদম ফ্রী তে। <br />
                আপনি যদি ইতিমধ্যে একাউন্ট খুলে থাকেন এবং সার্ভিসটি নিতে আগ্রহী কিন্তু  আমাদের সাথে যোগাযোগের প্রয়োজন মন করেন তাহলে এখানে ক্লিক করে <Link to={'/contact'}><span className="text-lime-500 underline italic px-1"> যোগাযোগ </span> </Link> করুন সরাসরি আমাদের সাথে । <br /> 
                <span className='text-yellow-400'>
               তবে যে সমস্যা গুলো তে আমরা আপনাকে কোনোভাবেই সহায়তা করবো না তা এখানে ক্লিক করে জেনে নিন <Link ink to={'/terms&condition'}><span className="text-lime-500 underline italic px-1"> আমাদের নীতিমালা </span> </Link> না হলে পরে আমরা দায়ি থাকবো না।
               </span> <br /> 

                </p>
            </div>
        </div>
    )
}
export default Help;
