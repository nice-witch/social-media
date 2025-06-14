import {classNames} from "Shared/lib/classNames/classNames";
import {MyLink} from "Shared/ui/MyLink/MyLink";
import cls from './Navbar.module.scss';
import {ThemeSwitcher} from "Widgets/ThemeSwitcher";

interface navbarProps {
    className?: string;
}

export const Navbar = ({className}: navbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={classNames(cls.linkContainer)}>
                <MyLink to="/">Главная</MyLink>
                <MyLink to="/about">О нас</MyLink>
            </div>
        </div>
    );
};