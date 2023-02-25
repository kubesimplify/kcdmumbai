import { GoogleSVG } from '@assets/icon';
import Amazon from '@assets/amzon.png'
import Meta from '@assets/fb.png'
import Microsoft from '@assets/microsoft.png'
import Dell from '@assets/dell.png'
import Adobe from '@assets/adobe.png'

//! If anything you want to remove just set the value to null like this
// date: 'March 25 - 26, 2023',
// date: null,

const hackathon = {
  socials: {
    twitter: "https://twitter.com/kcdmumbai",
    linkedin: null,
    instagram: null,
    slack: null,
  },
  email: "contact@kcdmumbai.com",
  location: 'Mumbai',
  date: 'June 10th, 2023',
  aboutUs: 'Join us at Kubernetes Community Days in Mumbai to experience the power of a diverse community coming together to learn & share knowledge on cloud native.',
  blur: {
    sponsors: true,
    speakers: false,
  },
  speakers: [
    {
      id: 1,
      name: "Saiyam Pathak",
      imageUrl: "https://avatars.githubusercontent.com/u/8190114?v=4",
      profession: "Director",
      company: "Civo",
    },
    {
      id: 2,
      name: "Rohit Ghumare",
      imageUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_face,h_130,q_auto:good,w_130/v1/gcs/platform-data-cncf/avatars/rohit_ghumare.jpg",
      profession: "Develoeper Advocate",
      company: 'Solo.io',
    },
  ],
  sponsors: {
    platinum: [
      {
        id: 1,
        sponsorLogo: GoogleSVG,
      },
      {
        id: 2,
        sponsorLogo: "https://cdn.discordapp.com/attachments/1011970131112505378/1062977570771042395/image.png"
      },
    ],
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
    brozne: [
      {
        id: 1,
        sponsorLogo: Dell,
      },
      {
        id: 2,
        sponsorLogo: Adobe
      },
    ],
  },
}

export default hackathon
