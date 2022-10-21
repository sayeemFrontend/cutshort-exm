import React from "react";
import Logo from "../../../assets/icons/Logo";
import netF from "../../../assets/images/netFooter.svg";
import "./Footer.css";

import {
  brands,
  company,
  designAssets,
  designers,
  designResources,
  directories,
  hireDesigner,
  socialIcons,
} from "../../../data/data";

export default function Footer() {
  return (
    <div className="footer py-10 bg-[#fafafb]">
      <div className="container">
        <div className="pb-8 flex gap-5 flex-col lg:flex-row border-b border-[#e7e7e9]">
          <div className="mb-6 about-dribble max-w-[256px] lg:max-w-[160px]">
            <div className="cursor-pointer">
              <Logo color="#ea4c89" hover="#bb3d6e" />
            </div>
            <p className="my-4 text-sm">
              Dribbble is the world’s leading community for creatives to share, grow, and get hired.
            </p>
            <ul className=" social-group flex flex-wrap gap-4">
              {socialIcons?.map((li) => (
                <a key={li.id} href={li.link}>
                  <img src={li.icon} alt="icon" />
                </a>
              ))}
            </ul>
          </div>
          <div className="grid grid-flow-row grid-cols-2 md:grid-cols-5 gap-2 ">
            <ul>
              <h4>For designers</h4>
              {designers?.map((li) => (
                <a href={li.link} key={li.id}>
                  {li.title}
                </a>
              ))}
            </ul>
            <ul>
              <h4>Hire designers</h4>
              {hireDesigner?.map((li) => (
                <a key={li.id} href={li.link}>
                  {li.title}
                </a>
              ))}
              <h4 className="mt-4">Brands</h4>
              {brands?.map((li) => (
                <a href={li.link} key={li.id}>
                  {li.title}
                </a>
              ))}
            </ul>
            <ul>
              <h4>Company</h4>
              {company?.map((li) => (
                <a key={li.id} href={li.link}>
                  {li.title}
                </a>
              ))}
            </ul>
            <ul>
              <h4>Directories</h4>
              {directories?.map((li) => (
                <a key={li.id} href={li.link}>
                  {li.title}
                </a>
              ))}
              <h4 className="mt-4">Design assets</h4>
              {designAssets?.map((li) => (
                <a key={li.id} href={li.link}>
                  {li.title}
                </a>
              ))}
            </ul>
            <ul>
              <h4>Design Resources</h4>
              {designResources?.map((li) => (
                <a key={li.id} href={li.link}>
                  {li.title}
                </a>
              ))}
            </ul>
          </div>
        </div>

        <ul className="pt-10 text-primary text-sm flex gap-2 flex-col items-center lg:flex-row">
          <li className="lg:flex-1">© 2022 Dribbble. All rights reserved.</li>
          <li className="lg:order-1">
            <img width="24px" src={netF} alt="Icon" />
          </li>
          <li>
            <span className="mr-2 text-primary-dark font-medium">19,693,689</span>
            shots dribbbled
          </li>
        </ul>
      </div>
    </div>
  );
}
