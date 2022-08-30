import {  useState } from "react";


const useForm = validateInfo  => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        churchName: '',
        password:'',
        password2: ''

    })

    const [errors, setErrors] = useState({})

    const[isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = e => {

        const{name,value} = e.target
        setValues({
            ...values, 
            [name]: value
        })

        
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values))
        setIsSubmitted(true)
    }

    return {handleChange, values , handleSubmit, errors}
}

export default useForm