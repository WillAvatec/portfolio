export interface Project {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  github: string;
  image: string;
  colors: Colors;
}

type Colors = {
  primary: string;
  secondary: string;
  bg: string;
};
