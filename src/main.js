// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import plugins from './plugins';
import store from './store';

Vue.use(ElementUI);
Vue.use(plugins);
sync(store, router, { moduleName: 'route' });

Vue.config.debug = process.env.NODE_ENV === 'development';
Vue.config.silent = process.env.NODE_ENV === 'production';
Vue.config.devtools = true;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
