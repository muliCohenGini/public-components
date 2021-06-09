import React from "react";

export interface SwitcherOptionProps {
    focusOnButton: any; //TODO remove any
    currentState: any;
    className: string;
    content: string;
    nameProperty: string;
    defaultState: string;
    changedState: string;
}

export const SwitcherOption = ({ focusOnButton, currentState, className, content, nameProperty, defaultState, changedState }: SwitcherOptionProps) => {
    return (
        <button onClick={focusOnButton} className={`${className} ${currentState.left ? defaultState : changedState }`} name={ nameProperty }>{ content }</button>
    )
}