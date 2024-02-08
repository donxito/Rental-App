
import {useState} from "react"
import house from "../../Data/data.json";

function AddForm() {

    const [apartment, setApartment] = useState(house)


    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")




    const handleSubmit = (event) => {
        event.preventDefault()

        const newApartment = {
            country: country,
            city: city,
            name: name,
            picture_url: image 
    
        }

        console.log("apartment submited")

        alert("apartment submited")

        setApartment ([newApartment, ...apartment ])

    
        setCountry("")
        setCity("")
        setName("")
        setImage("")

        
    }

    return (

        <form onSubmit={handleSubmit}>

        <h2>Add your apartment here!</h2>

        <label>Country:  
        <input type="text" name="country" placeholder="Enter Country" value={country} onChange = {(event) => {setCountry(event.target.value)}} />
        </label> 
        
        <label>City:  
        <input type="text" name="city" placeholder="Enter City" value={city} onChange = {(event) => {setCity(event.target.value)}}/> 
        </label> 

        <label>Name:  
        <input type="text" name="name" placeholder="Short description"  value={name} onChange = {(event) => {setName(event.target.value)}}/> 
        </label> 
        
        <label>Image 
        <input type="url" name="image" placeholder="Enter url"  value={image} onChange = {(event) => {setImage(event.target.value)}}/> 
        </label> 

        <button type="submit">Add Apartment</button>


    
        </form>



    )
}

export default AddForm;