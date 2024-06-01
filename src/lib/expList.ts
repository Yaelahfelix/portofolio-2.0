interface WorkOrg {
  name: string;
  duration: string;
  job: string;
  description: string;
}

interface Achievement {
  name: string;
  company: string;
  date: string;
}

export const workOrgList: WorkOrg[] = [
  {
    name: "Ability Online Academy",
    duration: "6 Months",
    job: "FullStack Web Developer (ReactJS, Laravel)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate magni sequi, voluptates in totam cumque assumenda sunt commodi beatae natus, perspiciatis eligendi? Reprehenderit, nesciunt quisquam quibusdam dolorem voluptatem molestias!",
  },
  {
    name: "OSIS SMKS Bina Nasional Informatika",
    duration: "1 Year",
    job: "Head Master",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate magni sequi, voluptates in totam cumque assumenda sunt commodi beatae natus, perspiciatis eligendi? Reprehenderit, nesciunt quisquam quibusdam dolorem voluptatem molestias!",
  },
  {
    name: "PT Tuv Nord Indonesia",
    duration: "4 Months",
    job: "Administration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate magni sequi, voluptates in totam cumque assumenda sunt commodi beatae natus, perspiciatis eligendi? Reprehenderit, nesciunt quisquam quibusdam dolorem voluptatem molestias!",
  },
];

export const achievementList: Achievement[] = [
  {
    name: "Fully Funded Scholarship Recipients",
    company: "Universitas BSI",
    date: "2024",
  },
  {
    name: "Top Graduate of Vocational High School",
    company: "SMKS Bina Nasional Informatika",
    date: "2024",
  },
  {
    name: "Recipient of a scholarship to study Japanese at JLPT N4 level.",
    company: "HEROS Language Center",
    date: "2024",
  },
];
