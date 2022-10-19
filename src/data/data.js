import "./stye.css";

import { ReactComponent as ArrowDown } from "../assets/icons/downArow.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrowR.svg";
import { ReactComponent as Widget } from "../assets/icons/widget.svg";
import { ReactComponent as Love } from "../assets/icons/love.svg";
import { ReactComponent as PlayOff } from "../assets/icons/playOff.svg";
import { ReactComponent as Blog } from "../assets/icons/blog.svg";
import { ReactComponent as FM } from "../assets/icons/fm.svg";
import pic01 from "../assets/images/pic01.webp";
import pic02 from "../assets/images/pic02.webp";
import pic03 from "../assets/images/pic03.webp";
import pic04 from "../assets/images/pic04.webp";
import pic05 from "../assets/images/pic05.webp";

export const slideImages = [pic01, pic02, pic03, pic04, pic05];

export function colorReturn(id) {
  if (id % 4 === 1) return "#724e91";
  if (id % 4 === 2) return "#e54f6d";
  if (id % 4 === 3) return "#74c4ba";
  if (id % 4 === 0) return "#f8c630";
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
        subTitle: "Trending designs to inspire you",
        leftIcon: () => <Widget className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(1)} />,
      },
      {
        id: 2,
        title: "New & Noteworthy",
        subTitle: "Up-and-coming designers",
        leftIcon: () => <Love className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 3,
        title: "Playoffs",
        subTitle: "Work designers are riffing on",
        leftIcon: () => <PlayOff className="w-4 " color={colorReturn(3)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(3)} />,
      },
      {
        id: 4,
        title: "Blog",
        subTitle: "Interviews, tutorials, and more",
        leftIcon: () => <Blog className="w-4 " color={colorReturn(4)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(4)} />,
      },
      {
        id: 5,
        title: "Weekly Warmup",
        subTitle: "Prompt to flex your design skills",
        leftIcon: () => <FM className="w-4 " color={colorReturn(5)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(5)} />,
      },
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
