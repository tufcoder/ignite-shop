import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',

    'webkit-font-smoothing': 'antialiased',
    'moz-osx-font-smoothing': 'grayscale',
  },

  'body, input, textare, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  img: {
    maxWidth: '100%',
    height: "auto",
  },
})
