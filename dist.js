const React = require('react');

module.exports = props => React.createElement("div", null, "this is really ", React.createElement("b", null, "sweet"), props.emoji ? `✨` : `💄`);
