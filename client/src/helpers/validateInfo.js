export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()){
        errors.name = "Username Required"
    }

    if(!values.churchName.trim()){
        errors.churchName = "Church name Required"
    }

    if(!values.email){
        errors.email = "Email Required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password){
        errors.password = "Password is Required"
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    if(!values.passwrod2) {
        errors.passwrod2 = 'Password is Required'
    } else if( values.password !== values.passwrod2){
        errors.password2 = 'Passwrods do not match'
    }
    

    return errors; 


}