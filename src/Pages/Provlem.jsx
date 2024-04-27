import { Link } from 'react-router-dom';
import provblem from '../assets/prob1.png'


const Problem = () => {
    return (
        <div className=" min-h-screen pb-1">
            <div className="">
            </div>
           <div className="lg:flex my-10 gap-8 lg:px-8">
                <div className="lg:w-1/2">
                <img className='hover:-rotate-6 mb-10 transition h-[200px] mx-auto delay-300 duration-300' src={provblem} alt="Problem Image" />
                <p className='text-gray-300 px-4 text-justify text-[20px]'>
                প্রিয় গ্রাহক,<br />
                আমরা অনেক আনন্দিত যে আপনি আমাদের একটি ভুল খুজে আমাদেরকে সাহায্য করবেন।আমরা সবাই একসাথেই এগিয়ে যেতে চাই।
                যদি আপনি ইতিমধ্যে কোনো সমস্যায় পড়েছেন তাহলে আর অপেক্ষা না করে আপনার সমস্যার কথা বিস্তারিত ভাবে জানাতে পারেন। <br />
                কিছু সমস্যা এমন হতে পারে- <br />
               <span className="text-orange-300">
               • আমি একাউন্ট খুলতে পারছি না <br/>
               • আমার একাউন্ট লগইন হচ্ছে না <br/>
               • আমি আমার ইউজার নাম / পাসওয়ার্ড ভুলে গেছি। <br />
               • আমাকে বলা হয়েছে গাড়ির জন্য অপেক্ষা করতে কিন্তু এখনও গাড়ি আসতেছে না। <br/>
               • ড্রাইভার জোর করে ভাড়া বেশি রেখেছে। <br/>
               • ড্রাইভার সঠিক যায়গায় পৌছার আগেই নামিয়ে দিয়েছে। <br/>
               • আমি না চাওয়া সত্ত্বেও ড্রাইভার জোরে গাড়ি চালিয়েছে বা কোনো রকম ঝগড়া লেগেছে। <br/>
               • আমি সঠিক যায়গায় পৌঁছে দিয়েছি কিন্তু যাত্রী ভাড়া দিচ্ছে না। <br/>
               </span>
              
               <span className="text-justify">
               অথবা এমন কোনো সমস্যায় পড়েছেন যা আমরা উল্লেখ করতে পারিনি বা আমাদের এরকম কোনো সার্ভিস চালু করা দরকার সমস্ত রকমের খুটিনাটি সমস্যার কথা আমাদের জানালে আমরা খুব উপকৃত হবো। আপনার একটি ছোট সমস্যা আমাদের জন্য একটি মূল্যবান দায়িত্ব, তাই যেকোনো সমস্যা যেকোনো সময়ে লিখে পাঠাতে পারেন বা ইমার্জেন্সি হলে কল করতে পারেন। আমার খুব দ্রুত আপনার সমস্যার সমাধান দেওয়ার চেষ্টা করবো। <br />
               
               </span>
               <span className='text-yellow-400'>
               তবে যে সমস্যা গুলো তে আমরা আপনাকে কোনোভাবেই সহায়তা করবো না তা এখানে ক্লিক করে জেনে নিন <Link ink to={'/terms&condition'}><span className="text-lime-500 underline italic px-1"> আমাদের নীতিমালা </span> </Link> না হলে পরে আমরা দায়ি থাকবো না।
               </span> <br /> ধন্যবাদ। 
                </p>
                </div>
                <div className="lg:w-1/2 px-4">
                    <div className=" my-16 mt-16 text-[20px] text-gray-300 pr-5 text-justify">
                        <p>
                        আপনার সমস্যাটি এখানে বিস্তারিত ভাবে লিখুন এখন দ্রুত সমাধান পেতে পারেন । 
                        <span className="text-yellow-400 mx-1">
                        অবশ্যই শুদ্ধ ভাষায় লিখবেন হয় ইংরেজি লিখুন নয়তো বাংলা  লিখুন। চাইলে দুটোই একসাথে লিখতে পারেন তবে বাং-ইংলিশ লিখলে রেসপন্স নাও পেতে পারেন। 
                         </span>
                        কারন এতে আমাদের <span className="text-orange-400">
                        এআই টুলস / অ্যালগরিদম
                         </span> বুঝতে পারে না ।
                        </p>
                    </div>
                   <div className="mx-auto text-center">
                   <textarea name="" className='  text-white px-3 bg-gray-700  py-5 border-none outline-none rounded-md w-11/12 lg:h-[620px] lg:w-[600px]' placeholder='এখানে লিখুন .......' id="" cols="18" rows="10"></textarea>
                   </div>
                    
                    <div className='bg-gradient-to-r from-purple-600 mt-2 via-red-600 text-center  to-yellow-300 lg:mx-0 mx-4 py-2 rounded-md font-semibold cursor-pointer '> 
                    <input className=' mx-auto py-2 text-xl font-bold text-white cursor-pointer' type="submit" value="পাঠিয়ে দিন" />
                    </div>
                  
                </div>
           </div>
        </div>
    )
}
export default Problem;
