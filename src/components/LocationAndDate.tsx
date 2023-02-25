import Image from 'next/image';
import Heading from './ui/Heading';
import SectionWrapper from './ui/SectionWrapper';
import building from '@assets/building.png';
import hackathon from '@data/index';

const LocationAndDate = () => {
  return (
    <SectionWrapper className="mx-3 items-center justify-center">
      <Heading>Location and Date</Heading>
      <div className="flex flex-col-reverse gap-5 px-0 md:flex-row md:px-0">
        <div className="md:w-1/2">
          <div className="mx-auto  flex flex-col items-center justify-center overflow-hidden rounded-xl shadow-xl lg:w-max">
            <Image
              src={building}
              alt="building image"
              width={400}
              height={200}
              className="rounded-t-xl"
            />
            <p className="bg-[#ffffff] py-1 font-semibold text-main-color ">
              Mumbai
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4 md:w-1/2">
          <h1>
            KCD Mumbai will be held in Mumbai. With over 350 attendees, this
            will be one of the largest events for cloud-native in Mumbai with a
            focus on open source and community.
          </h1>
          <h1>
            We will provide the safest possible hybrid event and follow all the
            government and CNCF guidelines.
          </h1>
          <p className="font-bold">Date: {hackathon?.date}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LocationAndDate;
