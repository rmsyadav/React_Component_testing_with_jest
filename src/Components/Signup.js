import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { dateConvertIntoMiliSecond } from "../Utility/DateConversion";
import { useState } from "react";
import validate from "../Utility/validateRegistrationForm";
import axios from "axios";
import "../Stylesheet/Signup.css";
import Footer from "./CommonComponents/Footer";
const Signup =()=>{
    const navigate= useNavigate();
    const [isSuccessRegister,setIsSuccessRegister] = useState();
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          birthdayDate: '',
          gender:'',
          telphone:'',
          password:'',
          rePassword:''

        },
        validate,
        onSubmit: async(values) => {
            const userDeatils ={
                username:values.name,
                email:values.email,
                dob:dateConvertIntoMiliSecond(values.birthdayDate),
                gender:values.gender,
                phone:values.telphone,
                password:values.password
            }
          const response = await axios.post('/shopping/api/v1/register',userDeatils);
          if(response.data.statusCode === 200 && response.data.statusMessage === "success!" )
          {
            setIsSuccessRegister("success")
            navigate('/signin');
          }
          else{
            setIsSuccessRegister("error")
          }
        },
      });
    return(<>
         <section className="container-fluid bg-image rounded-3" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
            <div className="mask py-5 d-flex align-items-center container gradient-custom-3">
                <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{borderRadius: "15px"}}>
                        <div className="card-body px-5 py-2">
                        <h2 className="text-uppercase text-center mb-5 clipImage">Create an account</h2>
                        {isSuccessRegister && isSuccessRegister === "success" ?
                                <div className="alert alert-success mb-5">
                                <strong>Successfully you have registered!</strong>
                                </div>:isSuccessRegister && isSuccessRegister === "error" ?<div className="alert alert-danger">
                                <strong>Something went wrong!</strong>
                                </div>:null
                        }
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-outline input-group">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-person-fill"></i></span>   
                                <input type="text" data-testid="name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className="form-control form-control-md" placeholder="Your Name!" />
                            </div>
                            {formik.touched.name && formik.errors.name ?<label className="form-label text-danger"  data-testid="errorLabel" htmlFor="form3Example1cg">{formik.errors.name}</label>:null}
                            <div className="form-outline input-group mt-3">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-envelope-at-fill"></i></span>   
                                <input type="email" data-testid="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className="form-control form-control-md" placeholder="Your Emailid!"/>
                            </div>
                            {formik.touched.email && formik.errors.password ? <label className="form-label text-danger"  data-testid="errorLabel" htmlFor="form3Example1cg">{formik.errors.password}</label>:null}
                            <div className="form-outline input-group mt-3">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-shield-lock-fill"></i></span>    
                                <input type="password" data-testid="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className="form-control form-control-md" placeholder="Strong Password!" />
                            </div>
                            {formik.touched.password && formik.errors.password ? <label className="form-label text-danger"  data-testid="errorLabel" htmlFor="form3Example4cg">{formik.errors.password }</label>:null}
                            <div className="form-outline input-group mt-3">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-key-fill"></i></span>    
                                <input type="password" data-testid="rePassword" id="rePassword" name="rePassword" onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} className="form-control form-control-md" placeholder="Repeat Your Password"/>
                            </div>
                            {formik.touched.rePassword && formik.errors.telphone ? <label className="form-label text-danger"  data-testid="errorLabel" htmlFor="form3Example4cg">{formik.errors.telphone}</label>:null}
                            <div className="form-outline input-group mt-3">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-telephone-fill"></i></span>    
                                <input type="tel" data-testid="telphone" id="telphone" name="telphone" onChange={formik.handleChange} value={formik.values.telphone} onBlur={formik.handleBlur} className="form-control form-control-md" placeholder="Your Mobile Number"/>
                            </div>
                            {formik.touched.telphone && formik.errors.telphone ? <label className="form-label text-danger"  data-testid="errorLabel" htmlFor="form3Example4cdg">{formik.errors.telphone}</label>:null}
                            <div className="form-outline input-group mt-3">
                                <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-calendar-date-fill"></i></span>    
                                <input type="date" data-testid="birthdayDate" id="birthdayDate" name="birthdayDate" onChange={formik.handleChange} value={formik.values.birthdayDate} onBlur={formik.handleBlur}className="form-control form-control-md" placeholder="Your Date of Birth"/>
                            </div>
                            {formik.touched.birthdayDate && formik.errors.birthdayDate ?<label data-testid="errorLabel" className="form-label text-danger mb-4" htmlFor="form3Example4cdg">{ formik.errors.birthdayDate}</label>:null}
                            <div className="row form-outline input-group mt-3">
                            <span className="col-md-2 form-field-mandatory-icon">Gender:</span>
                            <div className="col-md-10">
                                <div className="form-check form-check-inline">
                                    <input 
                                    className="form-check-input"
                                    data-testid="femaleGender" 
                                    type="radio" 
                                    name="gender" 
                                    id="femaleGender"
                                    value="female"
                                    onChange={formik.handleChange} 
                                    />
                                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-testid="maleGender"  type="radio" name="gender" id="maleGender" onChange={formik.handleChange} 
                                    value="male" />
                                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" data-testid="otherGender"  type="radio" name="gender" id="otherGender" onChange={formik.handleChange} 
                                    value="other" />
                                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                                </div>
                            </div>
                            </div> 
                            {formik.touched.gender && formik.errors.gender ? <label  data-testid="errorLabel" className="form-label text-danger" htmlFor="form3Example4cdg">{formik.errors.gender}</label>:null}
                            <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" data-testid="termOfService"  type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                                I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                            </div>

                            <div className="d-flex justify-content-center">
                            <input type="submit" data-testid="submitbtn" 
                                className="btn btn-success form-control form-control-md btn-block btn-lg gradient-custom-4 text-body" value={"Register"}></input>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                className="fw-bold text-body"><u>Login here</u></a></p>

                        </form>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
       </section>
       <Footer></Footer>
    </>)
}

export default Signup;