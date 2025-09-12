import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "./Logo";

const MobileMenu: React.FC = () => {
  return (
    <div className='mobile-header'>
      <Logo title="SS" />  
      <div className='toggle-menu d-flex justify-center align-center'>
        <MenuIcon className='w-40' />
      </div>
    </div>
  );
};

export default MobileMenu;
