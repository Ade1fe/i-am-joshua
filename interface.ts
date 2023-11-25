//interface.ts

export interface BlogProps {
  menu?: string[];
  activeMenu: (arg: number) => void;
}

export interface IHelmet {
    title: string;
    name: string;
    content: string;
  }

  export interface ProjectsProps {
    menu?: string[];
    activeMenu: (arg: number) => void;
  }


  export interface ResumeProp {
    menu?: string[];
    activeMenu: (arg: number) => void;
  }
  