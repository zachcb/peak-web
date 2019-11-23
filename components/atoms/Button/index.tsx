import React from "react";
import Link from "next/link";
import styles from "./styles.css";

type Props = {
  href?: string;
  children?: string;
};

type ButtonProps = {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => {};
}

// eslint-disable-next-line
const MyButton = React.forwardRef((props: ButtonProps, ref?: React.Ref<HTMLAnchorElement>) => (
  <a
    href={props.href}
    onClick={props.onClick}
    ref={ref}
  >
    Click Me
  </a>
));

function Button({
  href = "/#",
  children = "",
}: Props) {
  return (
    <Link href={href}>
      <MyButton />
    </Link>
  );
}

export default Button;
