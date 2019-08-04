module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "airbnb",
  rules: {
    "react/prop-types": [0]
  }
}
