import React from 'react'
import { db } from '../../config/firebaseConfig'
import './Posts.css'

function Posts(props) {

    //console.log(props.post.content);

    const handleDelete = e => {
        e.preventDefault();
        db.collection('blog-posts').doc(props.post.id).delete();
    }

    return (
        <div>
            <div className="post mb-1">

                <div>
                    <h3 className="my-1 text-lg md:text-2xl text-brand font-bold">
                        {props.post.title}                    {
                        props.user ? (<button onClick={handleDelete} className="bg-white hover:bg-gray-100 text-lg font-semibold p-1 rounded-full">🗑️</button>) : (null)
                    }
                    </h3>
                    
                    <p className="leading-normal text-sm md:text-xs text-gray-600">
                        {props.post.posted_at} at {props.post.posted_at_hour} Jakarta Time
                </p>
                    <div className="my-1 leading-normal text-base md:text-lg mb-8" dangerouslySetInnerHTML={{ __html: props.post.content }} />


                </div>
                <div>
                    <img className="post__image" src={props.post.imageUrl} alt="" />
                </div>
            </div></div>

    )
}

export default Posts
