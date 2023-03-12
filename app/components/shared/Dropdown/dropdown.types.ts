export interface IDropdownProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
  cls?: string;
  nested?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
