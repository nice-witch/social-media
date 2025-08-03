import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
}

export enum SizeButton {
    M = 'buttonM',
    L = 'buttonL',
    XL = 'buttonXL',
}

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    size?: SizeButton;
    square?: boolean;
}

export const Button: FC<buttonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {[cls.square]: square}, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};