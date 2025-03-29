import { styled } from "..";

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  maxWidth: 1180,
  width: '100%',
  margin: '0 auto',
  padding: '2rem 0',
})
