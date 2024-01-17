import Head from 'next/head';

const User = ({ params }) => {
  return (
    <div>
      <Head>
        <title>{params.user}</title>
        <meta name="description" content="" />
      </Head>
          <p className="text-center mb-96">
              <span className="iconChri">👋</span>,  <br/>Hello
              <p>I am  <span className="colored">{params.user} </span>
              I wish merry christmas and Happy new year 
              </p> 
              
      </p>
    </div>
  )
}

export default User;
