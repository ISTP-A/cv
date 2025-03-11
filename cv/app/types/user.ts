type TypeSNS = 'intargram' | 'github' | 'facebook' | 'etc'

export interface User {
  name: string
  en_name: string
  introduction: string
  birth: Date
  phone: string
  email: string
  sns: SNS[]
}

export interface SNS {
  type: TypeSNS
  name: string
  link: string
  order?: number
}
