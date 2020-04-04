import React from 'react'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@material-ui/icons/Translate'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

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
    <div style={{ minWidth: '110px' }}>
      <TranslateIcon
        style={{
          display: 'inline-block',
          color: 'black',
          marginRight: '.5rem',
          verticalAlign: 'middle',
        }}
      />

      <FormControl>
        <Select
          id="I18nSwitcher-select"
          value={i18n.language}
          onChange={handleChange}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default I18nSwitcher
