import { keyframes, styled } from '../../styles'
import * as ToastPrimitive from '@radix-ui/react-toast'

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100%))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(calc(100%))' },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: '$80',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  gap: '$3',
  listStyle: 'none',
  outline: 'none',

  '&:focus': {
    boxShadow: '0 0 0',
    outline: 'none',
  },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  position: 'relative',
  display: 'grid',
  gridGap: '$1',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  margin: '0 $5 $5 $5',
  padding: '$3 $12 $3 $5',
  backgroundColor: '$gray800',

  '&:not(:last-child)': {
    marginBottom: '$1',
  },

  "&[data-state='open']": {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  "&[data-state='closed']": {
    animation: `${hide} 100ms ease-in`,
  },

  "&[data-swipe='move']": {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },

  "&[data-swipe='cancel']": {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },

  "&[data-swipe='end']": {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(ToastPrimitive.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  border: 0,
  color: '$gray200',
  backgroundColor: 'transparent',
  transition: 'color 150ms',
  cursor: 'pointer',

  svg: {
    display: 'block',
  },

  '&:hover': {
    color: '$gray100',
  },
})
