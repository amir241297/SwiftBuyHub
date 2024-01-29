import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';


// ... (other imports)

const Slider = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(0)

    const updateValue = (prop) => {
        setValue(value + prop)
    }

    const fetchData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [value])

    return (
        <div className='border-2 border-teal-600 flex p-3 w-full'>

            <button disabled={value <= 0} className='h-1/2 m-auto hover:cursor-pointer hover:bg-gray-300' onClick={() => { updateValue(-5) }}><MdOutlineKeyboardArrowLeft className='text-5xl font-bold' /></button>

            {data.length > 0 ? (
                <div className='grid grid-cols-5 w-full gap-3 h-full'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div className='h-64' key={index}>
                            <Link to={`/products/${data[value + index].id}`}>
                                <img className='h-full m-auto' src={data[value + index].image} alt={data[value + index].title} />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h1>404</h1>
            )}

            <button disabled={value >= 20 - 5} className='h-1/2 m-auto hover:cursor-pointer hover:bg-gray-300' onClick={() => { updateValue(5) }}><MdOutlineKeyboardArrowRight className='text-5xl font-bold' /></button>

        </div>
    )
}

export default Slider;
