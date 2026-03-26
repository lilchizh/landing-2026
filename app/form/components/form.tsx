'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useFormState } from '../hooks/useFormState';
import { useState } from 'react';
import FormSelector from './FormSelector';
import { PrimaryButton } from '@/app/components/buttons';
import { Loader } from 'lucide-react';
import Link from 'next/link';

export type FormType = '' | 'code-integration' | 'marketing-proposals' | 'other-options' | 'plugin-development' | 'staking';


interface IFormItemOptions { id: string; title: string; register: any; handler?: any; isRequired?: boolean }

const marketingForm = [
    {
        title: 'Select collaboration point',
        value: ''
    },
    {
        title: 'AMA',
        value: 'ama'
    },
    {
        title: 'Social Media',
        value: 'social-media'
    },
    {
        title: 'Competitions',
        value: 'competitions'
    },
    {
        title: 'Giveaways',
        value: 'giveaways'
    },
    {
        title: 'Ads',
        value: 'ads'
    },
    {
        title: 'Media',
        value: 'media'
    },
    {
        title: 'Promotion',
        value: 'promotion'
    },
    {
        title: 'Other',
        value: 'other'
    }
]

function sendForm(subject: string, data: any, success: () => void, afterSubmit: () => void, images?: string[], error?: () => void) {
    afterSubmit()
    fetch('https://api.algebra.finance/api/send_form/', {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, data, images })
    })
        .then((data) => {
            if (data.ok) {
                success()
            } else {
                alert('Something went wrong')
                if (error) {
                    error()
                } else {
                    success()
                }
            }
        })
}

const FormItem = ({ id, title, register, handler, isRequired }: IFormItemOptions) => <div className="flex items-end w-full h-[50px] relative group border border-[#F5F7F9] bg-[#F5F7F9] rounded-[4px] focus-within:bg-slate-bg focus-within:border-[#23E2FF]">
    <input type="text" id={id} required={isRequired} className="w-full h-[48px] px-3 text-body-s peer outline-none rounded-[6px] bg-inherit focus-within:pt-4 valid:pt-4" {...register(title, { required: isRequired })} />
    <label htmlFor={id} className={
        isRequired ?
            'transform transition-all absolute top-0 left-0 h-full flex items-center pl-3 text-body-s cursor-text group-focus-within:text-caption peer-valid:text-caption group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:translate-y-[2px] group-focus-within:translate-x-[12px] peer-valid:translate-y-[2px] peer-valid:translate-x-[12px] group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-[#778CA6] peer-valid:text-[#778CA6]'
            :
            `transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-body-s cursor-text group-focus-within:text-caption group-focus-within:h-1/2 group-focus-within:-translate-y-[0px] group-focus-within:translate-x-[16px] ${handler && '-translate-y-[0px] translate-x-[16px] opacity-40 pl-0 h-1/2 text-xs'} group-focus-within:opacity-40 group-focus-within:pl-0`}>{title}</label>
    {isRequired && <span className="absolute text-[#DB0170] top-4 right-3 text-caption peer-valid:hidden peer-invalid:inline">*</span>}
    {/* <span className={`absolute text-[#DB0170] top-5 right-5 text-[22px] ${isRequired ? 'peer-valid:inline peer-invalid:hidden' : handler ? 'inline' : 'hidden'}`}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11L9.5 16.5L19.5 6.5" stroke="#1AA842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span> */}
</div>

const FormTextArea = ({ id, title, register, isRequired }: IFormItemOptions) => <div className="flex items-end w-full h-[200px] relative group bg-slate-bg rounded-[6px] border border-solid border-slate-border focus-within:bg-slate-bg focus-within:border-[#8248E5] focus-within:shadow-md focus-within:shadow-purple-300">
    <textarea id={id} required={isRequired} className="w-full h-[160px] px-4 text-[18px] peer outline-none rounded-[6px] bg-inherit resize-none" {...register(title, { required: isRequired, maxLength: 400 })} />
    <label htmlFor={id} className="transform transition-all absolute top-5 left-0 !h-fit flex items-center pl-5 text-[18px] cursor-text group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[11px] group-focus-within:translate-x-[16px] peer-valid:-translate-y-[11px] peer-valid:translate-x-[16px] group-focus-within:opacity-40 peer-valid:opacity-40 group-focus-within:pl-0 peer-valid:pl-0">{title}</label>
    <span className="absolute text-[#DB0170] top-5 right-5 text-[22px] peer-valid:hidden peer-invalid:inline">*</span>
    {/* <span className="absolute text-[#DB0170] top-5 right-5 text-[22px] peer-valid:inline peer-invalid:hidden">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11L9.5 16.5L19.5 6.5" stroke="#1AA842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span> */}
</div>

const FormSubmitButton = ({ isSending }: { isSending: boolean, isSuccess: boolean }) => <div className="flex flex-col md:flex-row items-center gap-6">
    <button
        disabled={isSending}
        className="inline-flex w-full items-center justify-center text-center py-3 mx-14 px-16 bg-button-primary hover:bg-button-primary-hover cursor-pointer text-button disabled rounded-sm tracking-[2px]"
        type="submit"
    >
        {isSending ? <span className="flex items-center gap-4">
            <span>
                <Loader className='animate-spin' />
            </span>
        </span> : <span className='flex items-center gap-4'>
            <span>Submit</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12L5 12" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12L13 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 12L13 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>}
    </button>
</div>

export const PluginBuilderForm = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { isSending, isSuccess, afterSubmit, onError, onSuccess } = useFormState(reset)

    const twH = watch('Twitter handle')

    const onSubmit: SubmitHandler<any> = data => sendForm('Plugin Development', data, onSuccess, afterSubmit, undefined, onError)

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full lg:w-[630px] mx-auto">

        <FormItem id="username" title="Name / Team name" isRequired register={register} />

        <FormItem id="github" title="Github handle" isRequired register={register} />

        <FormItem id="twitter" title="Twitter handle" register={register} handler={twH} />

        <FormTextArea id="idea" title="Plugin idea description" register={register} />

        <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

    </form>

}

