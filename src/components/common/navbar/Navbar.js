import ListView from "../list-view/ListView";
import "./Navbar.css";
import Modal from "../../modal/Modal";
import Search from "../../basic/search-input/Search";
import { useState } from "react";
import Button from "../../basic/button/Button";
import logo from "../../../assets/images/logo.svg";
import { ReactComponent as MenuBar } from "../../../assets/icons/menubar.svg";
import { ReactComponent as CrossIcon } from "../../../assets/icons/cross.svg";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { categoriesForMobile, categoriesForWeb } from "../../../data/data";

export default function Navbar(params) {
  const [modal, setModal] = useState(false);
  return (
    <div className="navbar">
      <div className="flex h-full items-center justify-between lg:justify-start mx-4 lg:container">
        <div className="block lg:hidden cursor-pointer">
          {modal ? (
            <CrossIcon onClick={() => setModal(false)} className="fill-primary-light w-6" />
          ) : (
            <MenuBar onClick={() => setModal(true)} className="fill-primary-light w-5" />
          )}
        </div>

        <img className="lg:mr-10" src={logo} alt="logo" />

        <div className="hidden lg:inline flex-1">
          <ListView list={categoriesForWeb} />
        </div>
        <div className="fill-primary-light hidden lg:inline">
          <SearchIcon className="w-10 cursor-pointer" />
        </div>
        <div className="mx-5">
          <ul className="inline text-sm text-primary hover:text-primary-dark font-medium">
            <li>Sign in</li>
          </ul>
        </div>
        <div className="bg-secondary customBtn hidden lg:block">
          <Button style={{ fontSize: "14px" }} title="Share my work" />
        </div>
      </div>

      {modal && (
        <Modal>
          <Search
            placeholder="Search"
            style={{ height: "40px", padding: "0 14px", borderRadius: "8px" }}
            type="search"
            className="custom-search"
          />
          <ListView list={categoriesForMobile} />
        </Modal>
      )}
    </div>
  );
}
