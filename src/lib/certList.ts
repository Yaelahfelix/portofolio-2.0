interface CertificateList {
  img: string;
  cols?: number;
  rows?: number;
  title: string;
}

export function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `/certificate/${image}.jpeg?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const certificateList: CertificateList[] = [
  {
    img: "cert1",
    title: "",
  },
  {
    img: "cert2",
    title: "",
  },
  {
    img: "cert3",
    title: "",
  },
  {
    img: "cert4",
    title: "",
  },
  {
    img: "cert5",
    title: "",
  },
  {
    img: "cert6",
    title: "",
  },
  {
    img: "cert7",
    title: "",
  },
  {
    img: "cert8",
    title: "",
  },
  {
    img: "cert9",
    title: "",
  },
  {
    img: "cert10",
    title: "",
  },
];
