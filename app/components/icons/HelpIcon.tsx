import { IconProps } from './icons.types';

export function HelpIcon({ ...props }: IconProps) {
  return (
    <svg
      fill='none'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        stroke='#323232'
        strokeWidth='2'
      />
      <path
        d='M10.5 8.677a2 2 0 1 1 1.995 3.261c-.268.068-.495.286-.495.562v.5M12 16h.01'
        stroke='#323232'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
