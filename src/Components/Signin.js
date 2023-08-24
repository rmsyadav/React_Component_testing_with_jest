import { useNavigate } from "react-router-dom";
import validate from "../Utility/validateForm";
import "../Stylesheet/Signin.css";
import { useFormik } from 'formik';
//import customApi from "../customFetchApi/fetchApi";
import { useState } from "react";
import axios from "axios";
import Footer from "./CommonComponents/Footer";

const SignIn = ()=>{
    const [isSuccessLogin,setIsSuccessLogin] = useState();
    const navigate= useNavigate();
    const formik = useFormik({
        initialValues: {
          email: '',
          password:''
        },
        validate,
        onSubmit: async(values) => {
            const userDeatils ={
                email:values.email,
                password:values.password
            }
          const response = await axios.post('/shopping/api/v1/login',userDeatils);
          if(response.data.statusCode === 200 && response.data.statusMessage === "success!" )
          {
            setIsSuccessLogin("success")
            navigate('/');
          }
          else{
            setIsSuccessLogin("error")
          }
        },
      });

   const redirectToSignUpPage = ()=>{
    navigate('/');
   }
    return(
    <>
    <section className="container gradient-form rounded-3" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
        <div className="container py-5">
            <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                <div className="row g-0">
                    <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                        {isSuccessLogin && isSuccessLogin === "success" ?
                          <div className="alert alert-success">
                          <strong>Successfully you have loggedIn!</strong>
                         </div>:isSuccessLogin && isSuccessLogin === "error" ?<div className="alert alert-danger">
                         <strong>email or password is wrong!</strong>
                         </div>:null
                        }
                        
                        <div className="text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{width: "185px"}} alt="logo"/>
                        <h4 className="mt-1 mb-5 pb-1 clipImage">We are The Lotus Team</h4>
                        </div>

                        <form onSubmit={formik.handleSubmit}>
                        <h5 className="clipImage2 my-3">Please login to your account</h5>

                        <div className="form-outline mb-4 input-group">
                        <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-envelope-at-fill"></i></span> 
                            <input type="email" id="email" data-testid="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control form-control-md" placeholder="email address" 
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <label className="form-check-label ms-2 text-danger" htmlFor="femaleGender">{formik.errors.email}</label>
                            ) : null}
                        </div>

                        <div className="form-outline mb-4 input-group">
                        <span className="btn btn-outline-secondary form-field-mandatory-icon"><i className="bi bi-shield-lock-fill"></i></span> 
                            <input 
                            type="password" 
                            id="password"
                            data-testid="password" 
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="form-control form-control-md" 
                            placeholder="Password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <label className="lform-check-labe ms-2 text-danger" htmlFor="femaleGender">{formik.errors.password}</label>
                            ) : null}
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <input data-testid="submitbtn" className="form-control btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" value="Login"></input>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <button type="button" data-testid="switchbtn" className="btn btn-outline-danger" onClick={redirectToSignUpPage}>Create new</button>
                        </div>

                        </form>

                    </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="large mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
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

export default SignIn;