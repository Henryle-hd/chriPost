'use client';
import { useEffect, useState  } from "react";
const ChriIcon = () => {
   
  const [icon, setIcon] = useState('🎅');

  useEffect(() => {
    const imogeArray=['🎅','🤶'];
    let index = 0;
    const interval = setInterval(() => {
      if (index < imogeArray.length) {
        setIcon(imogeArray[index]);
        index++;
      }
      
      
      // if (index >= imogeArray.length) {
      //   index = 0;
      // }
    }, 1000);
    
    return () => clearInterval(interval);
  });

  return (
    <div>
      <br />
      <h2 className="text-center iconChri">{icon}</h2>
    </div>
  )
}

export default ChriIcon;