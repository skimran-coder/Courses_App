import { useEffect } from "react"
import { apiUrl } from "../data"
import { useState } from "react"

const useCourses = () => {

    const [courses, setCourses] = useState([])
    
    useEffect(() => {
        getCourses() 
    }, [])

    async function getCourses() {
        const response = await fetch(apiUrl);
        const data = await response.json()
        console.log(data);
        setCourses(data?.data)
    }
    return courses;
}

export default useCourses