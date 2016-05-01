/**
 * Created by hzou on 4/30/16.
 */
'use strict';

module.exports = class {
  constructor(book) {
    this.imdb   = _.result(book, "imdb", "");
    this.title  = _.result(book, "title", "");
    this.author = _.result(book, "author", "");
    this.url    = _.result(book, "url", "");
    this.img    = _.result(book, "img", "");
  }
};