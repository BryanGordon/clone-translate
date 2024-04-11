import { Form } from "react-bootstrap"
import { AUTO_LANGUAGES, SUPPORTED_LANGUAGED } from "../constants"
import { type FC } from "react"
import { SectionType, type FromLanguage, type Language } from "../types.d"

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ type, value, onChange }) => {
  // eslint-disable-next-line no-undef
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGES}>Detectar idioma</option>}
      {Object.entries(SUPPORTED_LANGUAGED).map(([key, lang]) => (
        <option key={key} value={key}>
          {lang}
        </option>
      ))}
    </Form.Select>
  )
}
