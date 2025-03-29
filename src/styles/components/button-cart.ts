import { styled } from "..";

export const ButtonCartContainer = styled('button', {
  position: 'relative',
  width: '3rem',
  height: '3rem',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  color: '$gray400',
  backgroundColor: '$gray800',
  cursor: 'pointer',

  '&::after': {
    position: 'absolute',
    content: 'attr(data-items)',
    top: -12,
    right: -12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '1.5rem',
    height: '1.5rem',
    border: '3px solid $gray900',
    borderRadius: '50%',
    color: '$white',
    backgroundColor: '$green500',
    visibility: 'hidden',
  },

  variants: {
    hasItems: {
      true: {
        '&::after': {
          visibility: 'visible',
        },
      }
    }
  },
})
