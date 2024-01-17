'use client'
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const CreatePost = () => {
    const [id, setID] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [date, setDate] = useState([]);
    const [time, setTime] = useState([]);
    const [icon, setIcon] = useState([]);
    const [post, setPost] = useState([]);

    const createpost = async () => {
        let response = await fetch('http://localhost:3000/api/users',
            {
                method: 'POST',
                body: JSON.stringify({id,name,email,password,date,time,icon,post})
            });
        response = await response.json();

        if (response.ok) {
            alert('post created successfully')
            
        }
        else {
            alert('post not created');
        }

    };






  return (
      <div className='addPostMain'>
          <h2 className='text-center colored'>Create a post</h2>
          <div className='inputBox'>
              <input type='text' onChange={(e) => setID(e.target.value)} value={id} placeholder='enter id' />
              
              <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='enter username' />
              
              <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter email' />
              
              <input type='text' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='enter password' />
              
              <input type='text' onChange={(e) => setDate(e.target.value)} value={date} placeholder='enter date' />
              
              <input type='text' onChange={(e)=>setTime(e.target.value)} value={time} placeholder='enter time' />
              <input type='text' onChange={(e) => setIcon(e.target.value)} value={icon} placeholder='enter icon' />
              
              <textarea onChange={(e) => setPost(e.target.value)} value={post} placeholder='enter your post'></textarea>
              
              <button onClick={createpost}> chri-post </button>
        </div>
    </div>
  )
}

export default CreatePost
