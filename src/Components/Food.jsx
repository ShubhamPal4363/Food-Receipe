import React, { useEffect, useState } from 'react';
import foodIcon from "../assets/Image/Icon.svg";
import FoodCard from './FoodCard';

function Food() {
    const [ReceipeData, setReceipeData] = useState([]);
    const [Inputvalue, setInputvalue] = useState('');

    const foodProduct = async () => {
        let searchTerm = Inputvalue ? Inputvalue : 'cake';
        try {
            const foodValue = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const foodData = await foodValue.json();
            setReceipeData(foodData.meals || []); 
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        foodProduct(); // Fetch food data when component mounts or Inputvalue changes
    }, [Inputvalue]);

    const inputValue = (event) => {
        setInputvalue(event.target.value);
    }

    return (
        <>
            {/* Header */}
            <header className="text-gray-600 body-font shadow-lg">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={foodIcon} alt="food-icon" className='w-12 h-12' />
                        <span className="ml-3 text-2xl">Food Recipe</span>
                    </a>
                    <div className="md:ml-auto flex flex-wrap gap-3 items-center text-base justify-center">
                        <input
                            type="text"
                            name="search"
                            placeholder='Search Here'
                            className='border-2 border-black rounded-lg p-2'
                            onChange={inputValue}
                            value={Inputvalue}
                        />
                        <button className='px-4 py-2 bg-red-400 text-white rounded-lg' onClick={foodProduct}>Search</button>
                    </div>
                </div>
            </header>

            {/* API Food Place */}
            <FoodCard Receipe={ReceipeData} />
        </>
    );
}

export default Food;
