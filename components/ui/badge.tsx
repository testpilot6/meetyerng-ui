import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-900 text-white hover:bg-primary-950",
        secondary: "border-transparent bg-neutral-100 text-text-primary hover:bg-neutral-200",
        destructive: "border-transparent bg-error text-white hover:bg-error-dark",
        outline: "border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white",
        accent: "border-transparent bg-accent-400 text-white hover:bg-accent-500",
        success: "border-transparent bg-success text-white hover:bg-success-dark",
        warning: "border-transparent bg-warning text-white hover:bg-warning-dark",
        info: "border-transparent bg-info text-white hover:bg-info-dark",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }