import k8_logo from '@assets/k8_logo.png';
import NR_Logo from '@assets/NR_logo_HZ_RGB.svg';
import Amazon from '@assets/amzon.png';
import Meta from '@assets/fb.png';
import Microsoft from '@assets/microsoft.png';

//! If anything you want to remove just set the value to null like this
// date: 'March 25 - 26, 2023',
// date: null,

const hackathon = {
  socials: {
    twitter: 'https://twitter.com/kcdmumbai',
    linkedin: null,
    instagram: null,
    slack: null,
  },
  email: 'contact@kcdmumbai.com',
  location: 'Mumbai',
  date: 'June 17th, 2023',
  aboutUs:
    'Join us at Kubernetes Community Days in Mumbai to experience the power of a diverse community coming together to learn & share knowledge on cloud native.',
  blur: {
    sponsors: {
      platinum: false,
      gold: true,
      silver: true,
      community: false,
    },
    speakers: false,
  },
  speakers: [
    {
      id: 1,
      name: 'Saiyam Pathak',
      imageUrl: 'https://avatars.githubusercontent.com/u/8190114?v=4',
      profession: 'Director of Technical Evangelism',
      company: 'Civo',
    },
    {
      id: 2,
      name: 'Rohit Ghumare',
      imageUrl:
        'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-cncf/avatars/rohit_ghumare.jpg',
      profession: 'Developer Advocate',
      company: 'Solo.io',
    },
    {
      id: 3,
      name: 'Divya Mohan',
      imageUrl:
        'https://raw.githubusercontent.com/kubesimplify/kcdmumbai/main/src/assets/divya.png',
      profession: 'Senior Technical Evangelist',
      company: 'SUSE',
    },
    {
      id: 3,
      name: 'Shivay Lamba',
      imageUrl:
        'https://raw.githubusercontent.com/kubesimplify/kcdmumbai/main/src/assets/shivay.jpeg',
      profession: null,
      company: 'MEILISEARCH',
    },
  ],
  sponsors: {
    platinum: [{ id: 1, sponsorLogo: NR_Logo }],
    gold: [
      {
        id: 1,
        sponsorLogo: Meta,
      },
    ],
    silver: [
      {
        id: 1,
        sponsorLogo: Microsoft,
      },
      {
        id: 2,
        sponsorLogo: Amazon,
      },
    ],
    community: [
      {
        id: 1,
        sponsorLogo: k8_logo,
      },
      {
        id: 2,
        sponsorLogo:
          'https://media.discordapp.net/attachments/1019118338774929468/1106268363585507429/chapter-badge-dark.png',
      },
      {
        id: 3,
        sponsorLogo:
          'https://media.discordapp.net/attachments/1019118338774929468/1106268414466588702/cncf__3_.png',
      },
      {
        id: 4,
        sponsorLogo:
          'https://media.discordapp.net/attachments/1019118338774929468/1106268398914121828/gdg_square_logo.png',
      },
      {
        id: 5,
        sponsorLogo:
          'https://media.discordapp.net/attachments/1019118338774929468/1106268382543761520/chapter-badge-dark__1_.png',
      },
    ],
  },
};

export default hackathon;
