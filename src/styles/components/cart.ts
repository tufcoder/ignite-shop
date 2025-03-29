import { styled } from ".."

export const CartContainer = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,
  minHeight: '100vh',
  width: 480,
  height: 900,
  padding: '3rem',
  paddingBlockStart: '2rem',
  backgroundColor: '$gray800',

  header: {
    textAlign: 'right',

    button: {
      border: 'none',
      color: '$gray400',
      background: 'none',
      cursor: 'pointer',
    },
  },

  h2: {
    fontSize: '$lg',
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray100',
  },
})

export const CartProductsWrapper = styled('div', {
  height: 580,
  overflowY: 'auto',
})

export const CartProductsContainer = styled('div', {
  display: "flex",
  flexDirection: 'column',
  gap: '1.5rem',
  marginBlockStart: '2rem',
})

export const CartProductItem = styled('div', {
  display: "flex",
  gap: '1.25rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "space-between",

    p: {
      fontSize: '$md',
      fontWeight:'normal',
      lineHeight: 1.6,
      color: '$gray100',
    },

    strong: {
      fontSize: '$md',
      fontWeight:'bold',
      lineHeight: 1.6,
      color: '$gray100',
    },

    button: {
      border: 0,
      color: '$green500',
      background: "none",
      cursor: 'pointer',
    },
  },

})

export const CartImageContainer = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 101,
  height: 93,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: "cover",
  },
})

export const CartFooter = styled('footer', {
  position: 'absolute',
  bottom: '3rem',
  width: 'calc(100% - 6rem)',
  display: "flex",
  flexDirection: 'column',

  'p, strong': {
    display: "flex",
    justifyContent: "space-between",
  },

  p: {
    lineHeight: 1.6,

    span: {
      fontSize: '$md',
    },
  },

  strong: {
    fontSize: '$md',

    span: {
      fontSize: '$xl',
      lineHeight: 1.4,
    },
  },

  button: {
    marginBlockStart: '4rem',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$white',
    cursor: 'pointer',
    backgroundColor: '$green500',
    transition: 'background-color 0.3s ease',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})
