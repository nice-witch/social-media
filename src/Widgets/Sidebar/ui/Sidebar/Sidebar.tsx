import {useState} from "react";
import {useTranslation} from "react-i18next";
import cls from './Sidebar.module.scss';
import Home from 'Shared/assets/icons/home.svg';
import About from 'Shared/assets/icons/about.svg';

import {pagesPath} from 'Shared/config/RouteConfig';
import {ThemeSwitcher} from "Widgets/ThemeSwitcher";
import {LangSwitcher} from "Widgets/LangSwitcher/LangSwitcher";
import {MyLink} from "Shared/ui/MyLink/MyLink";
import {classNames} from "Shared/lib/classNames/classNames";
import {Button, SizeButton, ThemeButton} from "Shared/ui/Button/Button";

interface sidebarProps {
    className?: string;
}

export const Sidebar = (props: sidebarProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const [collapse, setCollapse] = useState(false);
    const toggleCollapse = () => setCollapse(!collapse);

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, {[cls.collapse]: collapse}, [className])}>
            <Button
                data-testid="sidebar-button"
                theme={ThemeButton.BACKGROUND}
                square={true}
                size={SizeButton.XL}
                onClick={toggleCollapse}
                className={cls.buttonCollapse}
            >
                {collapse ? '>' : '<'}
            </Button>

            <div className={cls.navigation}>
                <MyLink
                    to={pagesPath.main}
                    className={cls.item}
                >
                    <Home />
                    <span className={cls.itemText}>
                        {t('Главная')}
                    </span>
                </MyLink>
                <MyLink
                    to={pagesPath.about}
                    className={cls.item}
                >
                    <About />
                    <span className={cls.itemText}>
                        {t('О сайте')}
                    </span>
                </MyLink>
            </div>

            <div className={cls.buttons}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};