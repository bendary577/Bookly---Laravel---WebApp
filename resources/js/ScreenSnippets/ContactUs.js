import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ContactUs extends Component {

    render(){
        return (

          //  <!--- justify-content-center align-items-center -->
          //  <!--- row h-50 w-50 -->

            <div className="ContactDiv" >
                <div className="d-flex align-items-center justify-content-center">

                    <div className="card my-5">

                        {/*--------------------- card header ------------------------------------------------ */}

                        <div className="card-header bg-light text-body text-center font-weight-bold py-4">
                            <h2><strong>Contact Us</strong></h2>
                        </div>

                        {/*--------------------- card body ------------------------------------------------ */}

                    <div className="card-body">
                        <form className="needs-validation" method="post" novalidate>

                        {/*---------------------name ------------------------------------------------ */}

                                
                                <div className="form-group">
                                    <input type="text" placeholder="name" className="form-control" name="firstName" maxLength="25" required></input>
                                    <div className="invalid-feedback">Please enter a valid name.</div>
                                </div>
                                

                        {/*-------------------- email  ----------------------------------------- */}

                                <div className="form-group">
                                    <input type="eamil" placeholder="email" className="form-control" name="email" maxLength="100" required></input>
                                    <div className="invalid-feedback">Please enter a valid email.</div>
                                </div>
                                
                       
                        {/*-------------------- message  ----------------------------------------- */}

                                <div className="form-group">
                                    <input type="text" placeholder="message" className="form-control" name="message" required></input>
                                    <div className="invalid-feedback">Please enter a valid message.</div>
                                </div>

                        {/*---------------------submit button ----------------------------------------- */}

                                <div className="form-group mt-4">
                                    <input className="btn btn-primary btn-block form-control" type="submit" value="send"></input>
                                </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
    
}

export default ContactUs;