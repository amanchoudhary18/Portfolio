// initial grid - components
import DrawTrace from "./cards/DrawTrace";
import Experience from "./cards/Experience";
import Github from "./cards/Github";
import Intro from "./cards/Intro";
import LinkedIn from "./cards/LinkedIn";
import Location from "./cards/Location";
import MusicPlayer from "./cards/MusicPlayer";
import ShoeEcommerce from "./cards/ShoeEcommerce";
import Sweetscapes from "./cards/SweetScapes";
import Theme from "./cards/Theme";
import Twitter from "./cards/Twitter";

// sweetscapes - images
import sweetscapes1 from "./assets/images/sweetscapes/website-hero.png";
import sweetscapes2 from "./assets/images/sweetscapes/logo.png";
import sweetscapes3 from "./assets/images/sweetscapes/mobile-signup.png";
import sweetscapes4 from "./assets/images/sweetscapes/mobile-suggestionCard.png";
import sweetscapes5 from "./assets/images/sweetscapes/website-description.png";

// solebliss - images
import solebliss1 from "./assets/images/solebliss/website-hero.png";
import solebliss2 from "./assets/images/solebliss/website-pdp.png";
import solebliss3 from "./assets/images/solebliss/website-products.png";

// drawtrace - images
import drawtrace1 from "./assets/images/drawtrace/website-home.png";
import drawtrace2 from "./assets/images/drawtrace/website-stackUsage.png";

// category constants
export const ALL = "All";
export const ABOUT = "About";
export const PROJECTS = "Projects";
export const SETTINGS = "Settings";

export const initialGrid = [
  { id: 1, category: ABOUT, type: "horizontal", content: <Intro /> },
  { id: 2, category: ABOUT, type: "square", content: <Location /> },
  { id: 3, category: PROJECTS, type: "vertical", content: <DrawTrace /> },
  { id: 4, category: ABOUT, type: "square", content: <Twitter /> },
  { id: 5, category: PROJECTS, type: "vertical", content: <Sweetscapes /> },
  { id: 6, category: ABOUT, type: "square", content: <Github /> },
  { id: 7, category: SETTINGS, type: "square", content: <MusicPlayer /> },
  { id: 8, category: PROJECTS, type: "horizontal", content: <ShoeEcommerce /> },
  { id: 9, category: ABOUT, type: "square", content: <LinkedIn /> },
  { id: 10, category: SETTINGS, type: "square", content: <Theme /> },
  { id: 11, category: ABOUT, type: "horizontal", content: <Experience /> },
];

