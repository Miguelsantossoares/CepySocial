import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import { createPinia } from 'pinia';
import App from './App.vue'

const app = createApp(App);
app.use(createPinia());

registerPlugins(app);

app.mount('#app');