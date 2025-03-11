import { User } from './user'

export interface CV {
  user: User
  project: Project[]
  eduction: Education[]
  certificate: Certificate[]
  experience: Experience[]
  reference: Reference[]
}

export interface Project {}

export interface Education {}

export interface Certificate {}

export interface Experience {}

export interface Reference {}
