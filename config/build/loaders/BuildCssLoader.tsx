import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: ((resourcePath: string) => resourcePath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : "[hash:base64]",
                    }
                },
            },
            "sass-loader",
        ],
    }
}