import { FormType } from "./form";

const formList = [
    {
        value: '',
        title: 'Select a topic'
    },
    {
        value: 'code-integration',
        title: 'Code integration'
    },
    {
        value: 'marketing-proposals',
        title: 'Marketing proposals'
    },
    {
        value: 'plugin-development',
        title: 'Plugin Development for Integral'
    },
    {
        value: 'staking',
        title: 'Staking'
    },
    {
        value: 'other-options',
        title: 'Other options'
    }
]

const FormSelector = ({ onSelect }: { onSelect: (value: FormType) => void }) => <div className="relative">
    <select onChange={e => onSelect(e.target.value as FormType)} className="flex items-end w-full h-[62px] px-4 py-4 text-[18px] relative group bg-slate-bg rounded-[6px] border border-solid border-slate-border focus-within:bg-slate-bg focus-within:border-[#8248E5] focus-within:shadow-md focus-within:shadow-purple-300 appearance-none">
        {
            formList.map(option =>
                <option key={option.title} value={option.value}>{option.title}</option>)
        }
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </div>
</div>

export default FormSelector;