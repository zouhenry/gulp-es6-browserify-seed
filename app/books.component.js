/**
 * Created by hzou on 4/30/16.
 */
//models
'use strict';

const Book = require("./book.component");

module.exports = {
  //controller
  controller: () => {
    var ctrl = {
      rotate: () => {
        ctrl.books().push(ctrl.books().shift());
      }
    };
    return ctrl;
  },
  //view
  view      : (ctrl, args) => {
    ctrl.books = args.books;
    return m("ul", [
      args.books().map((book) => {
        return [
          m.component(Book, { book: book })
        ];
      }),
      m("button", { onclick: ctrl.rotate }, "Rotate links")
    ]);
  }
};
