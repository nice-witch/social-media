import {classNames} from "Shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "Shared/ui/Button/Button";
import i18n from "i18next";

interface langSwitcherProps {
    className?: string;
}

export const LangSwitcher = (props: langSwitcherProps) => {
    const {className} = props;

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div className={classNames(cls.langSwitcher, {}, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={() => changeLanguage('ru')}>ru</Button>
            <Button theme={ThemeButton.CLEAR} onClick={() => changeLanguage('en')}>en</Button>
        </div>
    );
};