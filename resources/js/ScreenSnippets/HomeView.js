import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/homeview.css';


const HomeView = () => {

        return(
            //mh-100 h-100
            //my-0 mx-0 mr-0 mw-100
            //d-flex align-items-center justify-content-center
            <div className="homeview ">
                <div className="hvchild text-light container"> 

                {/* --------------------------- welcome ---------------------------------------- */}

                   <div className="row" >
                        <div className="col">
                            <h1 className="welcome text-center display-2 p-2">Welcome To Bookly</h1>
                        </div>
                   </div>

                {/* --------------------------- text ---------------------------------------- */}

                   <div className="row">
                        <div className="col">
                           <h2 className="lovers text-center p-2"> A Place For Book Lovers</h2>   
                        </div>        
                   </div>

                {/* --------------------------- button ---------------------------------------- */}
                   
                   <div className="start text-center row">
                      <div className="col p-2">
                           <Link className="btn btn-primary btn-lg active font-weight-bold" to="/signup">Get Started</Link>
                      </div>
                   </div>
                      
                </div>
            </div>

        )
} 

export default HomeView;