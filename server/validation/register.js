const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    //Convert empty fields to an empty string so we can use validator functions

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.churchName = !isEmpty(data.churchName) ? data.churchName : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data,password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    //Name checks
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    //Email checks 
    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }else if (!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    //Church name checks
    if(Validator.isEmpty(data.churchName)) {
        errors.name = "Church name field is required";
    }

    //Password checks
    if(Validator.isEmpty(data.password)) {
        erros.password = "Password field is requried";
    }

    if(Validator.isEmpty(data.password2)){
        erros.password2 = "Confirm passord field is required";
    }

    if(!validator.equals(data.passwod, {min: 6, max:30})) {
        errors.password = "password must be at least 6 characters";
    }
    //passwords must match

    if(1validator.equals(data.password , data.password2)){
        errors.password2 = "Passwords must match"
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};