export type GradientDirection = "top" | "bottom" | "left" | "right";

const generateMask = (strips: number = 30, gradientDirection: GradientDirection = "left") => {
    const progressMap: number[] = [...(new Array(strips).fill(0))]
    const howManyStrips = strips;

    const stripHeight = 100 / howManyStrips;
    const resetProgressMap = () => {
        progressMap.map(() => 0)
    }
    const generateMaskImageString = (_progressMap: number[]) => {
        let maskImageString = `linear-gradient(to ${gradientDirection},`;
        for(let i = 0; i < (howManyStrips); i++){ 

            const firstPosition = i * stripHeight; 
            const secondPosition =  Math.min((i + 1) * stripHeight, 100);
            const positionOffset = (secondPosition - firstPosition) * _progressMap[i];

            maskImageString += `rgba(0,0,0,1) ${firstPosition}% ${secondPosition - positionOffset}%,`;
            maskImageString += `rgba(255,255,255,0) ${secondPosition - positionOffset}% ${secondPosition}%,`
    
        }
        let removeTheLastComma = maskImageString.slice(0, -1);
        removeTheLastComma += `)`;
        return removeTheLastComma
    }


    const updateProgressMap = ({
        currentTime,
        startTime,
        duration = 500,
        stagger = 0,
        easingFunction = (t: number) => t
        
    }:{
        currentTime: number,
        startTime: number,
        duration?: number,
        stagger?: number | undefined,
        easingFunction?: (t: number) => number
    }) => {
        const _progressMap = progressMap;
        for(let i = 0; i < strips; i++){ 
            
            const stripDuration = duration;
            const stripStartTime = stagger !== 0 ? stagger * i + startTime : stripDuration * i + startTime;
            const stripEndTime = stripDuration + stripStartTime;

            const current = Math.max(Math.min(currentTime,stripEndTime), stripStartTime);
            const stripElapsedTime = Math.min(Math.max(current - stripStartTime, 0), stripDuration);
            const stripProgress = Math.max(Math.min((stripElapsedTime) / stripDuration, 1), 0);
            _progressMap[i] = easingFunction(stripProgress);
        }
        return generateMaskImageString(_progressMap)
    }
    const updateProgressMapByProgress = ({
        progress,
        stagger = 0,
        easingFunction = (t: number) => t
    }:{
        progress: number,
        stagger?: number | undefined,
        easingFunction?: (t: number) => number
    }) => {
        const _progressMap = progressMap;
        if(1 - strips * stagger < 0.005 && stagger !== 0){
            console.warn("Stagger is too high, it will not work as expected")
            return
        }
        for(let i = 0; i < strips; i++){ 
            
        
            const stripDuration = stagger !== 0 ? 1 - strips * stagger : 1 / strips ;
            const stripStartTime = Math.round( ( ( stagger !== 0 ? ( i * stagger ) : ( stripDuration * i ) )  ) * 100000) / 100000 ;
            const stripEndTime = Math.round( ( stripDuration + stripStartTime ) * 100000) / 100000;

            let stripProgress = 0;
            if(progress > stripStartTime){
                stripProgress = Math.min(progress / stripEndTime, 1);
            }
            _progressMap[i] = easingFunction(stripProgress);
            
        }

        return generateMaskImageString(_progressMap)
    }
    return {
        maskImageString: generateMaskImageString([...(new Array(strips).fill(0))]),
        updateProgressMap,
        updateProgressMapByProgress,
        resetProgressMap
    }
    
}   
type GenerateBlindsEffectMask = (stripCount: number) => {
    maskImageString: string;
    updateProgressMap:  UpdateProgressMap;
    updateProgressMapByProgress: UpdateProgressMapByProgress ;
    resetProgressMap: ResetProgressMap;
}
type UpdateProgressMap = ({ currentTime, startTime, duration, stagger, easingFunction }: {
    currentTime: number;
    startTime: number;
    duration?: number;
    stagger?: number | undefined;
    easingFunction?: (t: number) => number;
}) => string | undefined;

type UpdateProgressMapByProgress = ({ progress, stagger, easingFunction }: {
    progress: number;
    stagger?: number | undefined;
    easingFunction?: (t: number) => number;
}) => string | undefined;

type ResetProgressMap = () => void;
export { generateMask }
export type { GenerateBlindsEffectMask, UpdateProgressMap, UpdateProgressMapByProgress,  ResetProgressMap}
