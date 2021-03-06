// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueRadioToggleButtons from 'vue-radio-toggle-buttons';

import 'vue-radio-toggle-buttons/dist/vue-radio-toggle-buttons.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
	Vue.use(VueRadioToggleButtons);

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
}
