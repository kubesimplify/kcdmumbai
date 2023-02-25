// import { AboutIcon, CalenderLogo, Location } from "@assets/icon";
import Image from 'next/image';
import SectionWrapper from './ui/SectionWrapper';
import tower from '@assets/towers.png';
import Heading from './ui/Heading';
import hackathon from '@data/index';

const Speakers = () => {
  return (
    <SectionWrapper id="speakers" className="mx-3">
      <Heading>Speakers</Heading>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {hackathon.speakers.map((person) => (
          <div
            key={person.id}
            className={`flex flex-col items-center justify-center rounded-xl shadow-xl ${
              hackathon.blur.speakers && 'blur-sm'
            }`}
          >
            <Image
              src={person.imageUrl}
              alt="sponserImg"
              className="rounded-lg"
              width={204}
              height={240}
            />
            <p className="font-bold text-main-color">{person.name}</p>
            {person.profession ? (
              <p className="text-main-color">{person?.profession}</p>
            ) : null}
            {person.company ? (
              <p className="text-main-color">{person?.company}</p>
            ) : null}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Speakers;
