/**
 * Created by hzou on 4/30/16.
 */
'use strict';
const Books    = require('./books.component');
const BookForm = require('./book.form.component');
const bookApi  = require('./book.api');
const Book     = require('./book');

module.exports = {
  //controller
  controller: () => {
    var books = bookApi.list();
    return {
      books: books,
      save : (book) => {
        books().push(new Book(book));
      }
    };
  },
  //view
  view      : function (ctrl) {
    return [m.component(Books, { books: ctrl.books }), m.component(BookForm, { save: ctrl.save })];
  }
};
