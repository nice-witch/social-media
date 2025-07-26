import 'App/styles/index.scss';
import { FC } from 'react';
import {BrowserRouter} from 'react-router-dom';

export const RouteDecorator: FC = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};