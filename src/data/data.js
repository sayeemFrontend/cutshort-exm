import "./stye.css";

import { ReactComponent as ArrowDown } from "../assets/icons/downArow.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrowR.svg";
import { ReactComponent as Widget } from "../assets/icons/widget.svg";
import { ReactComponent as Love } from "../assets/icons/love.svg";
import { ReactComponent as PlayOff } from "../assets/icons/playOff.svg";
import { ReactComponent as Blog } from "../assets/icons/blog.svg";
import { ReactComponent as FM } from "../assets/icons/fm.svg";
import { ReactComponent as JobB } from "../assets/icons/jobB.svg";
import { ReactComponent as Mail } from "../assets/icons/mail.svg";
import { ReactComponent as Cup } from "../assets/icons/cup.svg";
import { ReactComponent as FlowerCup } from "../assets/icons/flowerCup.svg";
import { ReactComponent as Personal } from "../assets/icons/person.svg";
import { ReactComponent as Cpd } from "../assets/icons/course.svg";
import { ReactComponent as Video } from "../assets/icons/video.svg";
import { ReactComponent as Desktop } from "../assets/icons/desktop.svg";
import { ReactComponent as FD } from "../assets/icons/cone.svg";
import { ReactComponent as FF } from "../assets/icons/flowerCup.svg";
import { ReactComponent as Account } from "../assets/icons/account.svg";
import { ReactComponent as Discover } from "../assets/icons/widgetD.svg";
import { ReactComponent as Graphics } from "../assets/icons/setting.svg";
import { ReactComponent as Font } from "../assets/icons/font.svg";
import { ReactComponent as Template } from "../assets/icons/template.svg";
import { ReactComponent as ThreeD } from "../assets/icons/3D.svg";
import { ReactComponent as Themes } from "../assets/icons/theme.svg";
import { ReactComponent as Addon } from "../assets/icons/addon.svg";
import { ReactComponent as OpenShop } from "../assets/icons/openShop.svg";

import { ReactComponent as DesignS } from "../assets/icons/designS.svg";
import { ReactComponent as Plus } from "../assets/icons/plus.svg";

import pic01 from "../assets/images/pic01.webp";
import pic02 from "../assets/images/pic02.webp";
import pic03 from "../assets/images/pic03.webp";
import pic04 from "../assets/images/pic04.webp";
import pic05 from "../assets/images/pic05.webp";
import pic06 from "../assets/images/pic06.webp";
import pic07 from "../assets/images/pic07.webp";
import pic08 from "../assets/images/pic08.webp";
import pic09 from "../assets/images/pic09.webp";
import net from "../assets/icons/social/net.svg";
import tw from "../assets/icons/social/tw.svg";
import fb from "../assets/icons/social/fb.svg";
import inst from "../assets/icons/social/inst.svg";
import pint from "../assets/icons/social/pint.svg";
export const socialIcons = [
  { id: 1, icon: net },
  { id: 2, icon: tw },
  { id: 3, icon: fb },
  { id: 4, icon: inst },
  { id: 5, icon: pint },
];

export const designers = [
  { id: 1, title: "Go Pro!" },
  { id: 2, title: "Explore design work" },
  { id: 3, title: "Design blog" },
  { id: 5, title: "Overtime podcast" },
  { id: 6, title: "Playoffs" },
  { id: 7, title: "Weekly Warm-Up" },
  { id: 8, title: "Refer a Friend" },
  { id: 9, title: "Code of conduct" },
];
export const hireDesigner = [
  { id: 1, title: "post a job opening" },
  { id: 2, title: "Post a freelance project" },
  { id: 3, title: "Search for designers" },
];

export const brands = [{ id: 1, title: "Advertise with us" }];
export const company = [
  { id: 1, title: "About" },
  { id: 2, title: "Careers" },
  { id: 3, title: "Support" },
  { id: 5, title: "Media kit" },
  { id: 6, title: "Testimonials" },
  { id: 7, title: "API" },
  { id: 8, title: "Terms of service" },
  { id: 9, title: "Privacy policy" },
  { id: 10, title: "Cookie policy" },
];

export const directories = [
  { id: 1, title: "Design jobs" },
  { id: 2, title: "Designers for hire" },
  { id: 3, title: "Freelance designers for hire" },
  { id: 5, title: "Tags" },
  { id: 6, title: "Places" },
];
export const designAssets = [
  { id: 1, title: "Creative Market" },
  { id: 2, title: "Font spring" },
  { id: 3, title: "Font Squirrel" },
];

export const designResources = [
  { id: 1, title: "Freelancing" },
  { id: 2, title: "Design Hiring" },
  { id: 3, title: "Design Portfolio" },
  { id: 5, title: "Design Education" },
  { id: 6, title: "Creative Process" },
  { id: 7, title: "Design Industry Trends" },
];

