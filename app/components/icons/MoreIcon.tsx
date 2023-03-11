import { IconProps } from './icons.types';

export function MoreIcon({ ...props }: IconProps) {
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
        d='M12.005 16.005v-.01M12.005 12.005v-.01M12.005 8.005v-.01'
        stroke='#323232'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
        stroke='#323232'
        strokeWidth='2'
      />
    </svg>
  );
}
