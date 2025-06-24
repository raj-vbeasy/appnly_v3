import React,{FC, useEffect,useState} from 'react'

import { motion, steps } from "framer-motion"
interface Props{
    text: string | string[],
    onAnimationEnd?: () => void,
    typingSpeed?: number,
    beforeNextLineDelay?: number,
    startingDelay?: number,
    infinite?: boolean,
    defaultText?: string
}

const textAnimation = (
    text: string,
    typingSpeed: number,
    delay: number,
    setText: React.Dispatch<React.SetStateAction<string>>,
    currentTextOutput: string
) => {
    const animationend = new Promise<void>((resolve) => {
        const chars = text.split('');
        
        const currentChars: string[] = currentTextOutput.split('');//store   
        let charsIndex = currentChars.length > 0 ? currentChars.length : 0;

        const timer = setInterval(() => {
    
            if(charsIndex > chars.length){
                setTimeout(() => {
                
                
                    const deleteText = setInterval(() => {
                    
                        if(currentChars.length == 0){

                            
                
                            resolve();
                
                            clearInterval(deleteText);
                        }
                        currentChars.pop();
                        setText(currentChars.join(''));
                    },typingSpeed / 2)

                },delay);

                clearInterval(timer);

                
                return
            }//stop it when the animation is finished
    
            currentChars.push(chars[charsIndex]);
            setText(currentChars.join(''));
            charsIndex++;
            
        }, typingSpeed);//every 115ms push a word into currentChars then combine to string and output
    })
    return animationend
    
}

const TypingWriter: FC<Props> = ({
    text:textProps,
    onAnimationEnd = () => {},
    typingSpeed = 115,
    beforeNextLineDelay = 500,
    startingDelay = 0,
    infinite = true, 
    defaultText = ""
}) => {

    const [textOutput,setTextOutput] = useState(defaultText);
    const [currentTextIndex,setCurrentTextIndex] = useState(0);
    const [startDelay,setStartDelay] = useState(startingDelay);

    useEffect(() => {
        const currentText = Array.isArray(textProps) ? textProps[currentTextIndex] : textProps;
        
        const timeout = setTimeout(() => {
            textAnimation(currentText, typingSpeed, beforeNextLineDelay, setTextOutput, textOutput).then(() => {
                setStartDelay(0);

                if (Array.isArray(textProps) && currentTextIndex < textProps.length - 1) {
                    setCurrentTextIndex(currentTextIndex + 1);
                } else if (Array.isArray(textProps) && currentTextIndex === textProps.length - 1) {
                    if (infinite) {
                        setCurrentTextIndex(0);
                    }
                    if (onAnimationEnd) {
                        onAnimationEnd();
                    }
                }
            });
        }, startDelay);

        return () => clearTimeout(timeout);
    }, [currentTextIndex]);





    return(
        <motion.div 
            className="inline-block" 
            style={{borderRightStyle: "solid",borderRightWidth: "3px"}}
            initial={{
                borderRightColor: "rgba(255, 255, 255, 0.75)"
            }}
            animate={{
                borderRightColor: "rgba(255, 255, 255, 0)"
            }}
            transition={{
                ease: steps(40),
                duration: 0.75,
                repeat: Infinity
            }}
        >
            {textOutput}
        </motion.div>
        
    )
}



export default TypingWriter