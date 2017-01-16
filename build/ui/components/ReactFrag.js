"use strict";

var React = require('react');
// var cloneWithProps = require('react/lib/cloneWithProps');
var MapPropTypes = require('../MapPropTypes');

function injectMapInto(child) {
  return React.isValidElement(child) ?
    React.cloneElement(child, {map: this.props.map}) : child;
}

var ReactFrag = React.createClass({displayName: "ReactFrag",
  propTypes: {
    map: MapPropTypes.Map.isRequired,
  },

  render: function() {
    // Inject the `mapProps` into all children that are
    // valid components.
    var children = React.Children
      .map(this.props.children, injectMapInto, this);

    return (
      React.createElement("span", null, children)
      );
  }
});

module.exports = ReactFrag;
