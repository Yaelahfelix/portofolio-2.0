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
    duration: "Feb 2024 - Present",
    job: "FullStack Web Developer (ReactJS, Laravel)",
    description:
    "I contributed to the creation of a comprehensive learning platform for school students by utilizing ReactJS to build dynamic and responsive user interfaces, and employing Laravel to develop robust and scalable backend services. I applied TailwindCSS and Material UI to ensure a visually appealing and consistent design across the platform, working closely with the development team to implement features and troubleshoot issues, ensuring a seamless user experience. Continuously improving my technical skills and staying updated with the latest industry trends, I am committed to delivering high-quality work."
  },
  {
    name: "Freelance",
    duration: "Feb 2023 - Present",
    job: "Fullstack Web Developer",
    description:
      "I develop dynamic and responsive web applications tailored to client needs, implementing Next.js for server-side rendering and static site generation to enhance website performance and SEO. I create robust and scalable backend systems with Laravel, design and build interactive user interfaces using React, and engage with clients to understand their requirements and deliver customized solutions. By staying current with industry trends and continuously improving my technical skills, I ensure top-quality results.",
  },
  {
    name: "PT Tuv Nord Indonesia",
    duration: "Jan 2023 - May 2023",
    job: "Administration",
    description:
      "As an office administrator, I manage inventory by recording incoming and outgoing goods, create and maintain data records to ensure accuracy and organization, and handle customer phone calls while providing excellent customer service. I ensure smooth office operations through effective coordination and management, and implement efficient inventory management practices to support business needs.",
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
