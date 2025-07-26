import {Theme} from 'App/providers/themeProvider'
import { StoryFn } from '@storybook/react/*';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
}
