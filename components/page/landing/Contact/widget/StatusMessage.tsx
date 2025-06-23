import ParagraphBaseRelax from '@/components/utilities/paragraphs/ParagraphBaseRelax';
import { cn } from '@/lib/tailwind/cn';
import { FC } from 'react'

interface Props{
    status: "success" | "error",
    message?: string
}

const StatusMessage: FC<Props> = ({status,message}) => {
    return (message === "" || message === undefined) ? null : (
        <ParagraphBaseRelax 
            className={cn(
                "text-error",
                {
                    "text-error": status === "error",
                    "text-success": status === "success",
                }
            )}
        >
            {`${status}: ${message}`}
        </ParagraphBaseRelax >
    );
};

export default StatusMessage;