const validate = (values)=>{
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 25) {
        errors.name = 'Must be 25 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or greter';
    }
    if (!values.rePassword) {
        errors.rePassword = 'Required';
    } else if (values.password !== values.rePassword) {
        errors.rePassword = 'Must be match with your password field';
    }
    if (!values.gender) {
        errors.gender = 'Please select your gender!';
    }
    if (!values.telphone) {
        errors.telphone = 'phone number is required!';
    } else if(!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.telphone))
    {
        errors.telphone = 'must be enter correct phone number';
    }
    if(!values.birthdayDate)
    {
        errors.birthdayDate = 'Date of birth  is required!'; 
    }
    
    
    return errors;

}

export default validate;