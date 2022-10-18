import { bookS, bookS2, elecA, fastF, homeA, homeL, lapDesk, moreC } from "../assets";
import slide1 from "./slide-assets/pic5.png";
import slide2 from "./slide-assets/pico2.png";
import slide3 from "./slide-assets/pic03.png";
import slide4 from "./slide-assets/pic04.png";

export const categories = [
  {
    id: 1,
    title: "Inspiration",
    subList: [
      { id: 1, title: "Explore Design Work" },
      { id: 2, title: "New & Noteworthy" },
      {
        id: 3,
        title: "Playoffs",
      },
      { id: 4, title: "Blog" },
      { id: 5, title: "Weekly Warmup" },
    ],
    icon: lapDesk,
  },
  {
    id: 2,
    title: "Find Work",
    subList: [
      { id: 1, title: "Job Board" },
      { id: 2, title: "Freelance Projects", span: "PRO+" },
      {
        id: 3,
        title: "Want freelance design projects?",
      },
      { id: 4, title: "Personalize your profile with video" },
    ],
    icon: lapDesk,
  },
  {
    id: 3,
    title: "Learn Design",
    subList: [
      { id: 1, title: "Certified Product Design Course" },
      { id: 2, title: "Introduction to UI Design" },
      {
        id: 3,
        title: "Browse our courses & workshops",
      },
    ],
    icon: lapDesk,
  },
  {
    id: 4,
    title: "Go Pro",
    subList: [
      { id: 1, title: "For Designers" },
      { id: 2, title: "For Freelancers" },
      {
        id: 3,
        title: "For Teams",
      },
    ],
    icon: lapDesk,
  },
  {
    id: 5,
    title: "Design Files",
    subList: [
      { id: 1, title: "Discover" },
      { id: 2, title: "Graphics" },
      {
        id: 3,
        title: "Fonts",
      },
      { id: 4, title: "3D" },
      { id: 5, title: "Templates" },
      { id: 6, title: "Add-Ons" },
      { id: 7, title: "Web Themes" },
      { id: 8, title: "Open a Shop" },
    ],
    icon: lapDesk,
  },
  {
    id: 6,
    title: "Hire Designers",
    subList: [
      { id: 1, title: "About Dribble Hiring" },
      { id: 2, title: "Designer Search" },
      {
        id: 3,
        title: "List my Job Opening",
      },
      { id: 4, title: "Post a Freelance Project" },
    ],
    icon: lapDesk,
  },
];
export const slideImages = [
  { id: 1, url: slide1 },
  { id: 2, url: slide2 },
  { id: 3, url: slide3 },
  { id: 4, url: slide4 },
];
