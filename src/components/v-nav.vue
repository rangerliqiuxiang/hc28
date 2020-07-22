<template>
  <div :class=" `nav ${type === '/hc28' ? 't1' : 't2'}` ">
      <div class="top">
          <router-link to="/hc28" tag="a" class="one">HC28</router-link>
          <router-link to="/cosmo" tag="a" class="two">都汇里</router-link>
      </div>
      <div class="down">
          <ul>
              <router-link
                tag="li"
                :to="{name:'goods',params:{
                    type:type.split('/')[1],
                }}"
              >
                产品
              </router-link>
              <router-link
                tag="li"
                 :to="{name:'author',params:{
                    type:type.split('/')[1],
                }}"
              >
                  设计师
              </router-link>
              <li>专卖店</li>
              <li>新闻</li>
              <li>关于我们</li>
          </ul>
      </div>
  </div>
</template>

<script>

    export default {
        props:{
            type:{
                type:String,
                default:'t1'
            }
        },
        methods:{
        }
    }

</script>

<style scoped>
    .nav{
        position:fixed;
        width: 100%;
        top: 0;
        z-index: 999;
    }
    .top{
        width: 100%;
        height: 68px;
        line-height: 68px;
        text-align: center;
        font-size: 25px;
    }
    .top a{
        height: 68px;
        display: inline-block;
        width: 220px;
        position: relative;
    }
    .down ul{
        display: flex;
        justify-content: center;
    }
    .down ul li{
        font-size: 14px;
        height: 56px;
        line-height: 56px;
        padding: 0 15px;
        cursor: pointer;
    }
    .t1{
        color: black;
    }
    .t1 .top{
        background-color: #F6F6F6;
    }
    .t1 .one{
        background-color: black;
        color: white;
    }
    .t1 .two{
        background-color: white;
    }
    .t1 .down{
        background-color: white;
    }
    .t1 .down li:hover {
        background-color: cadetblue;
    }
    .t2{
        color: white;
        background-color: black;
    }
    .t2 .top a{
        background-color: black;
        color: white;
    }
    .t2 .top .two{
        background-color: #2A2A2E;
    }
    .t2 .down{
        background-color: #2A2A2E;
    }
    .t2 .down li:hover {
        background-color: black;
    }
</style>