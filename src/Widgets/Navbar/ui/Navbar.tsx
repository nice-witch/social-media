import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface navbarProps {
    className?: string;
}

export const Navbar = ({className}: navbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.linkContainer)}>
                /
            </div>
        </div>
    );
};