export const sweetScapesGrid = [
  {
    id: 1,
    type: "horizontal",
    content: (
      <img
        src={sweetscapes1}
        alt="sweetscapes"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
  {
    id: 2,
    type: "square",
    content: (
      <img
        src={sweetscapes4}
        alt="sweetscapes"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
  {
    id: 3,
    type: "vertical",
    content: (
      <img
        src={sweetscapes3}
        alt="sweetscapes"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },

  {
    id: 4,
    type: "square",
    content: (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        <img src={sweetscapes2} alt="sweetscapes" className="w-[80%]" />
      </div>
    ),
  },

  {
    id: 5,
    type: "horizontal",
    content: (
      <img
        src={sweetscapes5}
        alt="sweetscapes"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
];

export const soleBlissGrid = [
  {
    id: 1,
    type: "horizontal",
    content: (
      <img
        src={solebliss1}
        alt="solebliss"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
  {
    id: 2,
    type: "square",
    content: (
      <img
        src={solebliss2}
        alt="solebliss"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
  {
    id: 3,
    type: "horizontal",
    content: (
      <img
        src={solebliss3}
        alt="solebliss"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
];

export const drawtraceGrid = [
  {
    id: 1,
    type: "horizontal",
    content: (
      <img
        src={drawtrace1}
        alt="drawtrace"
        className="w-[100%] h-[100%] rounded-2xl"
      />
    ),
  },
  {
    id: 2,
    type: "square",
    content: (
      <div className="w-full h-full flex flex-row justify-center items-center bg-white rounded-2xl ">
        <img src={drawtrace2} alt="drawtrace" className="w-[90%] " />
      </div>
    ),
  },
];

// project pages config
export const projects = [
  {
    path: "/drawtrace",
    heading: "Draw Trace",
    subheading:
      "Introducing a high-performance whiteboard tool built with Next.js and Canvas 2D rendering. It offers smooth, real-time drawing and effortless undo/redo functionality, making it perfect for collaboration and complex diagramming tasks.",
    links: [{ href: "https://draw-trace.onrender.com", title: "Web" }],

    description: [
      "This whiteboard tool offers a smooth, responsive drawing experience for creating complex diagrams and sketches. Using Canvas 2D rendering, it delivers high-performance interactions, making it ideal for real-time collaboration and presentations. Key features include undo/redo functionality, allowing users to easily correct mistakes while maintaining a fluid drawing process.",
      "Built with Next.js, the tool utilizes a custom hook for efficient Canvas 2D drawing management. The hook handles mouse events and rendering, ensuring smooth performance. Undo/redo operations are managed by a stack, enabling users to revert or reapply changes seamlessly. This architecture ensures a responsive and high-performance user experience.",
    ],
    grid: drawtraceGrid,
  },

  {
    path: "/sweetscapes",
    heading: "SweetScapes",
    subheading:
      "SweetScapes.in is a personalized experience planning app. It recommends unique activities and helps with scheduling, reservations, and logistics.",
    links: [{ href: "https://www.sweetscapes.in/", title: "Web" }],

    description: [
      "SweetScapes is a comprehensive travel application designed to provide tailored day plans for travelers based on their unique preferences. It simplifies the trip planning process by generating personalized one-day itineraries, making travel accessible and enjoyable, especially for those with limited time.",
      "The app offers transparent transport options, potentially collaborating with government-controlled systems to ensure cost-effective and reliable choices. Additionally, SweetScapes highlights hidden gems, partnering with local businesses to enhance tourism while supporting the local economy.",
      "By prioritizing user control and security, SweetScapes delivers a stress-free travel experience, allowing users to explore with confidence.",
    ],
    grid: sweetScapesGrid,
  },

  {
    path: "/solebliss",
    heading: "Sole Bliss",
    subheading:
      "Microfrontend and Microservices-Based Shoe E-commerce Application",
    links: [],

    description: [
      "This shoe e-commerce application is designed with modularity and scalability at its core, utilizing both microfrontend and microservices architectures. The platform is composed of distinct modules handling user management, product catalog, shopping cart, and order processing, ensuring each component operates independently.",
      "The microfrontend architecture, built with React.js, divides the user interface into separate, self-contained modules such as user, product, cart, and order views. Each module can be developed, deployed, and updated independently, promoting code reusability and dynamic user experience.",
      "On the backend, Spring Boot powers the microservices architecture, where each service (user, product, cart, and order) operates as a standalone component with its own logic and database. This allows the system to scale efficiently, as individual services can be scaled, maintained, or updated without impacting other areas of the application.",
    ],
    grid: soleBlissGrid,
  },
];

// experience config
export const experiences = [
  {
    jobTitle: "Developer",
    company: "Fastenal India",
    from: "Jul 2024",
    to: "Present",
    description: [
      "As a Developer at Fastenal India, I took ownership of the frontend for critical modules including Order Templates, Shopping Cart, and Checkout. This role required a deep understanding of user experience design, allowing me to implement features that significantly enhanced the user interface. I also developed the style guide for the official website, ensuring a consistent look and feel across multiple applications.",
      "In addition, I worked on a proof of concept (POC) aimed at transforming a legacy monolithic application into a micro-services and micro-frontend architecture. This involved using technologies such as ReactJS, Spring Boot, and Azure. I successfully converted the Power BI Report management module from Spring MVC to a more efficient React and Spring Boot setup, optimizing performance and user interaction.",
    ],
    location: "Bengaluru, Karnataka, India · Hybrid",
  },
  {
    jobTitle: "IT Trainee",
    company: "Fastenal India",
    from: "Jan 2024",
    to: "Jun 2024",
    description: [
      "During my time as an Information Technology Trainee at Fastenal India, I focused on developing a proof of concept for breaking down a legacy monolithic application into a microservices and micro-frontend architecture. This initiative was crucial for improving the application's scalability and maintainability, using tools such as ReactJS, Spring Boot, and Azure.",
      "I also collaborated with senior developers to enhance the existing Power BI Report management module, migrating it from Spring MVC to a more dynamic React-based solution. This transition not only improved the module's performance but also facilitated better integration with other systems.",
    ],
    location: "Bengaluru, Karnataka, India · Hybrid",
  },
  {
    jobTitle: "Cloud Development Intern",
    company: "Cloudphant",
    from: "Dec 2023",
    to: "Jan 2024",
    description: [
      "As a Web Development Intern at Cloudphant, I developed proofs of concept on utilizing Amazon Lightsail for automated website deployment. This experience provided me with insights into cloud computing and the deployment process, which are essential for modern web development.",
      "I collaborated with the team to streamline deployment processes, enhancing efficiency and reducing time to market for new features. This role also allowed me to improve my skills in cloud technologies and understand their impact on web applications.",
    ],
    location: "Remote",
  },
  {
    jobTitle: "Full Stack Intern",
    company: "Stock Register",
    from: "Oct 2023",
    to: "Dec 2023",
    description: [
      "At Stock Register, I worked on creating a platform designed to provide efficient stock-maintaining solutions for local stores and businesses. My responsibilities included developing key components such as Order Management, Delivery Management, and Invoice Generation, which streamlined operations for users.",
      "This internship enhanced my understanding of e-commerce workflows and provided valuable experience in full-stack development. Collaborating closely with stakeholders helped me gather requirements and implement features that truly met user needs.",
    ],
    location: "Remote",
  },
  {
    jobTitle: "Web Development Intern",
    company: "PRandit",
    from: "Feb 2023",
    to: "Aug 2023",
    description: [
      "During my internship at PRandit, I created and integrated multiple frontend pages, ensuring seamless functionality with backend services. This role required a strong focus on user experience and responsiveness, as I aimed to develop interfaces that catered to both desktop and mobile users.",
      "I collaborated with cross-functional teams to deliver a scalable platform that fostered relationships between businesses and creators. This experience significantly enhanced my skills in React and allowed me to understand the importance of collaborative development in achieving project goals.",
    ],
    location: "Remote",
  },
];
