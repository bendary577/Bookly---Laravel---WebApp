import React from "react";
import "../../css/aboutus.css";
import theImage from "../../imgs/introBook.png";

const AboutUs = () => {
    const imgStyle = {
        width: 600,
        height: 600
    };

    return (
        <div className="about">
            <div className="intro container">
                <div className="middle row">
                    {/*---------------------- start left section -------------------------- */}

                    <div className="left col-sm-6 col-md-8">
                        <h3 className="text-left font-weight-bold text-body">
                            Who Are We ?
                        </h3>

                        <h4 className="text-left text-body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley
                        </h4>
                    </div>

                    {/*---------------------- end left section ---------------------------- */}
                    {/*---------------------- start right section ------------------------- */}

                    <div className=" col-sm-6 col-md-4">
                        <img
                            src={theImage}
                            alt="Logo"
                            calssName="img img-responsive"
                            style={imgStyle}
                        />
                    </div>

                    {/*---------------------- end right section --------------------------- */}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
