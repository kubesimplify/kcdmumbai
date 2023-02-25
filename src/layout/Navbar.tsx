import Button from '@components/ui/Button';
import logo from '@assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { TicketLogo } from '@assets/icon';

const Navbar = () => {
  return (
    <nav className="flex h-20 w-full items-center tracking-wider">
      <div className="mx-4 flex w-full max-w-6xl items-center justify-between font-extrabold text-main-color sm:mx-8 md:mx-auto md:justify-between lg:justify-around lg:px-0">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 tracking-normal"
        >
          <Image src={logo} alt="logo" width={32} height={32} />
          <h1 className=" whitespace-nowrap font-extrabold sm:text-2xl">
            KCD Mumbai
          </h1>
        </Link>
        <div className="show hidden gap-5">
          {nav.map((el) => (
            <a
              className="cursor-pointer text-lg text-main-color"
              href={el.href}
              key={el.id}
            >
              {el.name}
            </a>
          ))}
        </div>
        <div>
          <Button>Get Your Ticket {TicketLogo}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const nav = [
  { id: 1, name: 'About', href: '#about' },
  { id: 2, name: 'Speakers', href: '#speakers' },
  { id: 3, name: 'Sponsors', href: '#sponsors' },
  { id: 4, name: 'Contact', href: '#contact' },
];
