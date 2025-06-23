import { cn } from '@/lib/tailwind/cn';
import { CSSProperties, FC, MouseEventHandler, Ref } from 'react'

interface Props{
    children?: string,
    className?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLButtonElement> | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const RoundedButton: FC<Props> = ({children, ref, className, style, onClick}) => {
    return (
        <button
            onClick={onClick}
            ref={ref}
            className={cn(
                `
                    px-6 py-3                          // Desktop default
                    lg:px-5 lg:py-2.5                  // Tablets: slightly smaller
                    md:px-4 md:py-2                    // Small tablets: smaller
                    sm:px-4 sm:py-2                    // Mobile: same as small tablets
                    xs:px-3 xs:py-1.5                  // Very small screens: smallest
                    
                    rounded-[20px]                     // Desktop default
                    lg:rounded-[18px]                  // Tablets: slightly smaller radius
                    md:rounded-[16px]                  // Small tablets: smaller radius
                    sm:rounded-[16px]                  // Mobile: same as small tablets
                    xs:rounded-[14px]                  // Very small screens: smallest radius
                    
                    bg-surface-light
                    text-primary

                    font-elza
                    font-medium
                    text-[16px]                        // Desktop default
                    lg:text-[15px]                     // Tablets: slightly smaller
                    md:text-[14px]                     // Small tablets: smaller
                    sm:text-[14px]                     // Mobile: same as small tablets
                    xs:text-[13px]                     // Very small screens: smallest
                    
                    leading-[1]
                    cursor-pointer
                    active:scale-90
                    
                    // Touch-friendly sizing on mobile
                    sm:min-h-[44px]                    // Minimum touch target size on mobile
                    xs:min-h-[40px]                    // Slightly smaller on very small screens
                    
                    // Better touch interaction
                    transition-transform duration-150 ease-out
                    touch:active:scale-95              // Different scale for touch devices
                    mouse:hover:scale-105              // Hover effect only for mouse users
                `,
                className
            )}
            style={style}
        >
            {children}
        </button>
    );
};

export default RoundedButton;