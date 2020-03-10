require('dotenv').config()
const prod = process.env.NODE_ENV === 'production'


module.exports = {
  env: {
    BASE_URL: prod ? 'https://jake-test-6iknmk9y9.now.sh' : 'http://localhost:3000'
  },
}
