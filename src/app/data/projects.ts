// app/data/projects.ts

// export an interface to define the shape of a project object
export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  vibe?: string;
  role?: string;
  techStack: string[];
  imageUrl: string;
  projectUrl: string;
  additionalUrl?: string;
}

// an array of project objects to be used in the Projects page
export const projectData: Project[] = [
  {
    id: 1,
    title: "The Foxglove Tome",
    subtitle: "A digital sanctuary",
    description: "A web app journal designed as a calm, cozy space for reflection. It features a nature-inspired mood tracking garden, secure data storage, and a simple interface that encourages users to slow down and reflect.",
    vibe: "Calm, cozy, and reflective",
    role: "Full-stack developer, UX designer, illustrator",
    techStack: ["PHP", "MySQL", "CSS", "Bootstrap", "JavaScript", "Illustrator"],
    imageUrl: "/images/projects/project1.png",
    projectUrl: "https://github.com/mintbanshee/FoxgloveTome"
  }, 
  {
    id: 2,
    title: "Bloomspace",
    subtitle: "An organizational app for a venue and event planning business",
    description: "An Angular app for a venue rental company that hosts events, designed to help organize client bookings, rentals, and scheduled events through clean forms and structured event details.",
    vibe: "Organized and efficient with a touch of elegance",
    role: "Front-end developer, form and UI design",
    techStack: ["Angular", "TypeScript", "Angular Material", "JSON Server"],
    imageUrl: "/images/projects/project2.png",
    projectUrl: "https://github.com/mintbanshee/Bloomspace"
  }, 
  {
    id: 3,
    title: "SportsPro",
    subtitle: "A management system for a sports digital products company",
    description: "A management system for handling customers, products, and incident reports. Primarily used by admins, with technicians able to log in to view and close their assigned incidents. Built with a focus on structured data and real-world usability.",
    vibe: "Structured, practical, business-focused",
    role: "Full-stack developer",
    techStack: ["PHP", "MySQL", "Bootstrap", "CSS"],
    imageUrl: "/images/projects/project3.png",
    projectUrl: "https://github.com/mintbanshee/SportsPro"
  }, 
  {
    id: 4,
    title: "Book Browser",
    subtitle: "A digital library interface for storing and browsing book data",
    description: "A searchable and filterable interface for exploring book data, designed to make browsing large datasets simple and intuitive.",
    vibe: "Dark academia-inspired, focused on simplicity and ease of use",
    role: "Front-end developer",
    techStack: ["Angular", "TypeScript", "Bootstrap", "CSS", "JSON Server"],
    imageUrl: "/images/projects/project4.png",
    projectUrl: "https://github.com/mintbanshee/BookBrowser"
  }, 
  {
    id: 5,
    title: "Dewdrop Defenders",
    subtitle: "A nature-inspired game built in Java and played in the terminal",
    description: "A Java-based battle system featuring custom characters, weapons, and abilities, designed with a nature-inspired theme and structured game logic.",
    vibe: "Whimsical, strategic, and nature-inspired",
    role: "Java Developer, Game System Designer",
    techStack: ["Java", "OOP"],
    imageUrl: "/images/projects/project5.png",
    projectUrl: "https://github.com/mintbanshee/DewdropDefenders",
    additionalUrl: "https://dewdropdefenders.wordpress.com/"
  }
];