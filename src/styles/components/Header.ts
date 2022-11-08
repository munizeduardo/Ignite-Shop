import { styled } from "..";
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const HeaderContainer = styled('header', {
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

export const ToggleCart = styled(DialogPrimitive.Trigger, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    position: 'absolute',
    top: '-15%',
    right: '-15%',
    
    width: '1.125rem',
    height: '1.125rem',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '50%',
    
    backgroundColor: '$green500',
    color: '$gray100',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})