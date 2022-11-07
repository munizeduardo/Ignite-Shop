import { styled } from "..";
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    display: 'flex',
    alignItems: 'center',

    width: '3rem',
    height: '3rem',
    padding: 12,
    borderRadius: 6,
    backgroundColor: '$gray800',
    cursor: 'pointer',

    border: 'none',
  }
})

