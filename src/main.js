import MtsMenu from './component/matisha-vue-menu';
const components = {
  MtsMenu
}

const matisha = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  Object.keys(matisha).forEach(key => {
    Vue.component(key, matisha[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
};
module.exports.default = module.exports = API;