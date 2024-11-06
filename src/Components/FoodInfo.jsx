import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FoodInfo() {

    const {foodid} = useParams();
    // console.log(foodid);

    const [Searchfood, setSearchfood] = useState([]);
    useEffect(() => {

        const searchProduct = async () => {
            try{
                const searchValue = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodid}`);
                const value = await searchValue.json();
                setSearchfood(value.meals);
                // console.log(value.meals);
            }
            catch(err){
                console.log(err.message);
            }
        }

        searchProduct();

    }, [])

  return (
    <>

    <section classNameName="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold text-center mb-8 uppercase">Recipe</h1>
            <p className="text-center text-xl text-gray-600 mb-12 capitalize">enjoy your day with this receipe</p>
            
            {
                Searchfood.map((fele) => (
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" key={fele.idMeal}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4 uppercase text-center">ingredient</h2>
                                <ul className="list-disc ml-6">
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient1}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient2}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient3}</li>
                                    <li><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient4}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient5}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient6}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient7}</li>
                                    <li><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient8}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strIngredient9}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-4 uppercase text-center">measurement</h2>
                                <ul className="list-disc ml-6">
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure1}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure2}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure3}</li>
                                    <li><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure4}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure5}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure6}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure7}</li>
                                    <li><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure8}</li>
                                    <li className="mb-2"><i className="fas fa-check-circle text-green-500"></i>{fele.strMeasure9}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                ))
            }

        </div>
    </section>

    </>
  )
}

export default FoodInfo
