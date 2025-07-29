import {useState} from "react";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "Widgets/ThemeSwitcher";
import {LangSwitcher} from "Widgets/LangSwitcher/LangSwitcher";
import {useTranslation} from "react-i18next";

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
            <button data-testid="sidebar-button" onClick={toggleCollapse}>{ t('Переключить') }</button>
            <div className={cls.buttons}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};