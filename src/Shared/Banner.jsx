
import img from '../assets/3643906.jpg';
import img1 from '../assets/3619803.jpg';
import img4 from '../assets/ride4.avif';

import './style.css';
import { FaFacebookMessenger, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import imo from '../assets/imo.png'
import car3 from '../assets/car3.jpg'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='backimage -mt-16 pb-16'>
            <div className=" lg:flex  w-full md:mb-32 justify-center items-center pt-32">
                <div className='text-white text-center mx-auto lg:w-1/2'>
                    <h1 className='md:text-4xl text-2xl'>
                        বাংলাদেশের মধ্যে <br /> অন্যতম রাইড শেয়ারিং সার্ভিস
                    </h1>
                    <h1 className='lg:w-3/4 lg:ml-20 my-6 text-justify lg:text-center px-4'>
                        আপনি যদি কোনােরকম ঝামেলা ছাড়াই স্বল্প মূল্যেে আপনার নির্দিষ্ট গন্তব্যে পৌঁছাতে চান । তাহলে আর দেরি না করে আমাদের সাথে সরাসরি যোগাযোগ করুন 
                    </h1>
                    <div className='border  px-8 py-10 rounded hover:border-lime-500 md:w-3/4 mx-2 md:mx-auto'>
                        <div className="md:flex space-y-6 grid items-center justify-center md:gap-10">

                            <div className="flex  text-4xl gap-4 md:gap-8">
                            <FaPhoneAlt className='hover:text-lime-500 hover:rotate-90 transition delay-300 duration-300 '/>

                            <FaWhatsapp className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <img className='w-10 h-10 hover:bg-lime-500 hover:rotate-45 transition delay-300 duration-300 ' src={imo} alt="" />
                        </div>
                            <p className="font-semibold hover:text-lime-500 text-xl">
                                01906951915 <br /> 01814189243
                            </p>
                        </div>
                        <div className="divider divider-secondary my-8"> অথবা </div>
                        <div className="grid grid-cols-3 lg:grid-col-5 md:ml-24 text-4xl gap-8">
                        <FaFacebook className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaFacebookMessenger className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaTwitter className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaInstagram className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaYoutube className='hover:text-lime-500 hover:rotate-180 transition delay-300 duration-300 '/>

                        </div>
                    </div>
                </div>
                <div className=" p-4 md:p-8 lg:w-1/2">
                    <img className='rounded-lg' src={img} alt="" />

                </div>
            </div>
            {/* why our services */}
            <div className=" lg:flex ">
                 <div className='lg:w-1/2 p-4 md:p-8 '>
                    <img className='rounded-lg' src={car3} alt="" />
                </div>
                <div className='lg:w-1/2 text-center text-white ‍'>
                    <h2 className="text-2xl md:text-4xl mt-4 tracking-wider">
                        রাইড শেয়ারিং কি এবং <br /> আপনি আমাদের কাছ থেকে <br /> কেন সার্ভিসটি নিবেন
                    </h2>
                    <h3 className="font-bold text-2xl underline mt-4 mb-2"> রাইড শেয়ারিং </h3>
                    <p className='px-4 text-justify  mb-8 text-gray-300'>
                        রাইড শেয়ারিং হলো এমন এক পন্থা, যেখানে ওয়েবসাইট বা অ্যাপের মাধ্যমে গাড়ী ও যাত্রীর মধ্যে যোগাযোগ স্থাপন করে। একজন যাত্রী কোথাও যাবেন, যাওয়ার আগে রাইডশেয়ারিং কোম্পানির ওয়েবসাইট বা এপে তার অবস্থান এবং গন্তব্যস্থল প্রদান করার পর সেই এপ বা ওয়েবসাইট যাত্রীর আশেপাশে একটি নির্দিষ্ট সীমার মধ্যে গাড়ি খুজতে থাকে যারা রাইডশেয়ারিং এর সাথে জড়িত। রাইডশেয়ারিং এর গাড়িগুলোর চালকের মধ্য থেকে যে রাইড পিক করবে, রাইডশেয়ারিং কোম্পানির ওয়েবসাইট বা এপ সেই গাড়ির সাথে যাত্রীর যোগাযোগ স্থাপন করে দিবে। গাড়িটি তখন যাত্রির অবস্থানে এসে পৌছে যাত্রীকে নিয়ে তার গন্তব্যে পৌছে দিবে। রাইডশেয়ারিং কোম্পানি মূলত এভাবেই কাজ করে। তারা যাত্রী ও গাড়ির মধ্যে সেতুর মত কাজ করে।

                    </p>
                    <h3 className="font-semibold mb-2  text-xl text-orange-400">আপনি আমাদের কাছ থেকে  কেন সার্ভিসটি নিবেন</h3>
                    <p className='text-gray-200 px-4 text-justify'>
                        1 . সবচেয়ে অল্প খরচে একমাত্র আমরাই সার্ভিস দিয়ে থাকি । <br />

                        2 . কোনোরকম এ্যাপের ঝামেলা ছাড়াই সরাসরি কল করার মাধ্যমে ড্রাইভার পাবেন দ্রুত । <br />
                        3 . আপনার যেখানে খুশি সেখানেই যেতে পারবেন । <br />
                        4 . আপনি চাইলে ঘন্টা হিসেবেও নিতে পারেন । <br />

                        5 . গাড়ির জন্য অপেক্ষা না করে আমাদের সাথে যোগাযোগ করুন । আর যাত্রা শুরু করুন দ্রুত  । <br />
                        6 . গাড়িতে বসে কোনোরকম ঝামেলায় পড়লে অথবা কোনো  অসুবিধা হলে আমাদের <br /> সাথে যোগাযোগ করুন। <br />
                        7 . এছাড়াও আপনাদের ইচ্ছাঅনুযায়ী যেকোনো সুবিধা একমাত্র আমরাই দিয়ে থাকি ।
                    </p>

                </div>
               
            </div>
            {/* passer by */}
            <div className=" lg:flex my-10 md:my-20">
                <div className='lg:w-1/2 text-gray-300'>
                <h2 className="font-bold text-white text-center mb-4 md:text-3xl text-2xl px-4">
                আমি একজন যাত্রী । এখন আমি কীভাবে আপনাদের সার্ভিসটি নিতে পারি ?
                </h2>
                <p className='px-4 text-justify'>
                    আপনি যদি আপনার অফিসে অথবা দূরে কোথা্ও যা্ওয়ার জন্য কোনো গাড়ি খুজতেছেন । অথবা ইমার্জেন্সি কোনো গাড়ির প্রয়োজন পড়ে তাহলে আর চিন্তা নেই। এখন আর গাড়ির জন্য বসে থাকতে হবে না। আমাদের শুধুমাত্র একটি কল দিন অথবা যোগাযোগ করুন আর কিছুক্ষণ অপেক্ষা করুন। আপনার যাত্রা শুরু করার জন্য গাড়িটি পৌঁছে যাবে।কোনোরকম ঝামেলা ছাড়া,যেকোনো সময় বৃষ্টিতে অথবা প্রচন্ড  শীতে কোনো সমস্যা নেই। আমাদের সাথে কেবল যোগাযোগ করুন। না হলে  সরাসরি কল করুন <span className='text-xl text-lime-500 underline'>01906951915 </span> অথবা <span className='text-xl text-lime-500 underline'>01814189243</span> অথবা <FaFacebook className='inline-block text-3xl text-lime-500'/> <br /> <br /> সবচেয়ে ভালো হয় যদি আপনার একটি একাউন্ট থাকে। যদি না থাকে এখনই বিনামূল্যে খুলে নিন এখানে ক্লিক করে <Link className='italic text-lime-500 underline' to={'/signup'}> একাউন্ট খুলুন  </Link> আপনি সঠিক তথ্য দিয়ে একাউন্টটি খুলবেন, আপনি যদি ড্রাইভার হন তাহলে ড্রাইভার সিলেক্ট করবেন আর যদি যাত্রী হন তাহলে যাত্রী সিলেক্ট করবেন।তারপর শর্তানুযায়ী আপনার নাম,পেশা ছবি ইত্যাদি দিবেন।তাহলেই আপনার একটি একাউন্ট খুলা হয়ে যাবে। আর আপনি যেকোনো সুযোগ সুবিধা পেতে পারবেন। টাকা পয়সা লেনদেন করার জন্য যদি বিকাশ/নগদ/রকেট থাকে তাহলে গাড়ি ভাড়া নিয়ে কোনো ঝামেলা থাকবে না।না থাকলেও সমস্যা নেই তবে একটা বিকাশ একাউন্ট থাকা অবশ্যই ভালো।
<br />
                    এছাড়াও আপনি যদি কোনো সমস্যায় পড়েন অথবা আলাদাভাবে
                     আরো কোনো বিশেষ সুবিধা চান তাহলে <Link className='italic text-lime-500 underline' to={'/problem'}> আপনার সমস্যা </Link> এখানে গিয়ে আপনার মূল্যবান মন্তব্য দিয়ে আমাদের সহায়তা করতে পারেন।
                    কারন আপনার এক-একটি সমস্যা আমাদের তা দূর করা প্রধান কর্তব্য।  ধন্যবাদ।
                </p>
                
                </div>
                <div className='lg:w-1/2 px-4 mt-4 md:px-8'>
                <img className='rounded-lg' src={img1} alt="" />
                </div>
            </div>
            {/* dirver */}
            <div className="lg:flex lg:my-20">
            <div className='lg:w-1/2 text-gray-300'>
                <h2 className="font-bold text-white text-center mb-4 md:text-3xl text-2xl px-4">
                আমি একজন ড্রাইভার । এখন আমি কীভাবে আপনাদের সার্ভিসটি নিতে পারি ?
                </h2>
                <p className='px-4 text-justify'>
                আপনি যদি একজন ড্রাইভার হয়ে থাকেন তাহলে আপনার দায়িত্ব হবে যাত্রী দেরকে সঠিক যায়গায় পৌঁছে দেওয়া । তবে কিছু নিয়মকানুন মেনে গাড়ি চালাবেন যেমন <span className="text-yellow-400">দ্রুত যেতে কখনোই গাড়ি ওভারটেক করতে যাবেন না। ট্রাফিক আইন মেনে চলবেন। গাড়ির লাইসেন্স থাকতে হবে। গাড়িতে অতিরিক্ত যাত্রী কখনোই নেওয়া উচিত নয় এতে করে যাত্রীদের বসতে অসুবিধে হতে পারে তবে পরিস্থিতি অনুযায়ী সেটা ভিন্ন হতে পারে।যাত্রা শুরুর পূর্বে আমাদের সাথে যোগাযোগ করে আপনার ভাড়া ও টেক্স/ভ্যাট সম্পর্কে জেনে নিবেন</span> ।  আর অবশ্যই আপনার গাড়ির যন্ত্রাংশ চেক করে নিবেন।এতে করে যেকোনো দূর্ঘটনা এড়াতে পারবেন।এবং সবসময় সতর্ক থাকবেন। আপনি আপনার ডাইভিং এর শুরুটা এখনই করুন <br /> 
                সবচেয়ে ভালো হয় যদি আপনার একটি একাউন্ট থাকে। যদি না থাকে এখনই বিনামূল্যে খুলে নিন এখানে ক্লিক করে <Link className='italic text-lime-500 underline' to={'/signup'}> একাউন্ট খুলুন  </Link> আপনি সঠিক তথ্য দিয়ে একাউন্টটি খুলবেন, আপনি যদি ড্রাইভার হন তাহলে ড্রাইভার সিলেক্ট করবেন আর যদি যাত্রী হন তাহলে যাত্রী সিলেক্ট করবেন।তারপর শর্তানুযায়ী আপনার নাম,পেশা ছবি ইত্যাদি দিবেন।তাহলেই আপনার একটি একাউন্ট খুলা হয়ে যাবে। আর আপনি যেকোনো সুযোগ সুবিধা পেতে পারবেন। টাকা পয়সা লেনদেন করার জন্য যদি বিকাশ/নগদ/রকেট থাকে তাহলে গাড়ি ভাড়া নিয়ে কোনো ঝামেলা থাকবে না।না থাকলেও সমস্যা নেই তবে একটা বিকাশ একাউন্ট থাকা অবশ্যই ভালো।
<br />
                এছাড়াও আপনি যদি কোনো সমস্যায় পড়েন অথবা আলাদাভাবে
                     আরো কোনো বিশেষ সুবিধা চান তাহলে <Link className='italic text-lime-500 underline' to={'/problem'}> আপনার সমস্যা </Link> এখানে গিয়ে আপনার মূল্যবান মন্তব্য দিয়ে আমাদের সহায়তা করতে পারেন।
                    কারন আপনার এক-একটি সমস্যা আমাদের তা দূর করা প্রধান কর্তব্য।  ধন্যবাদ।

                </p>
                
                </div>
                <div className='lg:w-1/2 md:px-8 mt-4 px-4'>
                <img className='rounded-lg' src={img4} alt="" />
                </div>
            </div>
            <div className="mx-auto text-center">
                <Link to={'/login'} className='md:w-3/12 '>
                <button className="btn animate-gradient w-[300px] mt-4 md:w-3/12 bg-gradient-to-r from-green-700 via-yellow-400 to-red-500  animate-gradient text-white font-bold text-xl">একাউন্ট খুলুন</button>
                </Link>
            </div>
        </div>
    );
};



export default Banner;