import { type AUTO_LANGUAGES, type SUPPORTED_LANGUAGED } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGED
export type AutoLanguage = typeof AUTO_LANGUAGES
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage : FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export enum SectionType {
  // eslint-disable-next-line no-unused-vars
  From = 'from',
  // eslint-disable-next-line no-unused-vars
  To = 'to'
}

export type Action =
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'INTERCHANGE_LANGUAGES' }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
