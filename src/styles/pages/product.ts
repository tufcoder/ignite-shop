import { styled } from "@stitches/react";

export const ProductNavigation = styled('nav', {
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',

  a: {
    display: 'flex',
    alignItems: 'center',
    color: '$white',
  },
})

export const ProductContainer = styled('main', {
  display: "grid",
  gridTemplateColumns: '1fr 1fr',
  alignItems: "stretch",
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: '100%',
  height: 656,
  maxWidth: 576,
  borderRadius: 8,
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: "cover",
  },
})

export const ProductDetails = styled('div', {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    display: "block",
    marginBlockStart: '1rem',
    fontSize: '$2xl',
    color: '$green300',
  },

  textarea: {
    height: '100%',
    marginBlockStart: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    cursor: 'text',
    border: 'none',
    resize: 'none',
    outline: "none",
    whiteSpace: 'pre-wrap',
    font: 'inherit',
    background: 'inherit',
  },

  button: {
    marginBlockStart: 'auto',
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
