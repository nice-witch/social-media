import React from 'react';
import {useTranslation} from "react-i18next";
import {BugButton} from "App/providers/errorBoundaries";

function MainPage() {
    const {t} = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}
            <BugButton />
        </div>
    );
}

export default MainPage;