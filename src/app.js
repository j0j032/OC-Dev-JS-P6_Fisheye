/* Inject css */
require('./scss/style.scss')

/* Rooter of the app : load js file in function of url */
const url = new URL(window.location.href)
const id = url.searchParams.get('id')

// if page photographer.html is loaded and a param id exists from url
if (id !== null) {
  console.log('id:', id)
  require('./scripts/pages/photographer')(id)
} else {
  // By default load home page
  require('./scripts/pages/index')
}
