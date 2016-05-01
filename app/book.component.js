/**
 * Created by hzou on 4/30/16.
 */

'use strict';

module.exports = {
  //controller
  controller: () => {
    return {};
  },
  //view
  view      : (ctrl, args) => {
    var book = args.book;
    return m('li', [
      m('img', { src: book.img, width: "200px", height: "200px" }),
      m('p', {}, book.author),
      m("a", { href: book.url }, book.title)
    ]);
  }
};

