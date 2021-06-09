import React, { useState } from "react";

export interface TextAreaProps {
    label: string;
    className: string;
    maxLength: number;
}

export const TextArea = ({ label, className, maxLength }: TextAreaProps) => {
    const [currentTextLength, setCurrentTextLength] = useState(0);
    const [isFocused, setFocused] = useState(false)

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentTextLength(event.currentTarget.value.length);
    }
    return (
        <div className={className}>
            <div className={`font-bold h-6 mt-3 leading-8 font-ceraProRegular ${isFocused ? 'text-mainBlue' : 'text-gray-400'}`}> { label }</div>

            <textarea
                 className="w-full py-2 resize-none rounded-lg focus:outline-none"
                 maxLength={maxLength}
                 onChange={handleTextChange}
                 onFocus={() => setFocused(true)}
                 onBlur={() => setFocused(false)}
            >
        </textarea>
            <p className="text-right text-gray-400"> { currentTextLength} / { maxLength }  </p>
        </div>
    )
}