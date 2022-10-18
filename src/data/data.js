import "./stye.css";

import { ReactComponent as ArrowDown } from "../assets/icons/downArow.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/downArow.svg";
import { ReactComponent as Widget } from "../assets/icons/widget.svg";

export function IconStyle({ children }) {
  return <div className="icon-style">{children}</div>;
}

export const categoriesForMobile = [
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
  },
];

export const categoriesForWeb = [
  {
    id: 1,
    title: "Inspiration",
    subList: [
      {
        id: 1,
        title: "Explore Design Work",
        leftIcon: () => (
          <IconStyle>
            <Widget className="w-6" />
          </IconStyle>
        ),
        rightIcon: () => <ArrowRight className="w-4" />,
      },
      { id: 2, title: "New & Noteworthy" },
      {
        id: 3,
        title: "Playoffs",
      },
      { id: 4, title: "Blog" },
      { id: 5, title: "Weekly Warmup" },
    ],
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
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
    rightIcon: () => <ArrowDown className="w-4" />,
  },
];
