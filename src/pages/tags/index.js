import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'

import GlobalLayout from '../../layouts/index'
import BlogTag from '../../components/BlogTag'
import AppContentContainer from '../../components/AppContentContainer'

function TagsPage({
  data: {
    allMarkdownRemark: { group },
  },
}) {
  const { t } = useTranslation()
  return (
    <GlobalLayout>
      <AppContentContainer>
        <h1>{t(`pages.tags.title`)}</h1>
        <div className="h3">
          {group.map((tag) => (
            <BlogTag
              key={tag.fieldValue}
              tagName={tag.fieldValue}
              tagCount={tag.totalCount}
            />
          ))}
        </div>
      </AppContentContainer>
    </GlobalLayout>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
