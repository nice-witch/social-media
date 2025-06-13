import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './MyLink.module.scss';

export enum ThemeLink {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface myLinkProps extends LinkProps {
    className?: string;
    theme?: ThemeLink;
}

export const MyLink: FC<myLinkProps> = (props) => {
    const {
        to,
        className,
        theme = ThemeLink.PRIMARY,
        children
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.myLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};