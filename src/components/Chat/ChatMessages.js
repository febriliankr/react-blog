import React from 'react'


function ChatMessages(props) {

    //console.log(props.post.content);

    return (
        <div className="mb-8">
        
            <h3 className="text-base md:text-lg text-brand">
            {props.post.title} 
            </h3>
            <p className="leading-normal text-base md:text-lg">
            {props.post.content}
            </p>
            <p className="mt-1 leading-normal text-sm md:text-xs text-gray-600">
            {props.post.posted_at} at {props.post.posted_at_hour}
            </p>
        </div>
    )
}

export default ChatMessages
