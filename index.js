const React = require('react')

module.exports = props =>
  <div>this is really <b>sweet</b>{props.emoji ? `✨` : `💄`}</div>
