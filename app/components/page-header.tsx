import { PrimaryButton } from "./buttons";

interface IPageHeader {
    title: string;
    description: string;
    button?: {
        title: string;
        href: string;
    }
}

const PageHeader = ({ title, description, button }: IPageHeader) => <div className="flex flex-col items-center gap-8 py-16 pb-10 mt-16 px-5 md:py-20 md:px-0">
    <h1 className="text-h1 text-center">{title}</h1>
    <p className="text-center text-body max-w-[480px]">{description}</p>
    { button && <PrimaryButton href={button.href}>{button.title}</PrimaryButton> }
</div>

export default PageHeader;