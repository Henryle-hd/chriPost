'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({children}) => {
  const usePathName= usePathname();
  return (
      <div className='navMain'>
            <Link href='/'>
              <h2 className='title'>Chri-<span className='colored'>Post</span></h2>
      </Link>
      {usePathName == '/users/Henry'|| usePathName =='/users/Alex'|| usePathName =='/users/Juster' || usePathName =='/users/Ronaldo' || usePathName =='/users/Cia' || usePathName =='/users/Lee' ? (
        <ul className='link-container'>            
        
       
              <li>
                  <Link className='link' href='/'>Home</Link>
                  <Link className='link' href='/aboutus'>About us</Link>
            <Link className='link' href='/contact'>Contact</Link>
             <Link className='link' href='/otherusers'>OtherUser</Link>
              </li>
          </ul>
      ) : (
           <ul className='link-container'>   
       
              <li>
                  <Link className='link' href='/'>Home</Link>
                  <Link className='link' href='/aboutus'>About us</Link>
                  <Link className='link' href='/contact'>Contact</Link>
                  <Link className='link' href='/addpost'>Post 📤</Link>
                 
              </li>
          </ul>
       )}

         {children}
      
    </div>
  )
}

export default Navigation;
