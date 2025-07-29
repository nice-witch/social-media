import {Theme} from 'App/providers/themeProvider'
import { StoryFn } from '@storybook/react/*';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}
