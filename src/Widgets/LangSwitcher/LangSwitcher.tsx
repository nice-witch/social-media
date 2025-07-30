import {classNames} from "Shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {Button, ThemeButton} from "Shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface langSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};