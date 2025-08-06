import {ReactNode, MouseEvent, useEffect, useCallback} from "react";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {Portal} from "Shared/ui/Portal/Portal";

interface modalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: modalProps) => {
    const {
        children,
        isOpen,
        onClose,
    } = props;
    const elemModalPortal = document.getElementById('modal-root');

    const handlerContent = (e: MouseEvent) => e.stopPropagation();
    const handlerClosed = () => {
        onClose();
    };
    const onKeyEscape = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            onClose();
        }
    },[onClose])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyEscape)
        }

        return () => {
            window.removeEventListener('keydown', onKeyEscape)
        }
    }, [isOpen, onKeyEscape]);

    return (
        <Portal container={elemModalPortal}>
            <div
                className={classNames(cls.modal, {[cls.open]: isOpen, [cls.close]: !isOpen}, [])}
                onClick={handlerClosed}
            >
                <div
                    className={cls.content}
                    onClick={handlerContent}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};