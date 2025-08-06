import {ReactNode} from "react";
import {createPortal} from "react-dom";

interface portalProps {
    children: ReactNode;
    container: HTMLElement;
}

export const Portal = (props: portalProps) => {
    const {children, container} = props;

    return (
        <div>
            {createPortal(
                children,
                container
            )}
        </div>
    );
};