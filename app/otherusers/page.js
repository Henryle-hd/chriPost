'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Otherusers = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch('http://localhost:3000/api/users');
      data = await data.json();
      setUser(data);
    }
    fetchData();

  }, []);


  return (
      <div className="otherUsersContainer">
      {users?.map((user) => (
        
           <Link href='/users/Henry' >
          <div className="userBox">
            <h2 className="text-center iconChri">{ user.icon}</h2> 
            <span className="colored">{ user.name}</span>
              </div>
              </Link>        
      ))}
    </div>
  )
}

export default Otherusers
