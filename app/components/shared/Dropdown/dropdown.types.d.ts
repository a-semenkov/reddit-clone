import { ComponentProps, ElementType, MutableRefObject } from 'react';

interface IDropdownOwnProps {
  buttonContent: React.ReactNode;
  children: (props: IDropdownListProps) => React.ReactNode;

  nested?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export type DropdownButtonProps = IDropdownOwnProps &
  Omit<
    ComponentProps<'button'>,
    | keyof IDropdownOwnProps
    | 'aria-controls'
    | 'aria-haspopup'
    | 'aria-expanded'
    | 'type'
  >;

export interface IDropdownListProps {
  toggleDropdownMenu: () => void;
  ref: (node: HTMLElement | null) => void;
}

// interface IDropdownOwnProps<E extends ElementType = ElementType> {
//   As?: E;
//   triggerElementContent: React.ReactNode;
//   children: (props: IDropdownListProps) => React.ReactNode;
//   nested?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
// }

// export type DropdownProps<E extends ElementType> = IDropdownOwnProps<E> &
//   Omit<ComponentProps<E>, keyof IDropdownOwnProps>;
