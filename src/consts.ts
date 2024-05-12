import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Cristóbal",
  EMAIL: "me@cristob.al",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Personal web of Cristóbal Carnero Liñán, freelance Software Engineer. Backend developer, DevOps, MLOps, AI. Python, Django, FastAPI, AWS, Terraform.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Cristóbal Carnero Liñán's curriculum vitae (CV).",
};

export const HIRE: Metadata = {
  TITLE: "Hire",
  DESCRIPTION: "How to hire Cristóbal Carnero Liñán, and services.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/cristobal_dev",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/cristobalcl"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ccarnerolinan",
  },
  { 
    NAME: "medium",
    HREF: "https://medium.com/@cristobalcl",
  }
];
