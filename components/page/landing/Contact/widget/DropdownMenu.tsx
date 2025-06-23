import { FC } from 'react'

interface Props{
    values: string[],
    value?: string,
    onChange?: (value: string) => void,
    disabled?: boolean
}

const DropdownMenu: FC<Props> = ({values, value, onChange, disabled}) => {
    return (
        <div className='relative w-full'>
            <select
                value={value || ''}
                onChange={(e) => {
                    if (onChange && e.target.value !== '') {
                        onChange(e.target.value);
                    }
                }}
                disabled={disabled}
                className='
                    w-full 
                    
                    bg-background 
                    placeholder:text-slate-400 
                    text-slate-700 
                    text-base 
                    border 
                    border-slate-200 
                    rounded-[4px] 
                    pl-3 
                    pr-8 
                    py-2 

                    transition 
                    duration-300 
                    ease 

                    focus:outline-none 
                    focus:border-slate-400 
                    hover:border-slate-400 
                    shadow-sm 
                    focus:shadow-md 
                    appearance-none 
                    cursor-pointer
                    
                '
            >
                <option value="" disabled>
                    Select an option...
                </option>
                {values.map((optionValue, i) => {
                    return (
                        <option 
                            key={`${optionValue}-${i}`}
                            value={optionValue}
                        >
                            {optionValue}
                        </option>
                    )
                })}
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-1/2 -translate-y-1/2 right-2.5 text-slate-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
        </div>
    );
};

export default DropdownMenu;