import Link from 'next/link';
import Image from 'next/image';
import Facebook from '/public/facebook.png';
import Twitter from '/public/twitter.png';
import Github from '/public/github.png' ;
import Instagram from '/public/instagram.png';
import ChriIcon from '../components/chriicon';
const Contact = () => {
  return (
    
    <div className="contantPageMain">
      < ChriIcon />
      <p className='colored'>Follow us here!</p>
      <div className="imagesContainer">
       <Link href='#'>
        <div className="imageBox">
            <Image src={Facebook} alt='facebbok' />
            <p className='text-center mt-2'>Facebook</p>
          </div>
        </Link>
        <Link href='#'>
        <div className="imageBox">
            <Image src={Twitter} alt='Twitter' />
            <p className='text-center mt-2'>X</p>
          </div>
        </Link>
        <Link href='#'>
        <div className="imageBox">
            <Image src={Github} alt='Github' />
            <p className='text-center mt-2'>GitHub</p>
          </div>
        </Link>
        <Link href='#'>
        <div className="imageBox">
            <Image src={Instagram} alt='Instagram' />
            <p className='text-center mt-2'>Instagram</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Contact;
export const generateMetadata=()=>{
  return {
    title: '📱Contact',
    description:'This page show  the contact',
  }
}
