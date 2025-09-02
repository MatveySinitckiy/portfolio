import { memo } from "react"


function Works({img,name,link}){
    return<>
    <div className="md:w-[90%]  w-[90vw] h-[90vh] md:h-[60%]  mb-[10%] bg-white/5 shadow-2xl shadow-stone-900/50 p-[1.5vmin] hover:bg-black/55 hover:shadow-black/55 transition-all  rounded-3xl flex flex-col items-center" >
    <img className="w-[100%] h-[85%] rounded-xl border-5 border-white/15" src={img} ></img>
    <div className="flex p-[1.25vmin] flex-row h-[15%]  w-[99%] items-center justify-between font-inter-bold text-white/85" >
        <h1 className="md:text-2xl" >{name}</h1>
        <a href={link} className="bg-black/25 text-center hover:bg-black/75 hover:shadow-2xl py-[1vmin] px-[1.35vmin] active:scale-95 transition-all duration-300 rounded-2xl" >Перейти на сайт?</a>
    </div>
    </div>
   
    </>
}
export default memo(Works)