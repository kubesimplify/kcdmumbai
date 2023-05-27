import { agenda } from '@data/index';
import Heading from './ui/Heading';
import SectionWrapper from './ui/SectionWrapper';
import Image from 'next/image';
import moment from 'moment';

const Agenda = () => {
  return (
    <SectionWrapper className="mx-3 items-center justify-center" id="agenda">
      <Heading>Agenda</Heading>
      <h1 className="text-lg font-semibold">June 17</h1>
      <div className="flex flex-col gap-2">
        {agenda.map((item) => (
          <Card
            key={item.id}
            title={item?.title}
            description={item?.description}
            badge={item?.place?.title}
            peoples={item.people}
            startTime={item.start_time}
            endTime={item.end_time}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Agenda;

function Card({
  title,
  description,
  badge,
  peoples,
  startTime,
  endTime,
}: {
  title: string;
  description: string | null;
  badge: string | null;
  peoples: any;
  startTime: string;
  endTime: string;
}) {
  return (
    <div className="w-full space-y-5 rounded-lg border border-black p-4">
      <p>
        {moment(startTime).format('hh:mm A')} --{' '}
        {moment(endTime).format('hh:mm A')}
      </p>
      {title ? <h1 className="text-lg font-semibold">{title}</h1> : null}{' '}
      {description ? <p className="text-sm">{description}</p> : null}
      {badge ? <Badge label={badge} /> : null}
      <Badge label="In Person" />
      <div className="flex flex-wrap items-start justify-start gap-5">
        {peoples.map((people: any, id: number) => (
          <Avatar key={id} people={people} />
        ))}
      </div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-black">
      {label}
    </span>
  );
}

function Avatar({ people }: { people: any }) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Image
          className="h-10 w-10 rounded-full"
          src={people?.picture?.url}
          width={50}
          height={50}
          alt={people.first_name}
          unoptimized
        />
        <div className="font-medium">
          <div>{people.first_name + ' ' + people.last_name}</div>
          {people.title.length > 2 ? (
            <p className="text-[10px]">{people.title}</p>
          ) : null}
          {people.company.length > 2 ? (
            <p className="text-[12px]">{people.company}</p>
          ) : null}
        </div>
      </div>
    </>
  );
}
