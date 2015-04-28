
jest.dontMock('../ReactFrag');

describe('ReactFrag', function() {
  it('should pass all props to all valid children', function() {
    var React = require('react');
    var ReactTestUtils = require('react/lib/ReactTestUtils');
    var ReactFrag = require('../ReactFrag');

    var didMount = jest.genMockFn();
    var Test = React.createClass({displayName: "Test",
      render: function() { return null; },
      componentDidMount: function() {
        didMount(this.props);
      }
    });

    var map = {};
    var testProp = {};
    ReactTestUtils.renderIntoDocument(
      React.createElement(ReactFrag, {map: map, testProp: testProp}, 
        React.createElement(Test, null), 
        null, 
        false, 
        React.createElement(ReactFrag, null, 
          React.createElement(Test, null)
        )
      )
    );

    expect(didMount.mock.calls.length).toBe(2);
    expect(didMount.mock.calls[0][0]).toEqual({map: map});
    expect(didMount.mock.calls[1][0]).toEqual({map: map});
  });
});
