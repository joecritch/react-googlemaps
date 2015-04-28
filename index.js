"use strict";

var assign = require('react/lib/Object.assign');
var ReactDefaultInjection = require('./build/ui/ReactDefaultInjection');
var ReactMapComponents = require('./build/ReactMapComponents');
var MapPropTypes = require('./build/ui/MapPropTypes');

ReactDefaultInjection.inject();

module.exports = assign(
  {},
  ReactMapComponents,
  {
    PropTypes: MapPropTypes
  }
);
