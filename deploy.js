const ghpages = require('gh-pages')

ghpages.publish('dist', function(e) {
  if (e) {
    console.error(e)
  } else {
    console.log('finish')
  }
})
