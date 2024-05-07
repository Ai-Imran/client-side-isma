import  { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleGoogle = () => {
        googleSignIn()
            .then(() => {
                navigate('/user-start');
            })
            .catch(err => {
                
                // console.log(err);
            });
    };

    const handleSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then(res => {
                navigate('/user-start');
            })
            .catch(err => {
                setErrorMessage('সঠিক ইমেল বা পাসওয়ার্ড দিন। আবার চেষ্টা করুন।');
                console.log(err);
            });
    };

    return (
        <div className="text-gray-300 min-h-screen">
            <div className="bg-ray-500 py-4 px-4 lg:px-10 lg:mb-10 lg:py-10 rounded-md  lg:mx-20 mx-4">
                <p className="text-justify my-3 font-bold lg:text-xl">
                    আপনার যদি কোনো একাউন্ট না থাকে তাহলে এখানে ক্লিক করে{' '}
                    <Link to={'/signup'}>
                        <span className="text-lime-500 underline italic px-1"> একাউন্ট খুলুন </span>
                    </Link>
                </p>
                <form onSubmit={handleSubmit} className="lg:w-1/2 text-[14px] lg:text-[16px] mx-auto">
                    <div className="my-2">
                        <label htmlFor="email" className="font-bold">
                            আপনি যে ইমেইল একাউন্ট খুলেছিলেন ঐ ইমেলটি লিখুন
                        </label>
                        <input
                            className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                            type="email"
                            name="email"
                            placeholder="এখানে আপনার ইমেইল লিখুন"
                        />
                    </div>
                    <div className="my-2">
                        <label className="font-bold lg:relative" htmlFor="password">
                            আপনি যে পাসওয়ার্ড দিয়ে একাউন্টটি খুলেছিলেন ঐ পাসওয়ার্ডটি লিখুন
                        </label>
                        <input
                            className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                            type={show ? 'text' : 'password'}
                            name="password"
                            placeholder="এখানে পাসওয়ার্ড লিখুন"
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="ml-[240px] absolute -mt-8 text-purple-500 text-xl lg:ml-[480px] cursor-pointer"
                        >
                            {show ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <Link to={'/help'} className="text-lime-500 underline cursor-pointer font-bold px-1">
                            পাসওয়ার্ড ভুলে গেছি
                        </Link>
                    </div>
                    {errorMessage && (
                    <div className="bg-red-500 text-white p-1 rounded-md">
                        {errorMessage}
                    </div>
                )}
                    <div className="mx-auto text-center">
                        <div className="bg-emerald-950 mx-auto text-center to-yellow-300 mt-5 lg:mr-12 p-2 rounded-md font-semibold cursor-pointer">
                            <input
                                className="lg:w-[310px] text-center mx-auto font-bold text-white cursor-pointer"
                                type="submit"
                                value="লগইন করুন"
                            />
                        </div>
                    </div>
                </form>
                <div className="mx-auto text-[14px] lg:text-[16px] lg:w-1/2 w-11/12">
                    <p className=" font-bold text-justify">
                        আপনি চাইলে{' '}
                        <FaGoogle onClick={handleGoogle} className="inline-block mx-2 text-2xl text-lime-500" /> গুগল
                        দিয়ে একাউন্ট খুলতে পারেন কিন্তু এতে আমাদের এআই টুলস / অ্যালগরিদম আপনাকে খুঁজতে পারে
                        না তাই সকল তথ্য দিয়ে{' '}
                        <Link to={'/signup'}>
                            <span className="text-lime-500 underline italic px-1"> একাউন্ট খুলুন </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
