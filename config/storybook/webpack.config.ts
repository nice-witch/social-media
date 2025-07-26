import webpack, { RuleSetRule } from "webpack";
import path from "path";
import {BuildPaths} from "../build/types/config";
import {buildCssLoader} from '../build/loaders/BuildCssLoader';

export default ({config} : {config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        output: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule && typeof rule === "object" && "type" in rule && rule.type === "asset/resource") {
            return {
                ...rule,
                test: new RegExp(
                    rule.test!.toString().replace("svg|", "").slice(1, -1)
                ),
            };
        } else {
            return rule;
        }
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));

    return config;
}