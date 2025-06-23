



import { CSSProperties, FC, RefObject, useImperativeHandle, useRef } from 'react'
import { cn } from '../tailwind/cn';

type SplitTextMode = "words" | "characters";
interface Props{
    text: string,
    splitTextMode?: SplitTextMode,
    style?: CSSProperties,
    className?: string,
    ref?: RefObject<(HTMLSpanElement | null)[][]>
}

const SplitText: FC<Props> = ({text,splitTextMode = "words",style,className,ref}) => {

    const splitWord = text.split(/\s+/g);
    const characterRefs = useRef<(HTMLSpanElement | null)[][]>([[]]);
    useImperativeHandle(ref, () => characterRefs.current, []);
    return (
        <>
            {
                splitWord.map((word, i) => {

                    return (
                        <span className='' key={`words-${word}-${i}`}>
                            { characterRefs.current[i] = [] }
                            {
                                splitTextMode === "characters" ? (
                                    word.split("").map((character,index) => {
                                        return (
                                            <span
                                                key={`${word}-${character}-${index}`}
                                                className={
                                                    cn(
                                                        "inline",
                                                        className
                                                    )
                                                }
                                                style={style}    
                                                ref={el => {characterRefs.current[i][index] = el}}
                                            >
                                                {character}
                                            </span>
                                        )
                                    })
                                ) : (
                                    <span 
                                        ref={el => {characterRefs.current[0][i] = el}}
                                        className={
                                            cn(
                                                "inline-block whitespace-pre-wrap break-keep",
                                                className
                                            )
                                        }
                                        style={style}  
                                    >
                                        {word}
                                    </span>
                                )
                        
                            }
                            {`${i !== splitWord.length - 1 ? '\u0020' : ""}`}
                        </span>
                    )
                }) 
            }
        </>
    );
};

export default SplitText;