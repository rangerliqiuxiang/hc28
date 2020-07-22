<template>
  <div class="goods">
    <ul class="g1">
        <router-link
            tag="li"
            :to="{
                name:'gdetail',params:{
                type:$store.state.btype.split('/')[1],
                _id:v.id,
            }}"
            v-for="(v,k) in datalist"
            :key = k
            class="g2"
        >
        <Vcell
          :wid="coll+'px'"
          :hei="coll * 0.66667+'px'"
          :img="v.img"
          class="dd"
        ></Vcell>
        <p class="p1">{{v.title}}</p>
        <p class="p2">{{v.author}}</p>
        </router-link>
    </ul>
    <div class="btn">
        <span>©2019 HC28. ALL RIGHTS RESERVED. </span>
        <span>Powered by Minethink</span>
    </div>
  </div>
</template>




<script>
import Vcell from "../components/v-cell.vue";
import axios from 'axios'

export default {
  data() {
    return {
      datalist: [
      ],
      ele: "",
      coll: "",
      coll2: ""
    };
  },
  components: {
    Vcell
  },
  methods: {
    fun1() {
      window.onresize = () => {
        this.ele = document.querySelector(".g1");
        this.coll = parseFloat(window.getComputedStyle(this.ele).width) * 0.25;
        console.log(this.coll);
      };
    }
  },
  mounted() {
    this.ele = document.querySelector(".g1");
    this.coll = parseFloat(window.getComputedStyle(this.ele).width) * 0.25;
    this.fun1();

    let a = this.$route.fullPath.split('/id/')[1]
    axios({
      url:`${this.$store.state.btype}/Home/Goods/goodsList/id/${a}.html`,
      method:'GET',
    }).then((data)=>{
      let source = this.$(data.data.split('<!DOCTYPE html>')[1]).find('ul [class="item"]')
      source.each((v,k)=>{
        let img = 'http://hc28.com.cn'+/<img src="(.+)" alt="">/.exec(this.$(k).find('img')[0].outerHTML)[1]
        let id = (parseInt(this.$(k).find('a')[0].href.split('/id/')[1]))
        let title = this.$(k).find('[class="t1"]').text()
        let author = this.$(k).find('[class="t2"]').text()
        this.datalist.push({
          img,
          id,
          title,
          author
        })
      })
    })
  }
};
</script>



<style  scoped>
.goods {
  margin-top: 184px;
}
.g1 {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
}
.g2{
    overflow: hidden;
    width: 25%;
    box-sizing: border-box;
    /* border: solid; */
    padding: 5px 20px 30px 20px;
}
.dd {
  box-sizing: border-box;
  /* border: solid; */
}
.btn{
    width: 100%;
    background: #000;
    height: 70px;
}
.btn span{
    color: #777;
    line-height: 70px;
    margin-right: 70px;
}
.p1{
    font-size: 13px;
    color: #212121;
    display: block;
    line-height: 1.5;
    margin-top: 10px;
}
.p2{
    display: block;
    font-size: 12px;
    color: #777;
    line-height: 1.5;
}
</style>