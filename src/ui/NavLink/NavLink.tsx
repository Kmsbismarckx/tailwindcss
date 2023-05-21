import { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;
export const NavLink = (props: Props) => {
  return (
    <a className="inline-block py-3 px-2" {...props}>
      {props.children}
    </a>
  );
};
