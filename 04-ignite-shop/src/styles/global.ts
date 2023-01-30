import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
    },

    body: {
        color: '$gray100',
        backgroundColor: '$gray900',
        '-webkit-font-smoothing': 'antialised',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400
    }
})