export const StakingForm = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { isSending, isSuccess, afterSubmit, onError, onSuccess } = useFormState(reset)

    const onSubmit: SubmitHandler<any> = data => sendForm('Staking', data, onSuccess, afterSubmit, undefined, onError)

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full lg:w-[630px] mx-auto">

        <FormItem id="username" title="Your name" isRequired register={register} />

        <FormItem id="tg" title="TG handle" isRequired register={register} />

        <FormItem id="email" title="E-mail address" isRequired register={register} />

        <FormTextArea id="info" title="Additional information" register={register} />

        <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

    </form>

}

export const CodeIntegrationForm = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { isSending, isSuccess, afterSubmit, onError, onSuccess } = useFormState(reset)

    const onSubmit: SubmitHandler<any> = data => sendForm('Code Integration', data, onSuccess, afterSubmit, undefined, onError)

    const close = () => window.dispatchEvent(new Event("close-modal"));

    if (isSuccess) return <div className='flex flex-col items-center gap-6 justify-center w-full text-center'>

        <div className='flex items-center justify-center w-11 h-11 bg-[#23E2FF] rounded-full'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.16602 9.99992L8.33268 14.1666L16.666 5.83325" stroke="black" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

        <div className='text-h4'>Application Received!</div>

        <div className='text-body-m'>Thank you for your interest in integrating with us. We will get back to you shortly.</div>

        <div className='p-6 bg-[#F5F7F9] text-body-s'>
            If you haven't heard from us within <b>2 business days</b>, please reach out directly: adam@algebra.finance
        </div>

        <button
            onClick={close}
            className="inline-flex items-center justify-center text-center py-3 w-[150px] px-16 bg-button-primary hover:bg-button-primary-hover cursor-pointer text-button disabled rounded-sm tracking-[2px]"
        >
            OK
        </button>

    </div>

    return <div className='text-center'>
        <div className="text-h4 mb-6">Integration Request</div>
        <div className="text-caption text-[11px] text-[#778CA6] tracking-[12%] mb-6">All fields are required</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mx-auto">

            <FormItem id="first-name" title="First Name" isRequired register={register} />

            <FormItem id="last-name" title="Last name" isRequired register={register} />

            <FormItem id="project-name" title="Project Name" isRequired register={register} />

            <FormItem id="contacts" title="Email / Telegram" isRequired register={register} />

            <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

        </form>
        <Link href={"https://forms.gle/stMbZwjRjtX7ATSF9"} target={"_blank"} className="inline-flex items-center gap-2 mx-auto mt-6 text-caption text-[11px] text-[#778CA6] tracking-[12%]">
            <span>For <span className="underline">marketing proposals</span> use this form</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.457 16.9148L13.9144 11.7287L10.457 6.54265" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    </div>

}

export const MarketingForm = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { isSending, isSuccess, afterSubmit, onError, onSuccess } = useFormState(reset)

    const onSubmit: SubmitHandler<any> = data => sendForm('Marketing Proposals', data, onSuccess, afterSubmit, undefined, onError)

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full lg:w-[630px] mx-auto">

        <FormItem id="project-name" title="Project name" isRequired register={register} />

        <div className='relative'>
            <select id="collaboration-point" {...register("Collaboration point", { required: true })} className="flex text-[18px] items-end w-full h-[62px] px-4 relative group bg-slate-bg rounded-[6px] border border-solid border-slate-border focus-within:bg-slate-bg focus-within:border-[#8248E5] focus-within:shadow-md focus-within:shadow-purple-300 appearance-none">
                {
                    marketingForm.map(option =>
                        <option key={option.title} value={option.value}>{option.title}</option>)
                }
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </div>
        </div>

        <FormItem id="project-sm" title="Project social media" isRequired register={register} />

        <FormItem id="contacts" title="Contacts" isRequired register={register} />

        <FormTextArea id="additional-information" title="Additional information" register={register} />

        <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

    </form>

}

export const OtherForm = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const { isSending, isSuccess, afterSubmit, onError, onSuccess } = useFormState(reset)

    const onSubmit: SubmitHandler<any> = data => sendForm('Other', data, onSuccess, afterSubmit, undefined, onError)

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full lg:w-[630px] mx-auto">

        <FormTextArea id="additional-information" title="Additional information" register={register} />

        <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

    </form>

}

const forms = {
    '': <></>,
    'code-integration': <CodeIntegrationForm />,
    'marketing-proposals': <MarketingForm />,
    'other-options': <OtherForm />,
    'plugin-development': <PluginBuilderForm />,
    'staking': <StakingForm />
}


export const Form = () => {
    const [formType] = useState<FormType>('code-integration')

    return <div className='flex flex-col gap-6 w-full px-4 md:px-0 mx-auto'>
        {/* <FormSelector onSelect={setFormType} /> */}
        {forms[formType]}
    </div>

}
