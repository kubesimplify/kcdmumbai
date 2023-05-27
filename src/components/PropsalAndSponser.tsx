import Heading from './ui/Heading';
import SectionWrapper from './ui/SectionWrapper';
import hackathon from '@data/index';
import Button from './ui/Button';
import { ProposalIcon, ProspectusIcon } from '@assets/icon';

const PropsalAndSponsors = () => {
  return (
    <SectionWrapper className="mx-3 items-center justify-center" id="sponsor">
      <div className="flex w-full flex-col items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#79c1c4b6] via-[#dde5e5b6] to-[#81c7c9ae] p-10 md:flex-row md:p-20">
        <div className="flex flex-col items-center justify-center gap-3">
          <Heading className="!text-2xl">Sponsor us</Heading>
          <p className="text-justify text-main-color sm:text-left">
            KCD is a community-organized event and would not be possible without
            our partners. If you&apos;re interested in becoming a sponsor,
            contact us at{' '}
            <a href={`mailto:${hackathon.email}`}>{hackathon.email}</a>.
          </p>
          <Button
            className="whitespace-nowrap"
            href="/KCD_Mumbai.pdf"
            rel="noopener noreferrer"
          >
            Sponsorship Prospectus {ProspectusIcon}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PropsalAndSponsors;
