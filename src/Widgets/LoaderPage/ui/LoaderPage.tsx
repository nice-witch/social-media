import {classNames} from "Shared/lib/classNames/classNames";
import cls from './LoaderPage.module.scss';

interface loaderPageProps {
    className?: string;
}

export const LoaderPage = (props: loaderPageProps) => {
    const {className} = props;
    
    return (
        <div className={classNames(cls.loaderPage, {}, [className])}>
            <span className={cls.loader}></span>
        </div>
    );
};