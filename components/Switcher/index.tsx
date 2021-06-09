import React, { useState} from "react";
import {SwitcherOption, SwitcherOptionProps} from "./SwitcherOption";
import {ISwitcherElementInstances} from "../../Interfaces";

export interface SwitcherProps {
    alterParentState: any;
    currentState: any; //TODO remove any
    switcher: {
        switcherStyling: string;
        elementInstances: ISwitcherElementInstances[];
    }
}

export const Switcher = ({ alterParentState, currentState, switcher }: SwitcherProps) => {
    const { elementInstances, switcherStyling } = switcher;
    const focusOnButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        if ((event.target as HTMLButtonElement).getAttribute("name") === 'standard') {
            alterParentState({ left: true });
        }
        else {
            alterParentState({ left: false });
        }
    }

    return (
            <div className={switcherStyling}>
                {elementInstances.map((option, index) => {
                    return (
                        <SwitcherOption {...option as SwitcherOptionProps} currentState={currentState} focusOnButton={focusOnButton} />
                    )
                })
                }
            </div>
    )
}