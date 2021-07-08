import { createApp } from 'vue';
import App from './App';

export const eventBus = createApp(App);

createApp(App).mount('#app');