// Import all team member photos
import pratham_photo from '$lib/assets/team/website/pratham.jpg?url';
import anuj_photo from '$lib/assets/team/website/anuj.jpg?url';
import tanmay_photo from '$lib/assets/team/website/tanmay.jpg?url';

import ankush_photo from '$lib/assets/team/advisors/Ankush.jpg?url';
import womika_photo from '$lib/assets/team/advisors/Womika.jpg?url';
import yash_photo from '$lib/assets/team/advisors/Yash.jpg?url';
import abc_photo from '$lib/assets/team/advisors/abc.jpg?url';

import aryanvidhate_photo from '$lib/assets/team/bcs/aryanvidhate.jpg?url';
import nikhil_photo from '$lib/assets/team/bcs/nikhil.jpg?url';
import saksham_photo from '$lib/assets/team/bcs/saksham.jpg?url';
import shivam_photo from '$lib/assets/team/bcs/shivam.jpg?url';

import akshitaray_photo from '$lib/assets/team/cnd/akshitaray.jpg?url';
import harshachaudari_photo from '$lib/assets/team/cnd/harshachaudari.jpg?url';
import mahimaraut_photo from '$lib/assets/team/cnd/mahimaraut.jpg?url';
import maitrayi_photo from '$lib/assets/team/cnd/maitrayi.jpg?url';

import aarti_photo from '$lib/assets/team/female-coordinator/Aarti.JPG?url';

import jay_pathode_photo from '$lib/assets/team/technical/Jay Pathode .webp?url';

import bhavna_photo from '$lib/assets/team/organization/bhavna.jpg?url';
import sachu_photo from '$lib/assets/team/organization/sachu.jpg?url';
import samraddhi_photo from '$lib/assets/team/organization/samraddhi.jpg?url';
import somnath_photo from '$lib/assets/team/organization/somnath.jpg?url';
import vaijanti_photo from '$lib/assets/team/organization/vaijanti.jpg?url';

import yashasvi_photo from '$lib/assets/team/sponsorship/YASHASVI.jpg?url';

import arnav_photo from '$lib/assets/team/publicity/arnav.jpg?url';
import aryan_photo from '$lib/assets/team/publicity/aryan.jpg?url';
import raza_photo from '$lib/assets/team/publicity/raza.jpg?url';
import shrikant_photo from '$lib/assets/team/publicity/shrikant.jpg?url';
import vishesh_photo from '$lib/assets/team/publicity/vishesh.jpg?url';

import vedantkale_photo from '$lib/assets/team/social-media/vedantkale.jpg?url';
import xyz_photo from '$lib/assets/team/social-media/xyz.jpg?url';

type Person = {
  name: string;
  photoUrl: string;
  postContent: string;
};

type Team = {
  name: string;
  members: Person[]
}

export const teams: Team[] = [
  {
    name: "Website Team",
    members: [
      {
        name: 'Pratham Jain',
        photoUrl: pratham_photo,
        postContent: 'Head',
      },
      {
        name: 'Anuj Waghwani',
        photoUrl: anuj_photo,
        postContent: 'Co-head',
      },
      {
        name: 'Tanmay Pande',
        photoUrl: tanmay_photo,
        postContent: 'Co-head',
      },
    ]
  },
  {
    name: "Advisor Team",
    members: [
      {
        name: 'Ankush Singh',
        photoUrl: ankush_photo,
        postContent: 'Advisor',
      },
      {
        name: 'Womika Gaidhani',
        photoUrl: womika_photo,
        postContent: 'Advisor',
      },
      {
        name: 'Yash Dhawale',
        photoUrl: yash_photo,
        postContent: 'Advisor',
      },
      {
        name: 'abc',
        photoUrl: abc_photo,
        postContent: 'Advisor',
      },

    ]
  },
  {
    name: "BCs Team",
    members: [
      {
        name: 'Aryan vidhate',
        photoUrl: aryanvidhate_photo,
        postContent: 'BCs',
      },
      {
        name: 'Nikhil',
        photoUrl: nikhil_photo,
        postContent: 'BCs',
      },
      {
        name: 'Saksham',
        photoUrl: saksham_photo,
        postContent: 'BCs',
      },
      {
        name: 'Shivam',
        photoUrl: shivam_photo,
        postContent: 'BCs',
      },
    ]
  },
  {
    name: "C&D Team",
    members: [
      {
        name: 'Akshita Ray',
        photoUrl: akshitaray_photo,
        postContent: 'C&D',
      },
      {
        name: 'Harsha Chaudari',
        photoUrl: harshachaudari_photo,
        postContent: 'C&D',
      },
      {
        name: 'Mahima Raut',
        photoUrl: mahimaraut_photo,
        postContent: 'C&D',
      },
      {
        name: 'Maitrayi Waindeshkar',
        photoUrl: maitrayi_photo,
        postContent: 'C&D',
      },
    ]
  },
  {
    name: "Female- Coordinator",
    members: [
      {
        name: 'Aarti Bhujade',
        photoUrl: aarti_photo,
        postContent: 'Female- Coordinator',
      },
    ]
  },
  {
    name: "Technical Team",
    members: [
      {
        name: 'Jay Pathode',
        photoUrl: jay_pathode_photo,
        postContent: 'Head',
      },
    ]
  },
  {
    name: "Organizing Team",
    members: [
      {
        name: 'Bhavna Nakade',
        photoUrl: bhavna_photo,
        postContent: 'Head',
      },
      {
        name: 'Sachu Sonak ',
        photoUrl: sachu_photo,
        postContent: 'Head',
      },
      {
        name: 'Samriddhi Pandey ',
        photoUrl: samraddhi_photo,
        postContent: 'Head',
      },
      {
        name: 'Somnath Majumdar ',
        photoUrl: somnath_photo,
        postContent: 'Head',
      },
      {
        name: 'Vaijanti Padave ',
        photoUrl: vaijanti_photo,
        postContent: 'Head',
      },
    ]
  },
  {
    name: "Sponsorship Team",
    members: [
      {
        name: 'Yashasvi ',
        photoUrl: yashasvi_photo,
        postContent: 'Head',
      },
    ]
  },
  {
    name: "Publicity Team",
    members: [
      {
        name: 'Arnav Ingole',
        photoUrl: arnav_photo,
        postContent: 'Co-head',
      },
      {
        name: 'Aryan Shinde',
        photoUrl: aryan_photo,
        postContent: 'Co-head',
      },
      {
        name: 'Raza Khan',
        photoUrl: raza_photo,
        postContent: 'Co-head',
      },
      {
        name: 'Shrikant Dhoble',
        photoUrl: shrikant_photo,
        postContent: 'Co-head',
      },
      {
        name: 'Vishesh Karmankar',
        photoUrl: vishesh_photo,
        postContent: 'Co-head',
      },
    ]
  },
  {
    name: "Social Media Team",
    members: [
      {
        name: 'Vedant Kale',
        photoUrl: vedantkale_photo,
        postContent: 'Head',
      },
      {
        name: 'xyz',
        photoUrl: xyz_photo,
        postContent: 'Head',
      },
    ]
  },

]
