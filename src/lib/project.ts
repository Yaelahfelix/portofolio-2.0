export interface ProjectType {
  title: string;
  typeProject: string;
  skills: string;
  description: string;
  images: SlideImage[];
}

export type SlideImage = {
  url: string;
};

export const ProjectList: ProjectType[] = [
  {
    title: "S-BNI",
    typeProject: "Hybrid Web Application",
    skills:
      "Javascript, Typescript, React JS, React Native, Java, Next JS, SQL, Authentication, Slicing UI, TailwindCSS, Radix UI, TailwindCSS JWT, REST API, API Integration, Middleware, Primsa ORM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: [
      {
        url: "/sbni/1.jpeg",
      },
      {
        url: "/sbni/2.png",
      },
    ],
  },
  {
    title: "Gobot",
    typeProject: "Web Application",
    skills:
      "Javascript, Typescript, React JS, Next JS, Slicing UI, Tailwind CSS, Radix UI, Material UI, Authentication, Middleware, API Integration",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    images: [
      {
        url: "/gobot/1.png",
      },
      {
        url: "/gobot/2.png",
      },
    ],
  },
];
