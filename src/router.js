import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from "./screens/HomePage";
import PlotPage from "./screens/PlotPage";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/plot',
            name: 'plotpage',
            component: PlotPage
        }
    ]
})