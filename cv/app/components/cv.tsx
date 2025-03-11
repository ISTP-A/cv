import { PropsWithChildren } from "react"

export const CVLabel = ({ children }: PropsWithChildren) => {
  return <h4 className="w-[200px] px-4 text-right border-r uppercase font-semibold">{children}</h4>
}

export const CVContent = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-4 px-4 text-black/80">{children}</div>
}

export const CVItem = ({ children }: PropsWithChildren) => {
  return <section className="flex">{children}</section>
}