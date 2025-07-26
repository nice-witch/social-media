import webpack from "webpack";
import {buildCssLoader} from './loaders/BuildCssLoader'
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions):webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        typeScriptLoader,
        styleLoader,
        svgLoader,
        fileLoader,
    ]
}