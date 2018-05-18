import Vue from "vue";
import Router from "vue-router";
import Home from "../home/index.vue";
import Money from '../money/index.vue';
import Ious from '../ious/index.vue';
import Raise from '../raise/index.vue';
import Download from '../special/download.vue';
import NotFound from '../404/index.vue';

import "../../css/reset.scss";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/home", 
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/ious",
            name: "ious",
            component: Ious,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/download",
            name: "download",
            component: Download,
        },
        {
            path: '*',
            name: '*',
            component: NotFound
        }
    ]
})
