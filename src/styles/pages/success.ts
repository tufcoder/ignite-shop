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
    color: '$gray300',
  },

  a: {
    display: "block",
    marginBlockStart: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',
  },
})

export const ImageContainer = styled('div', {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: '100%',
  height: 145,
  maxWidth: 130,
  marginBlockStart: '4rem',
  borderRadius: 8,
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea4b3 0%, #7465d4 100%)',

  img: {
    objectFit: "cover",
  },
})
