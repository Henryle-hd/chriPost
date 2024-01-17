'use client';
import { usePathname } from "next/navigation"
const Landing = () => {
  const usePathName = usePathname();
  return (
    <div>
      <h2 className="pathName" >{usePathName}</h2>
      <br />
    </div>
  )
}

export default Landing;
