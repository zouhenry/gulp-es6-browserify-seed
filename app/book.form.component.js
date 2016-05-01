/**
 * Created by hzou on 4/30/16.
 */
'use strict';

module.exports = {
  //controller
  controller: () => {
    var ctrl = {
      vm: {
        author: m.prop(''),
        img   : m.prop(''),
        url   : m.prop(''),
        title : m.prop(''),
        isbn  : m.prop(''),
        reset : () => {
          ctrl.vm.author('');
          ctrl.vm.img('');
          ctrl.vm.url('');
          ctrl.vm.title('');
          ctrl.vm.isbn('');
        }
      }
    };
    return ctrl;
  },
  //view
  view      : (ctrl, args) => {
    return m('div', {}, [
      m('input', { name: "author", onchange: m.withAttr("value", ctrl.vm.author), value: ctrl.vm.author(), placeholder: "Author" }),
      m('input', { name: "img", onchange: m.withAttr("value", ctrl.vm.img), value: ctrl.vm.img(), placeholder: "Image" }),
      m('input', { name: "url", onchange: m.withAttr("value", ctrl.vm.url), value: ctrl.vm.url(), placeholder: "URL" }),
      m('input', { name: "title", onchange: m.withAttr("value", ctrl.vm.title), value: ctrl.vm.title(), placeholder: "Title" }),
      m('input', { name: "isbn", onchange: m.withAttr("value", ctrl.vm.isbn), value: ctrl.vm.isbn(), placeholder: "ISBN" }),
      m('button', { onclick: args.save.bind(null, ctrl.vm) }, "add")
    ]);
  }
  //{onchange: m.withAttr("value", todo.vm.description), value: todo.vm.description()})
};


