import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/home.vue'
import GDtail from '../pages/Gdetail.vue'
import Goods from '../pages/goods.vue'
import GOOdlist from '../pages/goodlist.vue'
import Author from '../pages/author.vue'
import Ceshi from '../pages/ceshi.vue'

let routes = [
    {path:'/hc28',component:Home},
    {path:'/cosmo',component:Home},
    {name:'gdetail', path:`/:type/Home/Goods/goodsInfo/id/:_id`,component:GDtail},
    {name:'goods',path:`/:type/Home/Goods/goodsCate`,component:Goods},
    {name:'goodlist',path:`/:type/Home/Goods/goodsList/id/:_id`,component:GOOdlist},
    {name:'author',path:`/:type/home/Article/articleList/cat_id/10/size/1000`,component:Author},

    {path:'/ceshi',component:Ceshi},
    
    {path:'/',redirect:'/hc28'},
    // {path:'/',redirect:'/ceshi'},
]


let router = new VueRouter({
    routes,
    mode: 'hash'
});

export default router;