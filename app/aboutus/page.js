import Images from "next/image";
import ProfilePicture from "/public/IMG_0365.jpg"
const Aboutus = () => {
  return (
    <div className="AboutUsMain">
      <div className="imageContainer">
      <Images src={ProfilePicture} />
      </div>
      <h2 className="colored">Henry Dioniz</h2>
      <p>
       <span className="imoge">😋</span> 
        <br/>
        Additionally, a community forum will be implemented to allow students to interact and provide help, answers, and solutions to each other's problems. The project will also provide instructions and guidance on using different CBE systems, admission servers, library resources, CBESO (Business Education Students Organization), financial services, and other departments.</p>
    </div>
  )
}

export default Aboutus;
export const generateMetadata=()=>{
  return {
    title: '💡about-Us',
    description:'This page tell the story of the us',
  }
}
