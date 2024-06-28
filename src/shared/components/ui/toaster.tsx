"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/shared/components/ui/toast"
import { useToast } from "@/shared/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, classNameTitle, classNameDescription, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className={`grid gap-1`}>
              {title && <ToastTitle className={`${classNameTitle}`}>{title}</ToastTitle>}
              {description && (
                <ToastDescription className={`${classNameDescription}`}>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
