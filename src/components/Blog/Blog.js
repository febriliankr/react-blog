import React, { useState, useEffect } from "react";
import {db} from '../../config/firebaseConfig'
import Posts from './Posts'
import PublishPost from './PublishPost'
import 'firebase/firestore';
import CustomTitlePage from "../CustomTitlePage";


function Blog({user}) {

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

    //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
    useEffect(() => {

        db.collection('blog-posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            //console.log(snapshot.docs.map(doc => doc.data().content));
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                content: doc.data().content,
                author: doc.data().author,
                posted_at: doc.data().posted_at,
                posted_at_hour: doc.data().posted_at_hour,
                timestamp: doc.data().timestamp,
                imageUrl: doc.data().imageUrl
            })
            ));
        })
    }, [input])


    



    return (
        
        
        <div className="w-full">
        <CustomTitlePage title="Blog"/>
            <div className="flex">
                <ul>
                    {posts && posts.map((post) => (
                        <Posts post={post} key={post.id} user={user}  />
                    ))}
                </ul>
            </div>

            {
                user ? (<PublishPost/>) : (null)
            }
            
            
        </div>
    );

};

export default Blog;
