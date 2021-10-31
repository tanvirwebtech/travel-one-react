import React from "react";
import "./About.css";
const About = () => {
    return (
        <div className="about">
            <div className="about-content py-20">
                <h2 className="text-5xl font-semibold text-greenblue">
                    About Us
                </h2>
                <p className="my-3 text-xl w-2/5 mx-auto mt-8 text-white">
                    We are a USA based travel agency. We provide differents
                    package tour on differents cities all over the globe. Our
                    tour packages are group based. We take a number of people to
                    explore different corner of the world. You can book your
                    seat for making a trip on your desired city
                </p>
            </div>
        </div>
    );
};

export default About;
