import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="font-[K72-Font-2] flex justify-center items-center gap-4">

<div className="border-3 rounded-full  flex items-center px-10 hover:border-[#D3FD50] hover:text-[#D3FD50]">
    <Link to="/projects" className="text-[5.8vw] leading-[5vw] uppercase px-9  pt-3">PROJETS</Link>
</div>
    

      <div className="border-3 rounded-full  flex items-center px-10  hover:border-[#D3FD50] hover:text-[#D3FD50]">
           <Link to="/agence" className="text-[5.8vw] leading-[5vw] uppercase  pt-3">AGENCE</Link>
      </div>
   
    </div>
  )
}

export default HomeBottomText