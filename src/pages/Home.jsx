import HomeBottomText from "../components/Home/HomeBottomText"
import HomeHeroText from "../components/Home/HomeHeroText"
import Video from "../components/Home/Video"

const Home = () => {
  return (

    <>
    <div className="w-screen h-screen fixed overflow-hidden">
        <Video/>
    </div>

    <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
        <HomeHeroText/>
        <HomeBottomText/>
    </div>

    </>
  )
}

export default Home