import { FaFacebook, FaFacebookMessenger, FaInstagram, FaPhoneAlt, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import imo from '../assets/imo.png'


const Contact = () => {
    
    return (
        <div className="text-gray-200 min-h-screen">
            <div className="mx-auto lg:flex mt-10 gap-6 items-center">
                <div className='lg:w-1/2 mb-16'>
                <div className='border py-10 md:py-20 md:px-8 px-4  rounded hover:border-lime-500 md:w-3/4 mx-2 md:mx-auto'>
                        <div className="flex justify-center  items-center gap-10">

                            <div className="md:flex space-y-6 grid  items-center text-4xl gap-4 md:gap-8">
                                <FaPhoneAlt className='hover:text-lime-500 hover:rotate-90 transition delay-300 duration-300 '/>

                                <FaWhatsapp className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                                <img className='w-10 h-10 hover:bg-lime-500 hover:rotate-45 transition delay-300 duration-300 ' src={imo} alt="" />
                            </div>
                            <p className="font-semibold hover:text-lime-500 text-xl">
                                01906951915 <br /> 01814189243
                            </p>
                        </div>
                        <div className="divider divider-secondary my-8"> অথবা </div>
                        <div className="grid grid-cols-3 lg:grid-col-5 md:ml-16 ml-8 lg:mt-10 text-4xl gap-8">
                            <FaFacebook className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaFacebookMessenger className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaTwitter className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaInstagram className='hover:text-lime-500 hover:rotate-45 transition delay-300 duration-300 '/>
                            <FaYoutube className='hover:text-lime-500 hover:rotate-180 transition delay-300 duration-300 '/>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 p-4  text-[22px]'>
                    <p className='text-justify md:px-4 text-gray-200'>
                    প্রিয় গ্রাহক, <br />
                    আমাদের সার্ভিস এর সাথে যুক্ত থাকার জন্য আপনাকে অসংখ্য ধন্যবাদ। আপনি যদি একজন যাত্রী হয়ে  থাকেন আর কোনে সমস্যায় পড়ে থাকেন তাহলে সরাসরি আমাদের জানাতে পারেন এখানে ক্লিক করে <Link to={'/problem'}><span className="text-lime-500 underline italic"> আপনার সমস্যা </span></Link> <br /> <br /> আর যদি একজন ড্রাইভার হয়ে থাকেন। আর আপনার ভাড়া নিয়ে সন্তুষ্ট না হন। অথবা যাত্রী নিয়ে কোনো সমস্যায় পড়েন , সরাসরি আমাদের কল করুন অথবা আমাদের গ্রুপ বা বিভিন্ন সোস্যাল মিডিয়ায় জানাতে পারেন। অথবা আপনি চাইলে বিস্তারিত লিখে জানাতে পারেন এখানে ক্লিক করে  <Link to={'/problem'}><span className="text-lime-500 underline italic"> আপনার সমস্যা </span> </Link>  আশা করি খুব দ্রুত আপনার সমাধান পেয়ে যাবেন। <br />
                    <span className='text-yellow-400'>
                    তবে যে সমস্যা গুলো তে আমরা আপনাকে কোনোভাবেই সহায়তা করবো না তা এখানে ক্লিক করে জেনে নিন <Link ink to={'/terms&condition'}><span className="text-lime-500 underline italic px-1"> আমাদের নীতিমালা </span> </Link> না হলে পরে আমরা দায়ি থাকবো না।
                    </span> <br /> 
                     ধন্যবাদ।
                    </p>
                  <div className="mx-auto text-center">
                    <Link to={'/signup'} className='bg-emerald-950 mx-auto text-center to-yellow-300 p-2 rounded-md font-semibold cursor-pointer '> <input className='mt-10 mx-auto w-[260px] cursor-pointer' type="button" value="একাউন্ট খুলুন" /></Link>
                  </div>
                </div>
            </div>
        </div>
    )
};
export default Contact;
