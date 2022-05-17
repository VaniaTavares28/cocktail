import images from "../assets/images";

type Nav = {
  id: string;
  title?: string;
  path: string;
  image?: string;
  group?: { subId: string; title?: string; path: string; image?: string }[];
};

export const navLinks: Nav[] = [
  { id: "nav001", title: "Home", path: "/" },
  { id: "nav002", title: "API", path: "/nav" },
  {
    id: "nav003",
    path: ".",
    group: [
      { subId: "nav00301", title: "Forum", path: "." },
      {
        subId: "nav00302",
        image: images.facebook,
        title: "Facebook",
        path: "https://www.facebook.com/TheDataDB/",
      },
      {
        subId: "nav00303",
        image: images.twitter,
        title: "Twitter",
        path: "https://twitter.com/TheAudioDB",
      },
    ],
  },
];
