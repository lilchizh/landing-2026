import { classNames } from "../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div
    className={classNames(
      "mx-auto w-full lg:max-w-[var(--section-max-width)]",
      className ?? ""
    )}
  >
    {children}
  </div>
);

export default Container;
