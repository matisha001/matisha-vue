/*
 * @Author: caoyankui 
 * @Date: 2018-04-03 17:10:15 
 * @Last Modified by: caoyankui
 * @Last Modified time: 2018-04-17 17:27:31
 */

import MtsMenu from './matisha-vue-menu.vue';

/*
import  { MtsMenu } from 'matisha-vue';
使用Vue.use(MtsMenu)
*/
MtsMenu.install = function (Vue) {
    Vue.component(MtsMenu.name, MtsMenu);
};
export default MtsMenu;