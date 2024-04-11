import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'
import { SUPPORTED_LANGUAGED } from '../constants'
import { FromLanguage, Language } from '../types'

const apikey = import.meta.env.VITE_APIKEY

const configuration = new Configuration(apikey)
const openai = new OpenAIApi(configuration)

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguage,
  toLanguage: Language,
  text: string
}) {
  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: ''
    }
  ]
}
