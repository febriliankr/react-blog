import React, { useState } from 'react'
import { storage, db, timestamp } from '../../config/firebaseConfig';
import 'firebase/storage'
import 'firebase/firestore'
import { postedAtHHMM, postedAtDDMMYYYY } from './generateDate'
import RichEditor from '../RichEditor/RichEditor';

function PublishPost({ username }) {

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = (e) => {
        e.preventDefault();
        
        const uploadTask = storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                //progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                //error function
                alert(error.message);
            },
            () => {
                //complete function
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then((url) => {

                        //post image inside the database
                        db.collection("blog-posts").add({
                            title: title,
                            content: content,
                            author: 'Febrilian',
                            posted_at: postedAtDDMMYYYY,
                            posted_at_hour: postedAtHHMM,
                            timestamp: timestamp,
                            imageUrl: url,
                        })

                        setProgress(0);
                        setTitle('');
                        setContent('');
                        setImage(null);

                    })
            }
        )
    }

    return (
        <div className="imageupload">

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-10 flex flex-col items-center">
                <input value={title} onChange={e => setTitle(e.target.value)} className="title bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-100 mb-5" placeholder="Title" />
                <textarea value={content} onChange={e => setContent(e.target.value)} className="content form-textarea mt-1 block w-full bg-gray-200 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-100" rows="3" placeholder="Enter some long content"></textarea>

                <RichEditor/>

                <div class="upload-btn-wrapper ">
                    <button class="bg-white text-xs text-gray-700 font-semibold py-1 my-3 px-3 border border-gray-400 rounded shadow">Upload a photo</button>
                    <input type="file" name="myfile" onChange={handleChange} />
                </div>

                


                <div>
                    <button onClick={handleUpload} className="bg-white hover:bg-gray-100 text-brand font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow">
                        Publish Post
                    </button>
                </div>

                {
                    (progress > 0) ? (
                        <div>
                            Uploading... {progress}%
                        </div>
                    ) : (null)
                }

            </form>

        </div>
    )
}

export default PublishPost
