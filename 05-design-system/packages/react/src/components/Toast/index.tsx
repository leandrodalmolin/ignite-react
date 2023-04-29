import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastRoot,
  ToastTitle,
  ToastViewport as RadixToastViewport,
  ToastDescription,
} from './styles'

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = RadixToastViewport

export interface ToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <ToastRoot {...rest}>
      <ToastClose asChild>
        <span aria-hidden>
          <X size={20} />
        </span>
      </ToastClose>
      <ToastTitle>{title}</ToastTitle>
      <ToastDescription>{description}</ToastDescription>
    </ToastRoot>
  )
}

Toast.displayName = 'Toast'
