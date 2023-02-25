import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  SlackIcon,
} from '@assets/icon';

interface SocialProps {
  twitter?: string | null;
  linkedin?: string | null;
  instagram?: string | null;
  slack?: string | null;
}

const Socials = ({ instagram, linkedin, twitter, slack }: SocialProps) => {
  return (
    <div className="flex gap-2">
      {twitter ? <Link link={twitter} icon={TwitterIcon} /> : null}
      {linkedin ? <Link link={linkedin} icon={LinkedinIcon} /> : null}
      {instagram ? <Link link={instagram} icon={InstagramIcon} /> : null}
      {slack ? <Link link={slack} icon={SlackIcon} /> : null}
    </div>
  );
};

export default Socials;

const Link = ({ link, icon }: { link: string; icon: JSX.Element }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="bg-light-background/20 cursor-pointer rounded-lg p-2"
  >
    {icon}
  </a>
);
