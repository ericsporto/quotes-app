import { FaRegUser } from 'react-icons/fa6';
import HeaderDropdown from '@components/HeaderDropdown';
import FranqLogo from '@assets/franq-logo.webp';
export default function Header() {
  return (
    <header className="flex items-center lg:justify-end min-h-[62px] lg:min-h-[152px] bg-primary border-b border-header_border_bottom w-full pr-10">
      <div className="flex items-center bg-primary pl-4 lg:hidden">
        <img src={FranqLogo} alt="Franq Logo" />
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <span className="text-[#F2F2F2] rounded-full w-[42px] h-[42px] flex items-center justify-center bg-secondary">
          <FaRegUser />
        </span>
        <div className="flex flex-col mr-8">
          <p className="text-secondary font-bold text-lg">
            <span className="text-black">Olá,</span> Tatiana
          </p>
          <p className="text-[#A4A4A4] text-[13px]">Tatiana@americanas.com</p>
        </div>
        <HeaderDropdown />
      </div>
    </header>
  );
}
