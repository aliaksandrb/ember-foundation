import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    greet: function () {
      console.log('Hello!');
    }
  },

  breadCrumb: 'Kitchen Sink',

  switchAOptions: [
    {
      id: 'a',
      label: 'Off',
      value: 'off'
    }, {
      id: 'a1',
      label: 'On',
      value: 'on'
    }
  ],

  switchAValue: 'off',

  switchBOptions: [
    {
      id: 'b',
      label: 'Off',
      value: 'off'
    }, {
      id: 'b1',
      label: 'On',
      value: 'on'
    }
  ],

  switchBValue: 'off',

  switchCOptions: [
    {
      id: 'c',
      label: 'Off',
      value: 'off'
    }, {
      id: 'c1',
      label: 'On',
      value: 'on'
    }
  ],

  switchCValue: 'off',

  switchDOptions: [
    {
      id: 'd',
      label: 'Off',
      value: 'off'
    }, {
      id: 'd1',
      label: 'On',
      value: 'on'
    }
  ],

  switchDValue: 'off'
});
