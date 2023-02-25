import Image, { StaticImageData } from 'next/image';
import SectionWrapper from './ui/SectionWrapper';
import Heading from './ui/Heading';
import hackathon from '@data/index';
import React from 'react';

const Sponsors = () => {
  return (
    <SectionWrapper id="sponsors" className="mx-3">
      <Heading>Sponsors</Heading>
      <div>
        <p>
          Thank you to our sponsors for their invaluable support and commitment
          to the community.
        </p>
        <p>
          If you&apos;re interested in becoming a sponsor, contact us at
          <a href={`mailto:${hackathon.email}`}>{hackathon.email}</a>.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading className="!text-lg">PLATINUM</Heading>
        <div className="flex items-center justify-center gap-5">
          {hackathon.sponsors.platinum.map((sponsor) => (
            <SponserImage key={sponsor.id} sponsorLogo={sponsor.sponsorLogo} />
          ))}
        </div>

        <Heading className="!text-lg">GOLD</Heading>
        <div className="flex items-center justify-center gap-5">
          {hackathon.sponsors.gold.map((sponsor) => (
            <SponserImage key={sponsor.id} sponsorLogo={sponsor.sponsorLogo} />
          ))}
        </div>

        <Heading className="!text-lg">SILVER</Heading>
        <div className="flex items-center justify-center gap-5">
          {hackathon.sponsors.silver.map((sponsor) => (
            <SponserImage key={sponsor.id} sponsorLogo={sponsor.sponsorLogo} />
          ))}
        </div>

        <Heading className="!text-lg">BRONZE</Heading>
        <div className="flex items-center justify-center gap-5">
          {hackathon.sponsors.brozne.map((sponsor) => (
            <SponserImage key={sponsor.id} sponsorLogo={sponsor.sponsorLogo} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Sponsors;

type SponserImageProps = {
  sponsorLogo: string | JSX.Element | StaticImageData;
};

const SponserImage: React.FC<SponserImageProps> = ({ sponsorLogo }) => {
  if (!sponsorLogo) {
    return null; // return null if sponsorLogo is not defined
  }

  if (React.isValidElement(sponsorLogo)) {
    return (
      <div
        className={`flex items-center justify-center ${
          hackathon.blur.sponsors && 'blur-lg'
        }`}
      >
        {sponsorLogo}
      </div>
    );
  } else if (
    typeof sponsorLogo === 'string' ||
    typeof sponsorLogo === 'object'
  ) {
    return (
      <div
        className={`flex items-center justify-center ${
          hackathon.blur.sponsors && 'blur-lg'
        }`}
      >
        <Image
          // @ts-ignore
          src={sponsorLogo}
          alt="sponserImg"
          className="rounded-lg object-cover"
          width={110}
          height={80}
        />
      </div>
    );
  } else {
    console.error('Invalid sponsorLogo:', typeof sponsorLogo);
    return null; // return null if sponsorLogo is not a valid string or JSX element
  }
};
