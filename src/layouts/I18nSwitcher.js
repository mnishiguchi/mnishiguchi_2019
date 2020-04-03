import React from 'react'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@material-ui/icons/Translate'

function I18nSwitcher() {
  const { i18n } = useTranslation()

  const handleChange = React.useCallback(
    (event) => {
      const langKey = event.target.value
      i18n.changeLanguage(langKey)
    },
    [i18n]
  )

  /* eslint-disable jsx-a11y/no-onchange */
  return (
    <label>
      <TranslateIcon />
      <select
        defaultValue={i18n.language}
        onChange={handleChange}
        style={{ height: `24px`, borderColor: `transparent`, outline: `none` }}
      >
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </label>
  )
}

export default I18nSwitcher
