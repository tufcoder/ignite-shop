import { styled } from "..";

export const ProductContainer = styled('article', {
  position: 'relative',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 540,
  borderRadius: 8,
  cursor: 'pointer',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  overflow: "hidden",

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    padding: '1.25rem',
    paddingInlineEnd: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    opacity: 0,
    transform: 'translateY(110%)',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      cursor: 'auto',
    },

    p: {
      display: 'flex',
      flexDirection: 'column',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    button: {
      border: 0,
      borderRadius: 6,
      padding: '0.75rem',
      color: '$white',
      backgroundColor: '$green500',
      cursor: 'pointer',

      '&:disabled': {
        opacity: 0.8,
        cursor: 'not-allowed',
      },
    },
  },
})
