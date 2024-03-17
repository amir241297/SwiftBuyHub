import { MdDelete } from "react-icons/md";
import { MdUpdate } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductData, updateProductData } from '../../redux/adminRedux/adminAction';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom'

const Products = (props) => {
    const { brand, category, description, gender, price, url, _id } = props.data
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth, isDeleted } = useSelector((state) => {
        return state.adminReducer
    })
    // console.log(isAuth)


    const handleEditProduct = () => {
        // dispatch(updateProductData(_id))
        // if(!isAuth){
            // navigate("/adminUpdate")
        // }
        // else{
            navigate('/adminUpdate', { state: props.data })
        // }
        
        console.log(props)
        // dispatch(updateProductRequestAction(props))

    }
    const handleDeleteProduct = () => {
        if (!isAuth) {
            toast.error("Request denied. \n Please Login!")
            console.log("NA")
            navigate("/adminlogin")
        } else {
            dispatch(deleteProductData(_id))
            if (isDeleted) alert("Product Deleted Successfull!")
        }
    }

    return (
        <div className='border border-teal-600 text-left p-5 text-white leading rounded-md bg-slate-950'>
            <img src={url} alt="" className='h-72 w-full' />
            <p className='font-bold mt-6'>{`Brand: ${brand}`}</p>
            <p className='font-bold flex items-center'><FaIndianRupeeSign />{`${price}`} </p>
            <p>{`Category: ${category}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p className='leading-4 mt-2 mb-2'>{description}</p>
            <div className='flex justify-around font-bold mt-auto '>
                <button onClick={handleEditProduct} className='flex item-center justify-evenly p-2 w-28  hover:cursor-pointer bg-teal-400 hover:text-white rounded-lg hover:bg-blue-600 '>Edit<MdUpdate className='text-2xl' /></button>
                <button onClick={handleDeleteProduct} className='flex item-center justify-evenly p-2 w-28 hover:cursor-pointer bg-teal-400 hover:text-white rounded-lg hover:bg-red-600 '>Delete<MdDelete className='text-2xl' /></button>
            </div>
        </div>
    )
}

export default Products