import { Link } from "react-router-dom";

const OurSelf = () => {
    return (
        <div className="text-gray-300 min-h-screen">
            <div className="mx-auto">
                <div className="mx-auto lg:ml-[300px] mt-10 text-[18px] md:text-[20px]">
                <p className="lg:w-3/4 px-4 text-justify">
                আমাদের সার্ভিসটি আপনার কাছে কেমন লেগেছে।আপনার প্রথম সার্ভিস এর অভিজ্ঞতা বা আমাদের সার্ভিস সম্পর্কে কোনো কিছু চাইলে এখানে পোস্ট করতে পারেন। <br /> তবে আমাদের সমস্যা জনিত কোনো কিছু এখানে পোস্ট করবেন না যদি করেন তাহলে আপনার পোস্ট ডিলিট করতে বাধ্য হবো । যদি একান্তই কিছু সমস্যা পোস্ট করার থাকে তাহলে <Link ink to={'/problem'}><span className="text-lime-500 underline italic px-1"> আপনার সমস্যা </span> </Link>  এখানে ক্লিক করে আমাদের জানাতে পারেন। এতে আমরা পরবর্তীতে আপনাদের আরও ভালো সার্ভিস দিতে সক্ষম হবো ।
                <br />
                যদি এখনও কোনো একাউন্ট না থাকে তাহলে দ্রুত এখানে ক্লিক করে একাউন্ট <Link ink to={'/signup'}><span className="text-lime-500 underline italic px-1"> একাউন্ট খুলুন </span> </Link> ফ্রী তে।

                </p>
                </div>
               
            </div>
        </div>
    )
}
export default OurSelf;
