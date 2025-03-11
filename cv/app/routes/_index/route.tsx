import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { ArrowRight } from "~/components/icon/arrow"

export const meta: MetaFunction = () => {
  return [
    { title: "KIM SANG HUN" },
    { name: "description", content: "프론트엔드 개발자 김상훈입니다" },
  ]
}

export default function Home() {
  return (
    <div className='w-full px-4'>
      <figure className="w-full h-svh flex flex-col gap-4 justify-center ">
        <h2 className="text-3xl font-extrabold leading-10">WEB Front-end<wbr /> Developer</h2>
        <Link to='/cv' className="flex items-center text-black/80 hover:underline">Show Portfolio <ArrowRight /></Link>
      </figure>
      <section>
        <h4 className="text-2xl font-semibold">How did you get here?</h4>

      </section>
    </div>
  )
}