import React, { type ReactNode } from "react"
import "./Button.css"

type ButtonProps = {
  children: ReactNode
  className?: string
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-white font-semibold text-blue-950 py-3 px-8 text-4xl btn ${className}`}
    >
      {children}
    </button>
  )
}
