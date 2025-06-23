import { Dispatch, FC, SetStateAction } from 'react'

interface Props{

    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const PopUp: FC<Props> = ({setIsOpen}) => {
    return (
        <div onClick={() => setIsOpen(false)}>
            
        </div>
    );
};

export default PopUp;