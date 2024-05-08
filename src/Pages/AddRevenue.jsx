import  { useState, useEffect } from 'react';
import axios from 'axios';

const AddRevenue = () => {
    const [amount, setAmount] = useState('');
    const [totalMoney, setTotalMoney] = useState('');
    const [addingMoneyList, setAddingMoneyList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add-money', { amount: parseFloat(amount) });
            if (response.status === 200) {
                setAmount('');
                fetchTotalMoney();
                fetchAddingMoneyList();
            }
        } catch (error) {
            console.error('Error adding money:', error);
        }
    };

    const fetchTotalMoney = async () => {
        try {
            const response = await axios.get('http://localhost:5000/total-revenue');
            if (response.status === 200) {
                setTotalMoney(response.data.totalRevenue);
            }
        } catch (error) {
            console.error('Error fetching total revenue:', error);
        }
    };

    const fetchAddingMoneyList = async () => {
        try {
            const response = await axios.get('http://localhost:5000/adding-money-list');
            if (response.status === 200) {
                setAddingMoneyList(response.data);
            }
        } catch (error) {
            console.error('Error fetching adding money list:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/adding-money-list/${id}`);
            if (response.status === 200) {
                fetchAddingMoneyList();
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    useEffect(() => {
        // Fetch total money initially
        fetchTotalMoney();
        // Fetch adding money list initially
        fetchAddingMoneyList();

        // Set up interval to fetch total money periodically
        const interval = setInterval(() => {
            fetchTotalMoney();
            fetchAddingMoneyList();
        }, 2000); // Fetch every 2 seconds

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    return (
        <div className='min-h-screen text-gray-200'>
            <form className='lg:w-1/2 lg:mx-auto  my-2' onSubmit={handleSubmit}>
                <input
                    className='text-black outline-none rounded ml-2 p-1'
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                />
                <button className='bg-black p-1 rounded' type="submit">Calculate</button>
            </form>
            <div className='mx-2 lg:w-1/2 lg:mx-auto text-[14px]'>
                <h2>Total Revenue: {totalMoney}</h2>
                <h3>Adding Money List : {addingMoneyList.length} </h3>
                <ul>
                    {addingMoneyList.map((item, index) => (
                        <div className='border my-1 border-gray-600' key={index}>
                           <span> Amount: {item.amount}</span> <span className='ml-5'>{new Date(item.timestamp).toLocaleString()}</span>
                           <button className='bg-black px-2 mx-2 rounded' onClick={() => handleDelete(item._id)}>delete</button>

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddRevenue;
