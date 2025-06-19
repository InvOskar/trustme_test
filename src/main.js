import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);

import Antd from 'ant-design-vue';
import * as AntIcons from '@ant-design/icons-vue';

Object.keys(AntIcons).forEach(key => {
  app.component(key, AntIcons[key]);
});
app.use(Antd);

app
  .use(store)
  .use(router)
  .mount("#app");
