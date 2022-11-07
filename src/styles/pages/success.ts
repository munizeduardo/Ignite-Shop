import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    lineHeight: 1.4,
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
  },
  
  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '$green500',

    '&:hover': {
      color: '$green300',
    }
  },
})

export const ImagesWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '-50px',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  marginBottom: '3rem',
  marginRight: '-50px',
  position: 'relative',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const QuantityTooltip = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  width: '1rem',
  height: '1rem',
  fontSize: '12px',
  borderRadius: '50%',
  
  backgroundColor: '$green500',
  color: '$gray100',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

  position: 'absolute',
  bottom: 0,
  left: '22%',

  cursor: 'default',
})