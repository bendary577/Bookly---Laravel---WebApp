import React from 'react';


const AboutUs = () => {
    return (    
        <div className="container">  
            <div className="row"> </div>

            {/*---------------------- left section -------------------------- */}
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <h3 className="text-left font-weight-bold text-body">Who Are We ?</h3>

                    <p className="text-left text-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley</p>

                </div>

             {/*---------------------- right section ------------------------ */}

                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img src="./imgs/img.jpg"></img>
                </div>
             
        </div>
    ) 
}

export default AboutUs;