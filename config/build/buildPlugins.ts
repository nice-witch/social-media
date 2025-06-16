import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(htmlPath:string, isDev: boolean): webpack.ProgressPlugin[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: htmlPath,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        isDev && (new ReactRefreshPlugin()),
        isDev && (new webpack.HotModuleReplacementPlugin()),
    ]
}