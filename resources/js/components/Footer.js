import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../../css/footer.css';


const Footer = () => {
    return (    

        //my-0 mx-0 mr-0 px-0 w-100 h-100
        <div calssName="footer">
            <div calssName="footer-top">
                <div className="container "> 
                    <div className="row"> 

                    {/*---------------------- first section -------------------------- */}

                        <div className="sectionOneDiv text-center col-md-3 col-sm-6 col-xs-12">
                            <h3 className="text-body">Follow Us</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a type="button" className="btn-floating btn-lg"><i><FontAwesomeIcon icon={faFacebook} /></i> </a>
                            <a type="button" className="btn-floating btn-lg"><i><FontAwesomeIcon icon={faGoogle} /></i> </a>
                            <a type="button" className="btn-floating btn-lg"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
                            <a type="button" className="btn-floating btn-lg"> <i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                        </div>

                    {/*---------------------- second section -------------------------- */}
                    
                        <div className="sectionTwoDiv col-md-3 col-sm-6 col-xs-12">
                            <h3 className="text-body">Contact US</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>

                    {/*---------------------- third section -------------------------- */}

                        <div className="sectionTwoDiv col-md-3 col-sm-6 col-xs-12">
                            <h3 className="text-body">Call US</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
                        </div>

                    {/*---------------------- fourth section -------------------------- */}

                        <div className="sectionTwoDiv col-md-3 col-sm-6 col-xs-12">
                            <h3>Subscribe to our newsletter</h3>
                            <form>
                                <div className="form-row">
                                    <div className="col">
                                        <input className="form-control" type="email" placeholder="email" required></input>
                                    </div>
                                    <div className="col">
                                    <input className="btn btn-primary" type="submit" value="subscribe"></input>
                                    </div>  
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/*---------------------------- copyrights section ---------------------------------------- */}

            <div className="footer-bottom">
                <div className="text-center bg-success">
                    <p>© 2020 Copyrights:Bookly.com</p>
                </div>
            </div>   

       </div>
    ) 
}



export default Footer;