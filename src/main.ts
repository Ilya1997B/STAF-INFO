import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI';
import router from './router/router';
import directives from '@/derictives/index';
import { store } from '@/store/index'

const app = createApp(App);

directives.forEach(derictive => {
    app.directive(derictive.name, derictive)
})

components.forEach((component: any) => {
    app.component(component.name, component);
})

// app.directive('intersection', Vintersection);

app
    .use(router)
    .use(store)
    .mount('#app');
