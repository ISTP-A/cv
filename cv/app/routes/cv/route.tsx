import { MetaFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { CVContent, CVItem, CVLabel } from "~/components/cv"
import { mock_cv } from "~/mocks/cv"
import { type CV } from "~/types/cv"
import { format_date } from "~/utils/format"

export const meta: MetaFunction = () => {
  return [
    { title: "KIM SANG HUN" },
    { name: "description", content: "프론트엔드 개발자 김상훈입니다" },
  ]
}

const styles = {
  section: "space-y-2"
}

export const loader = async () => {
  return Response.json(mock_cv)
}

export default function CV() {
  const cv: CV = useLoaderData<typeof loader>()


  return (
    <div className="w-fit mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-extrabold text-center">CV</h1>
      <div className="w-20 mx-auto border-b-2 border-b-black" />
      <div className="space-y-12">
        <section className={styles.section}>
          <CVItem>
            <CVLabel>name</CVLabel>
            <CVContent>{cv.user.name} {cv.user.en_name}</CVContent>
          </CVItem>
          <CVItem>
            <CVLabel>introduction</CVLabel>
            <CVContent>{cv.user.introduction}</CVContent>
          </CVItem>
        </section>
        <section className={styles.section}>
          <CVItem>
            <CVLabel>DOB</CVLabel>
            <CVContent>{format_date(cv.user.birth)}</CVContent>
          </CVItem>
          <CVItem>
            <CVLabel>e-mail</CVLabel>
            <CVContent>{cv.user.email}</CVContent>
          </CVItem>
          <CVItem>
            <CVLabel>phone number</CVLabel>
            <CVContent>{cv.user.phone}</CVContent>
          </CVItem>
        </section>

        <section className={styles.section}>
          <CVItem>
            <CVLabel>SNS</CVLabel>
            <CVContent>
              <ul className="space-y-4">
                {cv.user.sns.map(item => (
                  <li key={item.type}>
                    <h6 className="font-semibold text-black">{item.type}</h6>
                    <a
                      href={item.link}
                      className="hover:underline"
                      rel="noopenner noreferrer"
                      target='_blank'
                    >
                      {item.link}
                    </a>
                  </li>
                ))}
              </ul>
            </CVContent>
          </CVItem>
        </section>
      </div>
    </div>
  )
}