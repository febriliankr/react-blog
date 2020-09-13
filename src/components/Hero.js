import React, { Component } from 'react'
import EmailSignupForm from './EmailSignupForm'
import TitleHero from './TitleHero';
import CustomTitlePage from './CustomTitlePage';

const Hero = ({user}) => {


    return (
        <div className="w-full">
        
        <CustomTitlePage title="febrilian 🪁"/>
        {/* <div className="container mx-auto pl-4 pr-5 flex flex-col w-full xl:w-3/4 lg:items-start overflow-y-hidden"> */}
            <h1 className="my-4 text-3xl md:text-2xl text-brand font-bold leading-tight">Hello! &#128519;</h1>
            <p className="leading-normal text-base md:text-lg mb-8">This website is under a maintenance. Please come back a little later!</p>

            <h3 className="my-4 text-lg md:text-xl text-brand font-bold">"So, what are you doing anyway? &#128560;"</h3>
            <p className="leading-normal text-base md:text-lg mb-8">Okay okay, I know that I am a medical student, but I am also a react developer so I am planning to update my personal website with react.</p>

            <h3 className="my-4 text-lg md:text-xl text-brand font-bold">"Well that's interesting! &#128561;"</h3>
            <p className="leading-normal text-base md:text-lg mb-8">I know right! So if you're interested on when will my new site be up and running, you can enter your email down here to receive a notification. Don't worry I won't be spamming, I'm sending it with my personal email.</p>

            <EmailSignupForm />

        {/* </div> */}
        </div>


    )
}

export default Hero;
