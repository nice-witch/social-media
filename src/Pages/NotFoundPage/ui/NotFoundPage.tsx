import {useTranslation} from "react-i18next";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';

interface notFoundPageProps {
    className?: string;
}

export const NotFoundPage = (props: notFoundPageProps) => {
    const {t} = useTranslation();

    const {className} = props;
    
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            <p>{t('Страница не найдена')}</p>
        </div>
    );
};