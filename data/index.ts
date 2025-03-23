export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a webRTC SFU with recording capabilities",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Automated coding challenge",
      des: "Coding challenge platform with multi-language execution & test cases.",
      img: "/acc_screenshot.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://vetting-engine.turing.com/coding_challenge",
    },
    {
      id: 2,
      title: "Deep developer profile (DDP)",
      des: "Developed a business-critical DDP feature, serving as Turing's internal developer resume, streamlining talent evaluation",
      img: "/ddp3.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://matching.turing.com/developer-resume-preview/58271931f20505c8912b24b50b75a62a629d6ac62eda",
    },
    {
      id: 3,
      title: "Trading systems GUI",
      des: "Alphagrep internal trading GUI for P&L monitoring built using Angular.js and Node.js",
      img: "/alpha_grep_1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      // link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 4,
      title: "Strategy GUI",
      des: "Alphagrep internal GUI to control live trading strategies built using React.js and Node.js.",
      img: "/alpha_grep_3.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      // link: "https://github.com/adrianhajdin/zoom-clone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Rituparn was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rituparn's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rituparn is the ideal partner.",
      name: "Ankit Jasuja",
      title: "Director of Engineering, Turing",
      profileImg : '/jasuja.png'
    },
    {
      quote:
        "Working with Rituparn was a fantastic experience. His expertise, responsiveness, and commitment to excellence were apparent at every stage of our project. What truly sets him apart is his passion for development and attention to detail. If you need a skilled developer to bring your vision to life, Rituparn is the perfect choice",
      name: "Mohit Mutreja",
      title: "Managing Director, AlphaGrep",
      profileImg : '/mutreja.png'

    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Turing",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "AlphaGrep",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "FlipSpaces",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer - FlipSpaces",
      desc: "Assisted in the development of a flipspaces website along with internal tools using Angular.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Associate - AlphaGrep",
      desc: "Designed and developed multiple trading GUI for internal usage within the firm.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the development for a webapp for a client.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Software Developer - Turing",
      desc: "Led the development of multiple products in firm leading to improved business metrics.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];