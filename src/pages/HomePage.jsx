import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Forms from '../components/Forms'

function HomePage() {
  const baseUrl='https://dummyjson.com/products/category/'
const navigate=useNavigate()
    const [value, setValue] = useState("")
    const [product,setProduct]=useState([])
  const handleSubmit = async(e) => {
    e.preventDefault()
      const result = await axios.get(baseUrl + value)
      setProduct(result.data.products)
      navigate('/grid', {
          state: {
           products:result.data.products
       }})
    }
  return (
      <div>
          <Forms handleSubmit={handleSubmit} setValue={setValue}></Forms>
    </div>
  )
}

export default HomePage