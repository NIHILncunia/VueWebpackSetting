import Vue from 'vue';
import Test from './src/Test';

new Vue({ render: el => el(Test) }).$mount('#root');