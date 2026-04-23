import type { ReactNode } from "react";

export interface CardProps{
      title?: string;
      lable?: string;
      description?: string;
      size: string;
      bg: 'white' | 'darkblue' | 'sky-blue';
      content: ReactNode;
      contentfooter: ReactNode;
}
export interface CardPeopleProps{
      title?: string;
      img?: string
      description?: string;
      bg: 'white' | 'sky-blue';
      name: string,
      avatar: string,
      descriptionPeopl?: string,
}