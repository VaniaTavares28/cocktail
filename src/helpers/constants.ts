import images from "../assets/images";

export const navLinks: {
  id: string;
  title?: string;
  path: string;
  image?: string;
}[] = [
  { id: "nav001", title: "Home", path: "/" },
  { id: "nav002", title: "API", path: "/" },
  { id: "nav003", title: "Forum", path: "/" },
  {
    id: "nav004",
    image: images.facebook,
    title: "Facebook",
    path: "https://www.facebook.com/TheDataDB/",
  },
  {
    id: "nav005",
    image: images.twitter,
    title: "Twitter",
    path: "https://twitter.com/TheAudioDB",
  },
];
