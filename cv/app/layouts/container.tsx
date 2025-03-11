import { PropsWithChildren } from "react"

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4">
      {children}
    </div>
  )
}