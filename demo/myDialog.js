define(
  [
    "dojo/_base/declare",
    "dijit/Dialog",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./custom.html",
    "dojox/form/CheckedMultiSelect"
  ],
  function(declare, Dialog, TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare(
      "myDialog",
      [Dialog, TemplatedMixin, _WidgetsInTemplateMixin],
      {
        templateString: template
      }
    );
  }
);
