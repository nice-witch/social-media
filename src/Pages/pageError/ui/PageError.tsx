import {classNames} from "Shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "Shared/ui/Button/Button";

export const PageError = () => {
    const {t} = useTranslation();

    const reload = () => {
        location.reload();
    }
    return (
        <div className={classNames(cls.pageError)}>
            <p>{t('Произошла какая-то ошибка')}</p>
            <Button onClick={reload}>
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};