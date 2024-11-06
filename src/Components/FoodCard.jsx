import React from 'react'
import backgroundImage from "../assets/Image/foodbg.jfif"
import { Link } from 'react-router-dom';

const FoodCard = ({ Receipe }) => {

    

  return (
    <>

    <section className="text-gray-600 body-font md:my-10" >
        <div className="container py-10 mx-auto">
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {
                    !Receipe ? "No Food Receipe" : Receipe.map((rele) => (<div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg bg-white" key={rele.idMeal}>
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={rele.strMealThumb} />
                        </a>
                        <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium uppercase">{rele.strCategory}</h2>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{rele.strMeal}</h3>
                        <Link to={`/${rele.idMeal}`}>
                            <button className="mt-1 px-6 py-2 bg-red-400 rounded-lg text-white text-lg">Read More</button>
                        </Link>
                        </div>
                    </div>))
                }
            </div>
        </div>
    </section>

    </>
  )
}

export default FoodCard
