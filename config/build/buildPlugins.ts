import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins(htmlPath:string): webpack.ProgressPlugin[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: htmlPath,
        }),
    ]
}