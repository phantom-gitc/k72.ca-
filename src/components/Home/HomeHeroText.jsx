import Video from "./Video"

const HomeHeroText = () => {
  return (
    <div className="font-[K72-Font-1] pt-2 flex flex-col items-center justify-center text-center">
        <div className=" text-[8.5vw] uppercase leading-[9vw]  ">L&apos;étincelle</div>
        <div className="text-[8.5vw] uppercase leading-[9vw] flex items-center justify-center gap-2">
          <div>qui</div>
          <div className="h-[7vw] w-[16vw] overflow-hidden rounded-full flex-shrink-0">
            <Video/>
          </div>
          <div>génère</div>
        </div>
        <div className=" text-[8.5vw] uppercase leading-[9vw]  ">la créativité</div>
    </div>
  )
}

export default HomeHeroText