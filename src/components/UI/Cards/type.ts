import type { ReactNode } from "react";

export interface CardProps{
      title: string;
      lable: string;
      description: string;
      size: string;
      bg: 'white' | 'darkblue' | 'sky-blue';
      content: ReactNode;
      contentfooter: ReactNode;
}