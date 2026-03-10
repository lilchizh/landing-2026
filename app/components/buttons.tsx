import Link from "next/link"

interface IButtonLink {
    href: string;
    classes?: string;
    children: React.ReactNode;
    out?: boolean;
}

export const ButtonLink = ({ href, classes = "", children, out }: IButtonLink) => (
    <Link
        href={href}
        target={out ? "_blank" : "_self"}
        rel={out ? "noopener noreferrer" : undefined}
        className={`inline-flex items-center justify-center gap-4 px-11 py-3 border border-solid rounded-[4px] text-button text-center duration-100 tracking-[2px] ${classes}`}
    >
        {children}
    </Link>
)

export const PrimaryButton = (props: IButtonLink) => (
    <ButtonLink
        href={props.href}
        out={props.out}
        classes={`bg-button-primary border-button-primary text-white hover:bg-button-primary-hover hover:border-button-primary-hover ${props.classes ?? ""}`}
    >
        {props.children}
    </ButtonLink>
)

export const PrimaryHollowButton = (props: IButtonLink) => (
    <ButtonLink
        href={props.href}
        out={props.out}
        classes={`bg-transparent border-button-primary text-black hover:border-button-primary-hover ${props.classes ?? ""}`}
    >
        {props.children}
    </ButtonLink>
)

export const SecondaryButton = (props: IButtonLink) => (
    <ButtonLink
        href={props.href}
        out={props.out}
        classes={`bg-button-secondary border-button-secondary text-white hover:bg-button-secondary-hover hover:border-button-secondary-hover ${props.classes ?? ""}`}
    >
        {props.children}
    </ButtonLink>
)

export const SecondaryHollowButton = (props: IButtonLink) => (
    <ButtonLink
        href={props.href}
        out={props.out}
        classes={`bg-transparent border-button-secondary text-black hover:border-button-secondary-hover ${props.classes ?? ""}`}
    >
        {props.children}
    </ButtonLink>
)

export const GhostButton = (props: IButtonLink) => (
    <ButtonLink
        href={props.href}
        out={props.out}
        classes={`bg-transparent border-transparent text-black hover:bg-black/5 ${props.classes ?? ""}`}
    >
        {props.children}
    </ButtonLink>
)
