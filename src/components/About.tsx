import Image from 'next/image';
import SectionWrapper from './ui/SectionWrapper';
import tower from '@assets/towers.png';

const Aboutus = () => {
  return (
    <SectionWrapper id="about" className="mx-3">
      <div className="flex w-1/2 flex-col gap-5">
        <Image src={tower} alt="tower image" />
      </div>
      <div>
        <p className="text-main-color">
          <strong>KCD Mumbai</strong> will be an in-person event packed with
          Kubernetes and Cloud Native talks and workshops, and ending with a
          party. This will be the first edition of Kubernetes Community Days in
          <strong> Mumbai.</strong> We are an inclusive, and open community of
          engineers, developers, professionals, and anyone in the Cloud Native
          ecosystem.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Aboutus;
