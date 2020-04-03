export const removeLeadingSlashes = (path) => path.replace(/^\/+/g, '')
export const removeTrailingSlashes = (path) => path.replace(/\/+$/g, '')

// Remove ".html" etc
export const removeExtensionCode = (path) => path.split('.')[0]

export const pathToPageKey = (path) => {
  const result = removeTrailingSlashes(
    removeLeadingSlashes(pathToDefaultForm(removeExtensionCode(path)))
  )

  // Ignore subpath and default to home.
  return result.split('/')[0] || 'home'
}

// "/"             => "/"
// "/amenities"    => "/amenities"
// "/en/"          => "/en/"
// "/en/amenities" => "/amenities"
export const pathToDefaultForm = (path, languages = ['ja', 'en']) => {
  if (path.charAt(0) !== '/')
    throw new Error(`Path must have a leading slash: ${path.charAt(0)}`)

  return path === `/`
    ? path
    : path
        .split('/')
        .filter((segment) => !languages.includes(segment))
        .join('/')
}

// "/hello"
export const getCurrentPath = () => {
  if (typeof window === 'undefined') throw new Error(`window is undefined`)

  return window.location.pathname
}
