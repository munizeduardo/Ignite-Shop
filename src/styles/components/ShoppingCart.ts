import { styled } from "..";
import * as DialogPrimitive from '@radix-ui/react-dialog'

export const CartContainer = styled(DialogPrimitive.Content, {
  display: 'flex',
  flexDirection: 'column',
  right: 0,
  height: '100%',
  width: 480,
  padding: '2.5rem',
  backgroundColor: '$gray800',
  position: 'absolute',

  h2: {
    marginBottom: '2rem',
  }
})

export const CartItemsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: 'auto',
})

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  height: 94,
})

export const CartItemIconContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: 102,
  height: 94,
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '160%',

  span: {
    fontSize: '$md',
    color: '$gray300',
  },

  '.itemQuantity': {
    fontSize: '12px'
  },

  strong: {
    marginBottom: 2,
    fontSize: '$md',
    color: '$gray100',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '16px',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CloseCart = styled(DialogPrimitive.Close, {
  all: 'unset',
  cursor: 'pointer',
  position: 'absolute',

  right: 24,
  top: 24,

  svg: {
    color: '$gray300',
  }
})

export const ConfirmDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',

    '.quantityText': {
      fontSize: '16px',
    },
    '.quantity': {
      fontSize: '$md',
    },
    '.priceText': {
      fontSize: '$md',
    },
    '.price': {
      fontSize: '$xl',
    },
  },

  button: {
    marginTop: 55,
    height: '70px',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green300',
    }
  }
})