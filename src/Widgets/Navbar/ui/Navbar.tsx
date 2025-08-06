import {useState} from "react";
import {useTranslation} from "react-i18next";
import {classNames} from "Shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {Button, ThemeButton} from "Shared/ui/Button/Button";
import {Modal} from "Shared/ui/Modal/Modal";

interface navbarProps {
    className?: string;
}

export const Navbar = ({className}: navbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setAuthOpen] = useState(false);

    const onCloseAuthModal = () => setAuthOpen(false);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={() => setAuthOpen(true)}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthOpen} onClose={onCloseAuthModal}>
                <p>{t('Войти')}</p>
            </Modal>
        </div>
    );
};