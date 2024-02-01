'use client';
import { head } from "next/document";
import { useEffect, useState } from "react";
import ChriIcon from "./components/chriicon";
import Link from 'next/link';
const HomePage = () => {

const [users, setUser] = useState([]);

useEffect(() => { 
  async function fetchData() {
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    setUser(data);
   } 
   fetchData();
 },[]);


  return (
    <div className="chriPosts">
      <head>
        <title>🏡homepage</title>
        <meta name="description" content="This welcoming page"></meta>
      </head>
      <ChriIcon />      
      {users.map(user => (
        <>
        <div className="post">
             <div className="postTitle">
            <h3 className="posterName"><Link href='/users/Henry' className="colored">{user.name}{ user.icon}</Link> </h3>
            <span>Date: { user.date}</span>
          <br/>
            <span>Time: { user.time}</span>
          </div>
             <br/>
        <div className="postBody">
            <p>{ user.post}</p>
          </div>

          </div>
          </>
      ))}

      </div>
  )
}

 export default HomePage;
// export const generateMetadata=()=>{
//   return {
//     title: '🏡homepage',
//     description:'This welcoming page',
//   }
// }
