/**
 * Created by hzou on 4/30/16.
 */
'use strict';

module.exports = {
  list: () => {
    return m.request({
      method: "GET",
      url   : "api/books.json"
    });
  }
};
