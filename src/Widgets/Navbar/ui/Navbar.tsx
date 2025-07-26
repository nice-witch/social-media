import {classNames} from "Shared/lib/classNames/classNames";
import {MyLink} from "Shared/ui/MyLink/MyLink";
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface navbarProps {
    className?: string;
}

export const Navbar = ({className}: navbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.linkContainer)}>
                <MyLink to="/">{t('Главная')}</MyLink>
                <MyLink to="/about">{t('О сайте')}</MyLink>
            </div>
        </div>
    );
};