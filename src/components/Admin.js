import React, { useState } from "react";
import CustomTitlePage from "./CustomTitlePage";
import { auth } from '../config/firebaseConfig'
import { useHistory } from "react-router-dom";

function Admin({ user }) {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))

        //redirect to home
        history.push('/');
    }

    return (
        <div className="m-auto">

            <CustomTitlePage title="Admin" />

            <div class="flex w-full">


                {
                    user ? (
                        <div className="max-w-sm">
                            <button onClick={() => auth.signOut()} className="bg-white hover:bg-gray-100 text-brand font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">Log Out</button>
                        </div>
                    ) : (
                            <form className="w-full max-w-sm ">
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Email
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input placeholder="Email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                            Password
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="*****" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center">
                                    <div className="md:w-1/3"></div>
                                    <div className="md:w-2/3">
                                        <button onClick={signIn} className="bg-white hover:bg-gray-100 text-brand font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit">
                                            Log In
                </button>
                                    </div>
                                </div>
                            </form>

                        )
                }

            </div>
        </div>
    );

};

export default Admin;
