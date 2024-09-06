"use client"

import { motion, MotionProps } from "framer-motion"
import React from "react"

interface CustomMotionProps<Tag extends keyof JSX.IntrinsicElements>
  extends MotionProps {
  type?: Tag
  children: React.ReactNode
  className?: string
}

export const Motion = <Tag extends keyof JSX.IntrinsicElements>({
  type,
  children,
  className,

  ...props
}: CustomMotionProps<Tag>) => {
  const Component = type ? (motion as any)[type] : motion.div

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
