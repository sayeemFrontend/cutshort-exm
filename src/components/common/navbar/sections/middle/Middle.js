import React, { useState } from "react";
import { cart, logo, love, menuBar, person } from "../../../../../assets";
import { categories } from "../../../../../layout/data";
import Button from "../../../../basic/button/Button";
import Search from "../../../../basic/search-input/Search";
import Modal from "../../../../modal/Modal";
import Category from "../../../carts/category/Category";
import ListView from "../../../list-view/ListView";
import "./middle.css";

export default function Middle() {
  const [modal, setModal] = useState(false);
  return (
    <div className="middle flex flex-wrap  items-center justify-between">
      <img src={logo} alt="logo" />
      <div className="mx-4 flex-1 min-w-[270px] max-w-xl">
        <Search
          placeholder="What do you want to order?"
          bgColor="white"
          height="44px"
          borderR="6px"
          fontSize="16px"
          icon
        >
          <div className="h-full bg-secondary hover:bg-secondary-light">
            <Button width="86px" title="Search" color="white" />
          </div>
        </Search>
      </div>

      <div className="w-[18rem] flex items-center justify-between flex-wrap  mt-4 lg:mt-0 ">
        <div className="flex items-center">
          <img src={person} alt="icon" />
          <p className="ml-4 text-base text-primary-light">
            <span className="opacity-50 text-xs">Sign In</span> <br />
            Account
          </p>
        </div>
        <div className="relative w-max">
          <span className="absolute -right-2 -top-1 text-primary-light flex items-center justify-center text-xs bg-secondary w-4 h-4 rounded-full">
            {1}
          </span>
          <img src={love} alt="loveIcon" />
        </div>
        <div className="relative w-max">
          <span className="absolute -right-2 -top-1 text-primary-light flex items-center justify-center text-xs bg-secondary w-4 h-4 rounded-full">
            {7}
          </span>
          <img src={cart} alt="cartIcon" />
        </div>
      </div>
      <div
        onClick={() => setModal(true)}
        className="ml-auto mt-4 inline md:hidden cursor-pointer bg-primary opacity-70 hover:opacity-40 "
      >
        <img className="w-7 aspect-square " src={menuBar} alt="menu" />
      </div>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <div className="px-2 rounded-t-lg bg-secondary-light w-3/4 h-10 mx-auto ">
            <Category />
          </div>
          <div className="w-3/4 mx-auto">
            <ListView list={categories} />
          </div>
        </Modal>
      )}
    </div>
  );
}
