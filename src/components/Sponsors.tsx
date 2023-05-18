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
          If you&apos;re interested in becoming a sponsor, contact us at{' '}
          <a href={`mailto:${hackathon.email}`}>{hackathon.email}</a>.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Heading className="!text-lg">PLATINUM</Heading>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {hackathon.sponsors.platinum.map((sponsor) => (
            <SponserImage
              key={sponsor.id}
              type="platinum"
              sponsorLogo={sponsor.sponsorLogo}
            />
          ))}
        </div>

        <Heading className="!text-lg">GOLD</Heading>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {hackathon.sponsors.gold.map((sponsor) => (
            <SponserImage
              key={sponsor.id}
              sponsorLogo={sponsor.sponsorLogo}
              type="gold"
            />
          ))}
        </div>

        <Heading className="!text-lg">SILVER</Heading>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {hackathon.sponsors.silver.map((sponsor) => (
            <SponserImage
              key={sponsor.id}
              sponsorLogo={sponsor.sponsorLogo}
              type="silver"
            />
          ))}
        </div>

        <Heading className="!text-lg">Community</Heading>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {hackathon.sponsors.community.map((sponsor) => (
            <SponserImage
              key={sponsor.id}
              sponsorLogo={sponsor.sponsorLogo}
              type="community"
              size="sm"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Sponsors;

type SponserImageProps = {
  sponsorLogo: string | JSX.Element | StaticImageData;
  type: 'gold' | 'silver' | 'platinum' | 'community';
  size?: 'sm' | 'md';
};

const SponserImage: React.FC<SponserImageProps> = ({
  sponsorLogo,
  type,
  size = 'md',
}) => {
  if (!sponsorLogo) {
    return null; // return null if sponsorLogo is not defined
  }

  if (React.isValidElement(sponsorLogo)) {
    return (
      <div
        className={`flex items-center justify-center ${
          hackathon.blur.sponsors[type] ? 'blur-lg' : ''
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
        className={`flex items-center h-[100px] justify-center ${
          hackathon.blur.sponsors[type] ? 'blur-lg' : ''
        }`}
      >
        <Image
          // @ts-ignore
          src={sponsorLogo}
          alt="sponserImg"
          className={`object-cover ${
            type == 'community' ? 'h-full w-auto' : ''
          }`}
          width={size === 'sm' ? 100 : 170}
          height={90}
          unoptimized
        />
      </div>
    );
  } else {
    console.error('Invalid sponsorLogo:', typeof sponsorLogo);
    return null; // return null if sponsorLogo is not a valid string or JSX element
  }
};
