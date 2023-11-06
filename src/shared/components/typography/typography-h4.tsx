import { FC, PropsWithChildren } from 'react'

const TypographyH3: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export default TypographyH3
