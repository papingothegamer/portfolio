import {
    IoCodeWorking,
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  
  import img1 from "./img/darkmodeapp.png";
  import img2 from "./img/airpods-mockup.png";

  
  
  
  export const Roadmap = [
    {
      id: 1,
      date: "April 2023 - September 2023",
      iconsSrc: <IoCodeWorking />,
      title: "Junior Frontend Developer",
      location: "Integrify Finland",
      description:
        "Full Stack Development",
    },
    {
      id: 2,
      date: "January 2020 - present",
      iconsSrc: <IoCodeWorking />,
      title: "Student",
      location: "Ternopil National Technical University, Ternopil, Ukraine",
      description:
        "B.Eng Computer Engineering",
    },
    {
      id: 3,
      date: "2018-2020",
      iconsSrc: <IoCodeWorking />,
      title: "Student",
      location: "Elizade University, Nigeria",
      description:
        "B.Eng Computer Engineering",
    },
];
  
  export const Projects = [
    {
      id: 1,
      name: "darkmode app",
      imageSrc: img1,
      techs: "React JS, CSS",
      github: "https://github.com/papingothegamer/darkmodeapp",
      live: "https://darkmodeapp.vercel.app/",
    },
    {
      id: 2,
      name: "Airpods Max mock display page",
      imageSrc: img2,
      techs: "NextJS, Typescript",
      github: "https://github.com/papingothegamer/airpods-max-sample",
      live: "https://airpods-max-sample.vercel.app/",
    },
  ];

  
  export const SocialLinks = [
    {
      id: 1,
      iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
      name: "GitHub",
      link: "https://github.com/papingothegamer",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
      ),
      name: "Twitter",
      link: "https://twitter.com/papingothegamer",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
      ),
      name: "LinkedIn",
      link: "https://linkedin.com/in/toluwanimidaramola",
    },
    {
      id: 1,
      iconSrc: (
        <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
      ),
      name: "Whatsapp",
      link: "#",
    },
  ];