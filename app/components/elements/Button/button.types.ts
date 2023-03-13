import { ReactElement, ReactNode } from 'react';

export interface IButton {
  children: ReactNode;
  primary?: Boolean;
  onClick?: () => void;
  classes?: string[];
}
