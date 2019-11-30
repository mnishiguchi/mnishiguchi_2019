import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageContent } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const frontmatter = data.markdownRemark

  if (data) {
    return <IndexPageContent {...frontmatter} />
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
