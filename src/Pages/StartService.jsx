import { Link } from 'react-router-dom';
import autocar from '../assets/au1.webp'

const StartService = () => {
    return (
        <div className="text-white min-h-screen">
            <div className="mx-auto lg:flex mt-10 gap-10">
                <div className='md:ml-[100px] p-4'>
                    <img className='w-[500px] rounded-lg' src={autocar} alt="" />
                </div>
                <div className='lg:w-1/2 p-4  text-[22px]'>
                    <p className='text-justify text-gray-200'>
                    আপনার যদি এখনই  অটো/নসিমন/পিকআপ/মালবাহী গাড়ি প্রয়োজন হয় অথবা আপনি একজন ড্রাইভার হয়ে থাকেন , তাহলে এখনই একটি <Link to={'/login'}><span className="text-red-400">ফ্রী একাউন্ট</span></Link> খুলে নিন।আর আমাদের সাথে যোগাযোগ করুন সরাসরি ফোন কলের মাধ্যমে। <br /> <br />

                    একাউন্ট খুলতে যদি কোনো রকম সমস্যায় পড়েন তাহলে এখানে ক্লিক করে  <Link to={'/contact'}><span className="text-lime-500 underline italic">যোগাযোগ </span></Link> এখনই আমাদেরকে আপনার সমস্যার কথা জানান।আমরা সবসময় আপনাদের যেকোনো সমস্যার সমাধান দিতে প্রস্তুত।
                     </p>
                    <div className="mx-auto text-center">
                    <Link to={'/signup'} className='bg-emerald-950 mx-auto text-center to-yellow-300 p-2 rounded-md font-semibold cursor-pointer '> <input className='mt-10 mx-auto w-[260px] cursor-pointer' type="button" value="একাউন্ট খুলুন" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default StartService;