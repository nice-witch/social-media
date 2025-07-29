import {useEffect, useState} from "react";
import {Button} from "Shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

// кнопка для тестирования Error Boundary
export const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);
    useEffect(() => {
        if(error) throw new Error;
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Вызвать ошибку')}
        </Button>
    );
};