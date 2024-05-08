import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Passenger = () => {

  const {createUser,updateUserProfile} = useContext(AuthContext)
    // password
    const [show, setShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errornumber, setErrornumber] = useState('');
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState('');

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phoneNumber = event.target.number.value;
    const email = event.target.email.value;
    const age = event.target.year.value;
    const gender = event.target.gender.value;
    const password = event.target.password.value;
    const photoFile = event.target.photo.files[0];


    // Validate phone number
    const bdPhoneNumberPattern = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
    if (!bdPhoneNumberPattern.test(phoneNumber)) {
      setErrornumber('এটি একটি বাংলাদেশী ফোন নম্বর নয়।');
      return; // Stop submission if phone number is invalid
    } else {
      setErrornumber('');
    }


    try {
      // Create user
       await createUser(email, password);
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append('image', photoFile);

      const response = await fetch('https://api.imgbb.com/1/upload?key=b252a8cff14f36fc278309500d7be83f', {
        method: 'POST',
        body: formData,
      });
      
      const imageData = await response.json();
      const newPassenger = {
        name,phoneNumber,role:"passenger",email,gender,age,password, photoUrl: imageData.data.url,work:"Passenger"  
      }


      // Update user profile with image URL
      // Replace updateUserProfile with the appropriate function from your AuthContext
      updateUserProfile(name, imageData.data.url, phoneNumber);
      navigate('/user-start');
      const postResponse = await fetch('http://localhost:5000/users-my', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPassenger)
      });
  
      if (postResponse.ok) {
        // Successfully posted new passenger
       console.log('all is ok');
      } else {
        // Handle error
        console.error('Failed to post new passenger');
      }
    
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setFirebaseError('ইমেইল ইতিমধ্যে ব্যবহার করা হয়েছে।');
      } else if (error.code === 'auth/weak-password') {
        setFirebaseError('পাসওয়ার্ডটি অতিলম্বে সাদরের অন্তত ৬ টি অক্ষর হতে হবে।');
      } else {
        setFirebaseError('একটি অজানা ত্রুটি ঘটেছে।');
      }
      console.error('Error:', error);
    }
  };

  

    return (
        <div className="text-[14px] lg:text-[16px] py-4 px-4 lg:px-10  lg:mb-10 lg:py-10 rounded-md mt-10 lg:mx-20 mx-4">
            <form onSubmit={handleSubmit} className="lg:w-1/2  mx-auto">
                <div className="my-2">
                <label className="font-bold" htmlFor="name">আপনার নাম লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                 </div>
                 <div className="my-2">                  
             <label className="font-bold" htmlFor="number">
               চলমানকৃত মোবাইল নাম্বারটি লিখুন
             </label>
             <input
               required
               className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
               type="tel" // Use type="tel" for phone number input
               name="number"
               value={phoneNumber}
               onChange={handleInputChange}
               placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
             />
      </div>
      {errornumber && <p className="text-yellow-500">{errornumber}</p>}
               <div className="my-2">
               <label className="font-bold " htmlFor="email">আপনার একটি ইমেইল দিন</label>
                <input className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="email" name="email" placeholder="এখানে আপনার ইমেইল লিখুন" />
              
               </div>
               <div className="my-2">
                <label className="font-bold" htmlFor="year">আপনার বয়স লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="year" placeholder="এখানে আপনার বয়স লিখুন" />
                 </div>
                 <div className="my-2">
                <label className="font-bold" htmlFor="gender">লিংঙ্গ (পুরুষ / নারী)</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="gender" name="gender">
                <option value="male">পুরুষ</option>
                <option value="female">নারী</option>
                <option value="others">অন্য কিছু</option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="photo">
                  আপনার একটি ভালো ও ক্লিয়ার ছবি দিন । 
                </label>
                <input
                  className="bg-gray-700 w-11/12 rounded-md text-purple-500 focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                  type="file"
                  name="photo"
                  
                />
              </div>
              <div className="my-2">
                <label className="font-bold lg:relative" htmlFor="password">একটি শক্তিশালী পাসওয়ার্ড লিখুন। তা মনে রাখতে কোথাও লিখে রাখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block "
                 type={show ? "text" : "password"}
                  name="password" placeholder="এখানে পাসওয়ার্ড লিখুন" />
                   <span onClick={()=>setShow(!show)} className='ml-[240px] absolute -mt-8 text-purple-500 text-xl lg:ml-[300px] cursor-pointer '>{ show ?  <FaEyeSlash/> : <FaEye /> }</span>
                  
                 </div>
                 <div className="flex gap-2">
                 <input type="checkbox" defaultChecked className="checkbox border-purple-800 checked:border-lime-800 [--chkbg:theme(colors.lime.600)] p-2 [--chkfg:white]" />
                <p className="text-white font-bold">
                আমাদের <Link className="text-lime-500 italic underline mx-1" to={'/terms&condition'}>নীতিমালা</Link> মনে চুলন।
                </p>
                 </div>
                {firebaseError && <p className="text-yellow-500 ">{firebaseError}</p>}
                <div className="mx-auto  text-center">
                <div className='bg-emerald-950 mx-auto text-center  to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer '>
                 <input className=' lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer' type="submit" value="সাবমিট করুন" />
                </div>
                 </div>

            </form>
        </div>
    )
}

export default Passenger;