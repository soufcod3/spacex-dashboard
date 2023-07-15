import React from 'react'

type BoxProps = {
  title?: string,
  children: React.ReactNode
  className?: string
} 

export const Box = ({ title, className, children }: BoxProps) => {
  return <div className={ `box w-100 p-2 ${className} `}>
  <p className='box-title'>{title}</p>
  <div className="box-body p-2">
    {children}
  </div>
</div>
}