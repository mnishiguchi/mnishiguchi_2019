import React from 'react'
import _ from 'lodash'

import amazonaws from '../img/brands/amazonaws.svg'
import android from '../img/brands/android.svg'
import circleci from '../img/brands/circleci.svg'
import creativecommons from '../img/brands/creativecommons.svg'
import css3 from '../img/brands/css3.svg'
import docker from '../img/brands/docker.svg'
import elasticsearch from '../img/brands/elasticsearch.svg'
import flutter from '../img/brands/flutter.svg'
import gatsby from '../img/brands/gatsby.svg'
import gimp from '../img/brands/gimp.svg'
import git from '../img/brands/git.svg'
import graphql from '../img/brands/graphql.svg'
import heroku from '../img/brands/heroku.svg'
import html5 from '../img/brands/html5.svg'
import javascript from '../img/brands/javascript.svg'
import jekyll from '../img/brands/jekyll.svg'
import json from '../img/brands/json.svg'
import linux from '../img/brands/linux.svg'
import markdown from '../img/brands/markdown.svg'
import mysql from '../img/brands/mysql.svg'
import netlify from '../img/brands/netlify.svg'
import nodejs from '../img/brands/nodejs.svg'
import openstreetmap from '../img/brands/openstreetmap.svg'
import postgresql from '../img/brands/postgresql.svg'
import rails from '../img/brands/rails.svg'
import react from '../img/brands/react.svg'
import ruby from '../img/brands/ruby.svg'
import rubygems from '../img/brands/rubygems.svg'
import sass from '../img/brands/sass.svg'
import stackoverflow from '../img/brands/stackoverflow.svg'
import visualstudiocode from '../img/brands/visualstudiocode.svg'
import vuejs from '../img/brands/vuejs.svg'
import wikipedia from '../img/brands/wikipedia.svg'

const brandIcons = [
  amazonaws,
  android,
  circleci,
  creativecommons,
  css3,
  docker,
  elasticsearch,
  flutter,
  gatsby,
  gimp,
  git,
  graphql,
  heroku,
  html5,
  javascript,
  jekyll,
  json,
  linux,
  markdown,
  mysql,
  netlify,
  nodejs,
  openstreetmap,
  postgresql,
  rails,
  react,
  ruby,
  rubygems,
  sass,
  stackoverflow,
  visualstudiocode,
  vuejs,
  wikipedia,
]

const gridStyle = { height: '50px', padding: `4px` }

const BrandIconList = () => {
  const setHash = React.useState()[1]

  return (
    <span onClick={() => setHash(new Date())}>
      {_.shuffle(brandIcons).map((icon, i) => (
        <img src={icon} alt="" key={i} style={gridStyle} />
      ))}
    </span>
  )
}

export default BrandIconList
