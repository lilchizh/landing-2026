"use client"

import { useState } from "react";

import { PrimaryButton, SecondaryHollowButton } from "@/app/components/buttons";
import FormModal from "@/app/form/components/form-modal";
import Image from "next/image";
import Link from "next/link";

interface Props {
    chip: string;
    title: string;
    description: string;
    docsLink?: string;
    additionalDescription?: string;
    features?: Array<{ icon: string; title: string; }>;
    additionalFeatures?: Array<{ title: string; description: string; }>;
    image: string;
    previousLink?: string;
    nextLink?: string;
}

const FeatureLayout = ({ chip, title, description, docsLink, additionalDescription, features, additionalFeatures, image, previousLink, nextLink }: Props) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] 2xl:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] w-full min-h-full bg-dex-card-bg">
            <FormModal isOpen={open} onClose={() => setOpen(false)} />
            <div className="relative sm:hidden w-full h-[360px]">
                <Image src={image} alt={`${title}-image-cover`} fill className="object-cover" />
            </div>
            <div className="flex p-4 pb-20 md:pt-24 md:px-8 min-w-0">
                <div className="xl:max-w-[400px]">
                    <div className="w-fit py-1 px-3 mb-4 text-white text-button tracking-[2px] bg-[#F16CF7] rounded-[3px]">{chip}</div>
                    <div className="mb-4 text-h5 xl:text-h3">{title}</div>
                    <div className="mb-4 text-body-m whitespace-pre-wrap">{description}</div>
                    <div className="flex mb-12 gap-3 whitespace-nowrap">
                        <PrimaryButton onClick={() => setOpen(true)} classes="!p-3 !h-8 !text-black">Contact Sales →</PrimaryButton>
                        { docsLink && <SecondaryHollowButton out href={docsLink} classes="!p-3 !h-8">Docs →</SecondaryHollowButton> }
                    </div>
                    <div className="mb-4 text-body-m">{additionalDescription}</div>
                    {features && <div className="flex flex-wrap gap-2 md:gap-3">
                        {features.map((feature) => (<div className="flex gap-1.5 px-2.5 py-2 bg-white rounded-md" key={`feature-${feature.title}`}>
                            <Image src={feature.icon} alt={feature.title} key={`feature-${feature.title}-icon`} width={14} height={14} />
                            <span className="text-small tracking-[8%]">{feature.title}</span>
                        </div>))}
                    </div>}
                    {additionalFeatures && <div className="flex flex-col gap-2 my-12">
                        {additionalFeatures.map((feature) => (<div className="p-4 bg-white rounded-lg" key={`additional-feature-${feature.title}`}>
                            <div className="text-body-m">{feature.title}</div>
                            <div className="text-body-s text-black/50">{feature.description}</div>
                        </div>))}
                    </div>}
                </div>
            </div>
            <div className=" hidden sm:block relative h-full min-w-0">
                <Image src={image} alt={`${title}-image-cover`} fill className="object-cover md:object-[20%_center] lg:object-center" />
            </div>
            <div className="sticky md:absolute flex gap-3 justify-end bottom-0 left-0 right-0 bg-white md:bg-transparent p-2 w-screen lg:w-full">
                {previousLink && <Link href={previousLink} className="p-3 bg-white/80 text-small rounded-sm">
                    ← Previous
                </Link>}
                {nextLink && <Link href={nextLink} className="p-3 bg-white/80 text-small rounded-sm">
                    Next →
                </Link>}
            </div>
        </div>
    )
}

export default FeatureLayout;