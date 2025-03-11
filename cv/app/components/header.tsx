import { Link } from "@remix-run/react"

export const Header = () => {
  return (
    <header className="h-20 px-4 w-full flex items-center ">
      <Link to='/' className="text-xl font-semibold">KIM SANG HUN</Link>
    </header>
  )
}