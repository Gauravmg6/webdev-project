import React, { Fragment } from 'react'
import { AiOutlineClose } from "react-icons/ai";

const Register = ({removeClick,changeClick}) => {
    return (
        <Fragment>
            <section id='login'>
                <button id='icon' onClick={removeClick}><AiOutlineClose></AiOutlineClose></button>
                <div id='form'>
                    <h2>Register as a professional</h2>
                    <form action="">
                        <input type="text" placeholder='Enter Full Name' />
                        <input type="text" placeholder='Enter Mobile Number' />
                        <input type="text" placeholder='Enter Email' />
                        <input type="text" placeholder='Enter Password' />
                        <input type="text" placeholder='Confirm Password' />
                        <input type="text" placeholder='Full Address' />
                        <select style={{display: "inline-block"}}>
                            <option value="">Offered Services</option>    
                        </select><br />
                        <button id='submit'>Register</button>
                    </form>
                    <button id='signup' onClick={changeClick}>Have an account? Login</button>
                </div>
            </section>
        </Fragment>
    )
}

export default Register