import Link from "next/link";
import React from "react";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  classes?: string;
  out?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  href,
  onClick,
  children,
  classes = "",
  out,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-4 px-11 py-3 border border-solid rounded-[4px] text-button text-center cursor-pointer duration-100 tracking-[2px]";

  const combined = `${baseClasses} ${classes}`;

  if (href) {
    return (
      <Link
        href={href}
        target={out ? "_blank" : "_self"}
        rel={out ? "noopener noreferrer" : undefined}
        className={combined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
};

export const PrimaryButton = (props: ButtonProps) => (
  <Button
    {...props}
    classes={`bg-button-primary border-button-primary text-white hover:bg-button-primary-hover hover:border-button-primary-hover ${props.classes ?? ""}`}
  />
);

export const PrimaryHollowButton = (props: ButtonProps) => (
  <Button
    {...props}
    classes={`bg-transparent border-button-primary text-black hover:border-button-primary-hover ${props.classes ?? ""}`}
  />
);

export const SecondaryButton = (props: ButtonProps) => (
  <Button
    {...props}
    classes={`bg-button-secondary border-button-secondary text-white hover:bg-button-secondary-hover hover:border-button-secondary-hover ${props.classes ?? ""}`}
  />
);

export const SecondaryHollowButton = (props: ButtonProps) => (
  <Button
    {...props}
    classes={`bg-transparent border-button-secondary text-black hover:border-button-secondary-hover ${props.classes ?? ""}`}
  />
);

export const GhostButton = (props: ButtonProps) => (
  <Button
    {...props}
    classes={`bg-transparent border-transparent text-black hover:bg-black/5 ${props.classes ?? ""}`}
  />
);