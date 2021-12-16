import { MenuIcon } from "@heroicons/react/outline";

const MobileMenu = () => {
  return (
    <div className='mobile-header'>
      <div className='toggle-menu d-flex justify-center align-center'>
        <MenuIcon className='w-40' />
      </div>
    </div>
  );
};

export default MobileMenu;
