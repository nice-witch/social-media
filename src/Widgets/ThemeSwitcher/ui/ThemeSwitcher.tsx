import {Theme, useTheme} from "App/providers/themeProvider";
import {Button, ThemeButton} from "Shared/ui/Button/Button";
import ThemeDark from "Shared/assets/icons/moon.svg";
import ThemeLight from "Shared/assets/icons/sunny.svg";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
};