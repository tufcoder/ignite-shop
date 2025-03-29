import { styled } from "@stitches/react";

export const SuccessContainer = styled('main', {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: 656,
  margin: '0 auto',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: 560,
    marginBlockStart: '2rem',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: "center",
    color: '$gray300',
  },

  a: {
    display: "block",
    marginBlockStart: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',
    transition: 'color 0.3s ease',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 145,
  width: 140,
  marginBlockStart: '4rem',
  marginInlineStart: '-2rem',
  borderRadius: '50%',
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea4b3 0%, #7465d4 100%)',
  boxShadow: '-1px 1px 8px rgba(0, 0, 0, 0.3)',

  img: {
    objectFit: "cover",
  },
})

export const ProductsContainer = styled('div', {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  marginBlockEnd: '4rem',
})
