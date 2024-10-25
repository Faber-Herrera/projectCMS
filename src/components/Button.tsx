import { ReactNode } from 'react';

type variant = 'primary' | 'secondary';
type buttonType = 'submit' | 'button';
type Props = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

function Button({ variant = 'primary', children, onClick, type = 'button' }: Props) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
