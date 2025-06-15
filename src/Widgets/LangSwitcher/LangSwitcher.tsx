import {classNames} from "Shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {Button} from "Shared/ui/Button/Button";
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
            <Button onClick={() => changeLanguage('ru')}>ru</Button>
            <Button onClick={() => changeLanguage('en')}>en</Button>
        </div>
    );
};