import jsdom from "jsdom";
import React from "react";
import jquery from "jquery";
import chai, { expect } from "chai";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import chaiJquery from "chai-jquery";
import { Provider } from "react-redux";
import reducers from "../src/reducers";
import TestUtils from "react-addons-test-utils";

global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
global.window = global.document.defaultView;
const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  const componentInst = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)} >
      <ComponentClass {...props} />
    </Provider>
  );
  
  return $(ReactDOM.findDOMNode(componentInst));
}

$.fn.simulate = function(eventName, value) {
  if(value) this.val(value);
  TestUtils.Simulate[eventName](this[0]);
}

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
