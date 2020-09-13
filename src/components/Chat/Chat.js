import React, { useState, useEffect } from "react";
import { db } from '../../config/firebaseConfig'
import firebase from 'firebase/app';
import 'firebase/firestore';
import CustomTitlePage from "../CustomTitlePage";
import ChatMessages from "./ChatMessages";


function Chat() {

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState([]);

    const handleChange = (e) => {
        //console.log(e.target.value);
        //console.log(e.target.classList.contains('title'));
        if (e.target.classList.contains('title')) {
            setInput({
                title: e.target.value,
                content: input.content
            })
        } else if (e.target.classList.contains('content')) {
            setInput({
                title: input.title,
                content: e.target.value
            })
        }

        console.log(input)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const postedAt = new Date();
        const year = postedAt.getFullYear();
        const month = postedAt.getMonth();
        const date = postedAt.getDate();
        // const day = postedAt.getDay();
        const hour = postedAt.getHours();
        const minute = postedAt.getMinutes();
        // const second = postedAt.getSeconds();

        const postedAtDDMMYYYY = date + ' ' + monthNames[month] + ' ' + year;
        let postedAtHHMM = '';
        console.log('length', minute.toString().length);
        if (minute.toString().length === 1) {
            postedAtHHMM = postedAtHHMM = hour + '.0' + minute;
            console.log('HHMM', postedAtHHMM);
        } else
            if (minute.toString().length === 2) {
                postedAtHHMM = postedAtHHMM = hour + '.' + minute;
                console.log('HHMM', postedAtHHMM);
            }

        console.log('posted at:', postedAtDDMMYYYY)

        db.collection('chat').add({
            title: input.title,
            content: input.content,
            author: 'Febrilian',
            posted_at: postedAtDDMMYYYY,
            posted_at_hour: postedAtHHMM,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        //console.log(input);
        setInput({
            title: '',
            content: ''
        });
    }

    //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() => {

        db.collection('chat').orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
            //console.log(snapshot.docs.map(doc => doc.data().content));
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content,
                author: doc.data().author,
                posted_at: doc.data().posted_at,
                posted_at_hour: doc.data().posted_at_hour,
                timestamp: doc.data().timestamp
            })
            ));
        })
    }, [input])

    const title = 'Real-Time Chat With Me';
    return (


        <div className="w-full">
            <CustomTitlePage title={title} />
            <div className="flex">
                <ul>
                    {posts && posts.map((post) => (
                        <ChatMessages post={post} />
                    ))}
                </ul>
            </div>

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-10">

                <input value={input.title} onChange={handleChange} className="title mb-5" placeholder="Name" />
                <textarea value={input.content} onChange={handleChange} className="content form-textarea mt-1 block w-full" rows="3" placeholder="Type your message..."></textarea>

                <button onClick={handleSubmit} className="bg-white hover:bg-gray-100 text-brand font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Send
                </button>
            </form>



        </div>
    );

};

export default Chat;
