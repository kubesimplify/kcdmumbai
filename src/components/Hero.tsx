// import { AboutIcon, CalenderLogo, Location } from "@assets/icon";
import Image from 'next/image';
import hackathon from '@data/index';
import hero from '@assets/hero.png';
import Button from '@components/ui/Button';
import { TicketLogo } from '@assets/icon';

const Hero = () => {
  return (
    <div className="mx-3 flex flex-col gap-3 pt-5 md:flex-row md:pt-28">
      <div className="flex flex-col gap-5 md:w-1/2">
        <p className="-ml-2 w-max whitespace-nowrap rounded-lg bg-main-color p-2 text-white sm:ml-0">
          {hackathon?.date}
          {'  |  '}
          {hackathon?.location}
        </p>
        <h1 className="text-5xl font-extrabold leading-[3.5rem] text-main-color">
          Kubernetes <br />
          Community <br />
          Days Mumbai
        </h1>
        <p>
          Join us at Kubernetes Community Days in Mumbai to experience the power
          of a diverse community coming together to learn & share knowledge on
          cloud native.
        </p>
        <Button
          href="https://konfhub.com/checkout/kcdmumbai?ticketId=7351"
          className="w-max"
        >
          Get Your Ticket {TicketLogo}
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image
          src={hero}
          alt="hero image "
          className="w-full scale-90 rounded-lg md:scale-100"
        />
      </div>
    </div>
  );
};

export default Hero;
