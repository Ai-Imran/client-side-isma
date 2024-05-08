import { FaBackward } from 'react-icons/fa';
import err from '../assets/error.webp'
import { useNavigate } from 'react-router-dom';

const Error = () =>{
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1); // This navigates back one step in the history
    };

    return (
        <div className='min-h-screen  bg-[#050530]'>
           <div className="lg:w-1/2 mx-auto">
           <FaBackward onClick={navigateBack} className='text-yellow-400 text-4xl pt-4'/>
            <p className='text-red-400 mx-2 text-xl mt-4'>Sorry, This Page cannot found.</p>
            <img className='pt-5' src={err} alt="error image" />
           </div>
        </div>
    )
}
export default Error;
