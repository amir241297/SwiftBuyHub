import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { deleteProductData, updateProductData } from '../../redux/adminRedux/adminAction';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'

const Products = (props) => {
    const { brand, category, description, gender, price, url, _id } = props.data
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleEditProduct = () => {
        // dispatch(updateProductData(_id))
            navigate('/adminUpdate',{state:props}) 
            // dispatch(updateProductRequestAction(props))
            
    }
    const handleDeleteProduct = () => {
        dispatch(deleteProductData(_id))
    }

    return (
        <div className='border border-teal-600 text-left p-5 text-white leading rounded-md bg-slate-950 h-fit'>
            <img src={url} alt="" className='h-72 w-full' />
            <p className='font-bold mt-6'>{`Brand: ${brand}`}</p>
            <p className='font-bold flex items-center'><FaIndianRupeeSign />{`${price}`} </p>
            <p>{`Category: ${category}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p className='leading-4 mt-2 mb-2'>{description}</p>
            <div className='flex justify-around font-bold mt-4'>
                <button onClick={handleEditProduct} className='flex item-center justify-evenly p-2 w-28  hover:cursor-pointer bg-teal-400 hover:text-white rounded-lg hover:bg-blue-600'>Edit<MdUpdate className='text-2xl' /></button>
                <button onClick={handleDeleteProduct} className='flex item-center justify-evenly p-2 w-28 hover:cursor-pointer bg-teal-400 hover:text-white rounded-lg hover:bg-red-600 '>Delete<MdDelete className='text-2xl' /></button>
            </div>
        </div>
    )
}

export default Products