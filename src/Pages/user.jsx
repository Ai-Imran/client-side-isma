import React, { useState, useEffect } from "react";

const UserStartService = () => {
  const [selectedOption, setSelectedOption] = useState("সাধারণ যাত্রী");
  const [publicPrice, setPublicPrice] = useState(15);
  const [studentPrice, setStudentPrice] = useState(10);
  const [selectedCar, setSelectedCar] = useState("অটো গাড়ি");
  const [selectedStudentNumber, setSelectedStudentNumber] = useState(0);
  const [selectedPublicNumber, setSelectedPublicNumber] = useState(0);
  const [totalPassengers, setTotalPassengers] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    // Fetch data from `getData` and log it
    const fetchData = async () => {
      try {
        const response = await getData();
        console.log(response);
        // Use response data to set prices dynamically
        // For example:
        setPublicPrice(response.publicPrice);
        setStudentPrice(response.studentPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCarSelectChange = (e) => {
    setSelectedCar(e.target.value);
  };

  const handleStudentNumberChange = (e) => {
    setSelectedStudentNumber(parseInt(e.target.value));
  };

  const handlePublicNumberChange = (e) => {
    setSelectedPublicNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate total passengers
    const total = selectedStudentNumber + selectedPublicNumber;
    setTotalPassengers(total);
    // Calculate total cost based on selections
    let cost = 0;
    if (selectedOption === "ছাত্র/ছাত্রী") {
      cost += studentPrice * selectedStudentNumber;
    } else {
      cost += publicPrice * selectedPublicNumber;
    }
    // Apply additional charges based on selected car
    if (selectedCar === "রিক্সা") {
      cost *= 1.1; // 10% increase
    } else if (selectedCar === "সিএনজি") {
      cost *= 1.15; // 15% increase
    }
    setTotalCost(cost);
  };

  return (
    <div className="text-white px-3 min-h-screen">
      {/* Form elements */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto my-8">
       
        <div className="my-2">
          <label className="font-bold" htmlFor="my-work">
            আপনার পেশা
          </label>
          <div className="flex gap-10 items-center">
            <div>
              <select
                className="bg-gray-700 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-5 py-2 block"
                id="my-work"
                name="my-work"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="ছাত্র/ছাত্রী">ছাত্র/ছাত্রী</option>
                <option value="সাধারণ যাত্রী">সাধারণ যাত্রী</option>
              </select>
            </div>
            <p className="mx-2 text-red-400">
              আপনার ভাড়া :{" "}
              {selectedOption === "ছাত্র/ছাত্রী"
                ? studentPrice
                : publicPrice}{" "}
              টাকা
            </p>
          </div>
        </div>
        {/* Other form inputs */}
        {/* ... */}
        {/* Additional inputs for car selection and passenger numbers */}
        <div className="my-2">
          <label className="font-bold" htmlFor="choosecar">
            আপনার কোন ধরনের গাড়ি প্রয়োজন
          </label>
          <select
            className="bg-gray-700 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block"
            id="choosecar"
            name="choosecar"
            value={selectedCar}
            onChange={handleCarSelectChange}
          >
            <option value="অটো গাড়ি">অটো গাড়ি</option>
            <option value="রিক্সা">রিক্সা</option>
            <option value="সিএনজি">সিএনজি</option>
            {/* Other options */}
          </select>
        </div>
        <div className="my-2">
          <label className="font-bold" htmlFor="student-number">
            ছাত্র/ছাত্রী সংখ্যা
          </label>
          <input
            value={selectedStudentNumber}
            onChange={handleStudentNumberChange}
            className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
            type="number"
            name="student-number"
            id="student-number"
            placeholder="ছাত্র/ছাত্রী সংখ্যা লিখুন"
          />
        </div>
        <div className="my-2">
          <label className="font-bold" htmlFor="public-number">
            যাত্রী সংখ্যা
          </label>
          <input
            value={selectedPublicNumber}
            onChange={handlePublicNumberChange}
            className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
            type="number"
            name="public-number"
            id="public-number"
            placeholder="যাত্রী সংখ্যা লিখুন"
          />
        </div>
        {/* Submit button */}
        <div className="mx-auto text-center">
          <div className="bg-emerald-950 mx-auto text-center to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer">
            <input
              className="lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer"
              type="submit"
              value="সাবমিট করুন"
            />
          </div>
        </div>
      </form>

      {/* Display total cost and other information */}
      <div className="bg-white text-xl text-black px-4 rounded py-4">
        <h3 className="mx-auto text-center">আপনার হিসাব-নিকাশ</h3>
        <div className="flex justify-between">
          <p>একজন সাধারণ যাত্রীর ভাড়া</p> <span>{publicPrice} টাকা</span>
        </div>
        <div className="flex justify-between">
          <p>একজন ছাত্র/ছাত্রীর ভাড়া</p> <span>{studentPrice} টাকা</span>
        </div>
        <div className="flex justify-between">
          <p>মোট যাত্রীসংখ্যা</p> <span>{totalPassengers}</span>
        </div>
        <div className="flex justify-between">
          <p>সার্ভিসজনিত ট্যাক্স/ভ্যাট</p> <span>0 টাকা</span>
        </div>
        <div className="flex justify-between">
          <p>অন্যান্য খরচ</p> <span>0 টাকা</span>
        </div>
        <div className="flex justify-between">
          <p>সর্বমোট খরচ</p> <span>{totalCost} টাকা</span>
        </div>
      </div>
    </div>
  );
};

// Dummy getData function
const getData = async () => {
  // Simulate fetching data
  return {
    publicPrice: 15,
    studentPrice: 10,
  };
};

export default UserStartService;