export const products = [
  { id: 1, name: "", image: pic06 },
  { id: 2, name: "", image: pic07 },
  { id: 3, name: "", image: pic08 },
  { id: 4, name: "", image: pic09 },
];

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
      {
        id: 1,
        title: "Job Board",
        subTitle: "Find your dream design job",
        leftIcon: () => <JobB className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(1)} />,
      },
      {
        id: 2,
        title: (
          <p>
            Freelance Projects
            <span className="ml-2 py-[2px] px-[4px] text-[10px] rounded text-white bg-secondary">PRO+</span>
          </p>
        ),
        underLine: <span className="my-2 block w-full h-[1px] bg-[#e7e7e9]"></span>,
        subTitle: "An exclusive list for contract work",
        leftIcon: () => <Cup className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 3,
        title: "Want freelance design projects?",
        subTitle: "An exclusive list for contract work",
        leftIcon: () => <Mail className="w-4 " color={colorReturn(3)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(3)} />,
      },
      {
        id: 4,
        title: "Personalize your profile with video",
        subTitle: "Introduce yourself to new clients with Pitch",
        leftIcon: () => <Personal className="w-4 " color={colorReturn(4)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(4)} />,
      },
    ],
  },
  {
    id: 3,
    title: "Learn Design",
    subList: [
      {
        id: 1,
        title: "Certified Product Design Course",
        subTitle: "Learn product design in just 16 weeks...",
        leftIcon: () => <Cpd className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(1)} />,
      },
      {
        id: 2,
        title: "Introduction to UI Design",
        subTitle: " Learn UI Design Basics and Figma Fundamentals..",
        leftIcon: () => <Desktop className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 3,
        title: "Browse our courses & workshops",
        subTitle: "Level up your skills with our interactive courses and workshops…",
        leftIcon: () => <Video className="w-4 " color={colorReturn(4)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(4)} />,
      },
    ],
  },
  {
    id: 4,
    title: "Go Pro",
    subList: [
      {
        id: 1,
        title: "For Designers",
        subTitle: "Portfolio creation made easy",
        leftIcon: () => <FD className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 2,
        title: "For Freelancers",
        subTitle: "Fresh leads in your inbox every day",
        leftIcon: () => <FlowerCup className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 3,
        title: "For Teams",
        subTitle: "Build your team’s pipeline or profile",
        leftIcon: () => <Account className="w-4 " color={colorReturn(3)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(3)} />,
      },
    ],
  },
  {
    id: 5,
    title: "Design Files",
    subList: [
      {
        id: 1,
        title: "Discover",
        subTitle: "A marketplace of digital assets…",
        leftIcon: () => <Discover className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(1)} />,
      },
      {
        id: 2,
        title: "Graphics",
        subTitle: "Icons, Illustrations, Patterns, Textures…",
        leftIcon: () => <Graphics className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 3,
        title: "Fonts",
        subTitle: "Display, Script, Sans Serif, Serif…",
        leftIcon: () => <Font className="w-4 " color={colorReturn(3)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(3)} />,
      },
      {
        id: 4,
        title: "Templates",
        subTitle: "Mock Ups, Social Media, Presentations…",
        leftIcon: () => <Template className="w-4 " color={colorReturn(4)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(4)} />,
      },
      {
        id: 5,
        title: "3D",
        subTitle: "Characters, Objects, Textures…",
        leftIcon: () => <ThreeD className="w-4 " color={colorReturn(5)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(5)} />,
      },
      {
        id: 6,
        title: "Themes",
        subTitle: "WordPress, Shopify, Bootstrap, HTML5…",
        leftIcon: () => <Themes className="w-4 " color={colorReturn(6)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(6)} />,
      },
      {
        id: 7,
        title: "Add on",
        subTitle: "Procreate, Affinity, Photoshop, InDesign…",
        underLine: <span className="my-2 block w-full h-[1px] bg-[#e7e7e9]"></span>,
        leftIcon: () => <Addon className="w-4 " color={colorReturn(7)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(7)} />,
      },
      {
        id: 8,
        title: "Open a Shop",
        subTitle: "Earn money doing what you love",
        leftIcon: () => <OpenShop className="w-4 " color={colorReturn(8)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(8)} />,
      },
    ],
  },
  {
    id: 6,
    title: "Hire Designers",
    subList: [
      {
        id: 1,
        title: "Designer Search",
        subTitle: "Find, contact, and hire designers",
        leftIcon: () => <DesignS className="w-4 " color={colorReturn(1)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(1)} />,
      },
      {
        id: 2,
        title: "List my Job Opening",
        subTitle: "The #1 job board for creatives",
        leftIcon: () => <Plus className="w-4 " color={colorReturn(2)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(2)} />,
      },
      {
        id: 4,
        title: "Post a Freelance Project",
        subTitle: "Board for freelance & contract work",
        leftIcon: () => <Plus className="w-4 " color={colorReturn(3)} />,
        rightIcon: () => <ArrowRight className="w-3" fill={colorReturn(3)} />,
      },
    ],
    rightIcon: () => <ArrowDown className="w-4" />,
  },
];
