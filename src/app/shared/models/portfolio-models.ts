export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
  link?: string;
  technologies: string[];
}

export interface ServiceInterface {
  id: number;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

export interface AboutMeInterface {
  name: string;
  bio: string;
  profileImageUrl: string;
  technologies: string[];
}
