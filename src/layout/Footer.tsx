import logo from '@assets/logo.png';
import Socials from '@components/Socials';
import hackathon from '@data/index';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-light-background/10 flex min-h-[96px] items-center tracking-wider"
    >
      <div className="my-3 mx-auto flex w-full max-w-6xl flex-col items-center justify-start gap-2 font-bold md:flex-row md:items-center  md:justify-around">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 tracking-normal"
        >
          <Image src={logo} alt="logo" width={32} height={32} />
          <h1 className="text-2xl font-extrabold">KCD Mumbai</h1>
        </Link>
        {hackathon?.email ? (
          <span className="flex items-center justify-center gap-1">
            <a href={`mailto:${hackathon.email}`}>{hackathon.email}</a>
          </span>
        ) : null}
        {hackathon?.socials ? <Socials {...hackathon.socials} /> : null}
      </div>
    </footer>
  );
};

export default Footer;
