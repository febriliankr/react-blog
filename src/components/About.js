import React, { Component } from "react";
import profileImage from './img-profile.jpg'
import CustomTitlePage from "./CustomTitlePage";

function About() {

    
        const title = 'About';
        return (
            <div>

            <CustomTitlePage title={title}/>

            <div className="flex mb-4">
                <div className="w-3/4">
                <h3 className="my-4 text-lg md:text-2xl text-brand font-bold">
                    The name's Febrilian Kristiawan...
                </h3>
                <div className="leading-normal text-base md:text-lg mb-8">
                        and I'm a Self-Employed React Developer and also a Medical Student in University of Indonesia.    
                </div>
                </div>
                    
                <div class="w-1/4">
                <div className="circle image-wrap">
                    <img src={profileImage} className="circle image-wrap" alt="me"/>
                    </div>
                </div>


            </div>


            <div class="w-3/4">
                    <h3 className="my-4 text-lg md:text-2xl text-brand font-bold">
                        "So... what are you working on right now?"
                    </h3>
                    
                    <div className="leading-normal text-base md:text-lg mb-8">
                        I'm working on several client's full-stack projects. I have my own web development agency that focuses on quick deployment and beautiful design.
                    </div>
                 </div>
            </div>
            
            

            
        );
    
};

export default About;
