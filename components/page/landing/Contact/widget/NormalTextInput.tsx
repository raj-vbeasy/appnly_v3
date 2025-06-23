import { FC } from 'react'

interface TextInputProps{
    name: string
    placeholder: string,
    value?: string,
    onChange?: (value: string) => void,
    disabled?: boolean
}

const NormalTextInput: FC<TextInputProps> = ({placeholder, name, value = '', onChange, disabled}) => {
    return (
        <input 
            type='text' 
            placeholder={placeholder} 
            name={name} 
            value={value}
            onChange={(e) => {
                if (onChange) {
                    onChange(e.target.value);
                }
            }}
            disabled={disabled}
            autoComplete='off'
            className='
                w-full
                placeholder-secondary
                text-slate-700 
                text-base 
                border 
                border-slate-200  

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
                bg-background 

                rounded-[4px] 
            '
        />
    );
};

export default NormalTextInput;