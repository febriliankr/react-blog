import React, { Component } from "react";

class EmailSignupForm extends Component {
    state = {
        email: '',
        emailValidity: ''
    }

    handleChange = (e) => {
        console.log('bro');
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        function validateEmail(email) {
            const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(email);
        }
        if (validateEmail(this.state.email)) {
            console.log('EMAIL CORRECT')
            this.setState({
                email: this.state.email,
                emailValidity: 'Thank you for signing up!'
            })
        } else {
            console.log('WRONG EMAIL')
            this.setState({
                email: this.state.email,
                emailValidity: 'Are you sure that is your correct email?'
            })
        }
    }





    render() {
        return (

            <form className="w-full max-w-sm" onSubmit={this.handleSubmit}>
                <div className="flex items-center py-2">
                <div className="border-b border-gray-200 py-2 mr-4">
                    <input className="appearance-none bg-transparent hover:text-gray-600 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Your Email here" aria-label="email" id="email" onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit} className="flex-shrink-0 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
                        Send me a letter
                </button>
                
                </div>
                <p className="leading-normal text-base md:text-xs mt-2 pl-2">{this.state.emailValidity}</p>
            </form>


        );
    }
}

export default EmailSignupForm;
