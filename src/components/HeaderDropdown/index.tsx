import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function HeaderDropdown() {

  return (
    <Menu>
      <MenuButton className="flex items-center justify-center rounded-md text-[#292D32] bg-[#EBEBEB] w-[25.44px] h-[25.44px]">
        <HiOutlineDotsHorizontal />
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="flex items-center w-[280px] h-[38px] origin-top-right rounded-lg border border-[#DEE2E6] transition duration-100 ease-out mt-4 shadow-md"
      >
        <MenuItem>
          <button className="group flex w-full items-center px-3 text-[#4E4E4E]">
            Sair
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
