import {useState} from "react";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "Widgets/ThemeSwitcher";

interface sidebarProps {
    className?: string;
}

export const Sidebar = (props: sidebarProps) => {
    const {
        className,
    } = props;

    const [collapse, setCollapse] = useState(false);
    const toggleCollapse = () => setCollapse(!collapse);

    return (
        <div className={classNames(cls.sidebar, {[cls.collapse]: collapse}, [className])}>
            <button onClick={toggleCollapse}>tog</button>
            <div className={cls.buttons}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};