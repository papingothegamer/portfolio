import Spline  from "@splinetool/react-spline"
import {useState} from "react"
import { IoMenu, IoLogoGithub, IoLinkOutline } from 'react-icons/io5';

import profile from './img/profile.JPG'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Roadmap, Projects, SocialLinks } from "./data";
import { AnimatePresence, motion } from "framer-motion";


function App() {

const [isActive, setIsActive] = useState(false)
  
return (
  <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
     
     {/*NavBar*/}
     <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w880 bg-navBar p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">Toluwanimi Daramola</p>

        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
          <a
           href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           >Home
           </a>

           <a
           href="#about me" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           >About Me
           </a>

           <a
           href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           >Projects
           </a>

           <a
           href="#contact me" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           >Contact Me
           </a>

           <a
           href="https://drive.google.com/file/d/1qPgLpeAhAViNnu0HIgyYh6D3RcUyBRIP/view?usp=drivesdk" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover: border-gray-100 duration-100 ease-in-out "
           > Download
           </a>
        </div>


        <motion.div 
        whileTap={{scale: 0.5 }}
        initial={{opacity : 0, scale : 0.2}}
        animate={{opacity: 1, scale: 1}}
        transition={{type: "spring"}}
        className="block md:hidden ml-auto cursor-pointer">
          {() => setIsActive(!isActive)}
          <IoMenu className="text-2x1 text-textBase" />
        </motion.div>

        {isActive && (

           <motion.div 
           initial={{opacity: 0, scale: 0.5}}
           animate={{opacity:1 , scale : 1.1}}
           exit={{opacity: 0 , scale: 0.5}}
           transition={{delay: "0.1s", type: "spring"}}

           className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
             <a
           href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           onClick={() => setIsActive(false)}
           >Home
           </a>

           <a
           href="#about me" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           onClick={() => setIsActive(false)}
           >About Me
           </a>

           <a
           href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           onClick={() => setIsActive(false)}
           >Projects
           </a>

           <a
           href="#contact me" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
           onClick={() => setIsActive(false)}
           >Contact Me
           </a>

           <motion.a
           whileTap={{scale:0.8}}

           href="https://docs.google.com/file/d/1rMM50Pg9BIQBQ8OCuN4rXV8-W9imDiGh/edit?usp=docslist_api&filetype=msword" className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover: border-gray-100 duration-100 ease-in-out "
           onClick={() => setIsActive(false)}
           > Download
           </motion.a>
        </motion.div>
        )}
           
        
      </div>
     </nav>


     <div className="relative" id="home">
     <Spline scene="https://draft.spline.design/u6MYk-qyABTpMJqw/scene.splinecode" />

     <div className="absolute bottom-10 w-full justify-center items-center flex">
      <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3x1">
        <p className="text-white">Press and drag to orbit</p>
      </div>
     </div>
    </div>

    {/* bio page */}
     
     <main className="w-[80%] mt-5">
      {/* about me */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
        {/*image*/}
        <div className="w-full h-420 flex items-center justify-center">
         <div className="w-275 h-340 bg-slate-600 rounded-md relative">
          <img className="w-fill h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={profile} alt=""/>
         </div>
        </div>
         {/*content*/}
        <div className="w-full h-420 flex flex-col items-center justify-center"> 
          <p className="text-lg text-textBase text-center">
            Hi there, I'm Toluwanimi Daramola. I'm currently a computer engineering student in my final year of study. I decided to delve into frontend development in September 2022, and I have been learning since then. I am a recent graduate of a fullstack development course at Integrify, where I learned implementation of React systems for Web 3.0 websites and web apps, as well as other web development & data security concepts. When I'm not coding, you can find me playing video games (mostly FIFA and Call of Duty), reading up on history, or watching Chelsea (my favorite football team).
          </p>


          <motion.a
  href="https://docs.google.com/file/d/1rMM50Pg9BIQBQ8OCuN4rXV8-W9imDiGh/edit?usp=docslist_api&filetype=msword" 
  whileTap={{ scale: 0.8 }}
  class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-400 to-gray-600 group-hover:from-gray-400 group-hover:to-white-600 hover:text-white dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-grey-800 hover:shadow-lg hover:shadow-stone-500/50 hover:dark:shadow-lg hover:dark:shadow-black-800/80"
>
  <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Get my resume here
  </span>
</motion.a>

        </div>

      </section>

      {/*timeline*/}
      <section className="w-full flex items-center justify-center">
        <VerticalTimeline>
       {
        Roadmap && 
        Roadmap.map(n => (
          <VerticalTimelineElement
            key={n.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(21,24,31)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,31)' }}
            date={n.date}
            iconStyle={{ background: 'rgb(21,24,31)', color: '#fff' }}
            icon={n.iconsSrc}
          >
            <h3 className="vertical-timeline-element-title">
              {n.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {n.location}
            </h4>
            <p>
             {n.description}
            </p>
         
            </VerticalTimelineElement>
        ))}
        </VerticalTimeline>
      </section>

      {/*projects*/}
      <section className="flex flex-wrap items-center justify-evenly my-24 gap-4 " id="projects">
      {Projects && Projects.map((n) => (
  <div key={n.id} className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
    <p className="text-lg text-textBase font-medium uppercase">
      {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
    </p>
    <img
      src={n.imageSrc}
      className="w-full h-full object-cover rounded-md my-4"
      alt=""
    />
    <div className="flex flex-1 items-center justify-between">
      <p className="text-lg text-gray-300">
        Technologies
        <span className="block text-sm to-gray-500">{n.techs}</span>
      </p>
      <a href={n.github}>
        <motion.div whileTap={{ scale: 0.8 }}>
          <IoLogoGithub className="text-textBase text-3xl cursor-pointer"></IoLogoGithub>
        </motion.div>
      </a>
      {n.live && (
        <a href={n.live} target="_blank" rel="noopener noreferrer">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoLinkOutline className="text-textBase text-3xl cursor-pointer"></IoLinkOutline>
          </motion.div>
        </a>
      )}
    </div>
  </div>
))}
       </section>

       {/*contact*/}
       <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
        <p className="text-2x1 text-gray-500 capitalize"> Contact Me On</p>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
         {
          SocialLinks && SocialLinks.map(n => (
            <motion.a
            whileTap={{ scale: 0.8 }}
            key={n.id}
            onClick={(e) => {
              e.preventDefault(); 
              window.open(n.link, "_blank"); 
            }}
            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2x1 hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            {n.iconSrc}
            <p className="text-lg text-textBase">{n.name}</p>
          </motion.a>
          ))
         }
        </div>


       </section>
      </main>
   </div>
   </AnimatePresence>
  );
}

export default App;



