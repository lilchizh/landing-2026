'use client'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useFormState } from '../hooks/useFormState';
import { useState } from 'react';
import FormSelector from './FormSelector';

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

const FormItem = ({ id, title, register, handler, isRequired }: IFormItemOptions) => <div className="flex items-end w-full h-[62px] relative group bg-slate-bg rounded-[6px] border border-solid border-slate-border focus-within:bg-slate-bg focus-within:border-[#8248E5] focus-within:shadow-md focus-within:shadow-purple-300">
    <input type="text" id={id} required={isRequired} className="w-full h-[42px] px-4 text-[18px] peer outline-none rounded-[6px] bg-inherit" {...register(title, { required: isRequired })} />
    <label htmlFor={id} className={
        isRequired ?
            'transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[18px] cursor-text group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[0px] group-focus-within:translate-x-[16px] peer-valid:-translate-y-[0px] peer-valid:translate-x-[16px] group-focus-within:opacity-40 peer-valid:opacity-40 group-focus-within:pl-0 peer-valid:pl-0'
            :
            `transform transition-all absolute top-0 left-0 h-full flex items-center pl-5 text-[18px] cursor-text group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-[0px] group-focus-within:translate-x-[16px] ${handler && '-translate-y-[0px] translate-x-[16px] opacity-40 pl-0 h-1/2 text-xs'} group-focus-within:opacity-40 group-focus-within:pl-0`}>{title}</label>
    {isRequired && <span className="absolute text-[#DB0170] top-5 right-5 text-[22px] peer-valid:hidden peer-invalid:inline">*</span>}
    <span className={`absolute text-[#DB0170] top-5 right-5 text-[22px] ${isRequired ? 'peer-valid:inline peer-invalid:hidden' : handler ? 'inline' : 'hidden'}`}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 11L9.5 16.5L19.5 6.5" stroke="#1AA842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </span>
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

const FormSubmitButton = ({ isSending, isSuccess }: { isSending: boolean, isSuccess: boolean }) => <div className="flex flex-col md:flex-row items-center gap-6">
    <button
        disabled={isSending}
        className="inline-block py-2 px-5 border text-lg text-center rounded-2xl font-semibold duration-75 bg-primary-button-bg border-primary-button-border text-primary-button-text hover:bg-primary-button-bg-hover"
        type="submit"
    >
        {isSending ? <span className="flex items-center gap-4">
            <span>Sending</span>
        </span> : 'Send →'}
    </button>
    {
        isSuccess && <span className="text-green-700">Sent successfully!</span>
    }
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

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full lg:w-[630px] mx-auto">

        <FormItem id="project-name" title="Project name" isRequired register={register} />

        <FormItem id="chain" title="Chain" isRequired register={register} />

        <FormItem id="project-sm" title="Project social media" isRequired register={register} />

        <FormItem id="contacts" title="Contacts" isRequired register={register} />

        <FormTextArea id="additional-information" title="Additional information" register={register} />

        <FormSubmitButton isSending={isSending} isSuccess={isSuccess} />

    </form>

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
    const [formType, setFormType] = useState<FormType>('')

    return <div className='flex flex-col gap-6 w-full px-8 md:px-0 lg:w-[630px] mx-auto'>
        <FormSelector onSelect={setFormType} />
        {forms[formType]}
    </div>

}
