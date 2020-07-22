<template>
  <div class="goods">
    <ul class="g1">
        <router-link
            tag="li"
            :to="{name:'goodlist',params:{
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
        <p class="miaoshu">{{v.name}}</p>
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
    axios({
      url:`${this.$store.state.btype}/Home/Goods/goodsCate.html`,
      method:'GET',
    }).then((data)=>{
      let source = this.$(data.data.split('<!DOCTYPE html>')[1]).find('[id="product-list"] li')
      source.each((v,k)=>{
        let id = parseInt(this.$(k).find('a')[0].href.split('id/')[1])
        let img ='http://hc28.com.cn'+/<img src="(.+)" alt="">/.exec(this.$(k).find('a img')[0].outerHTML)[1]
        let name= this.$(k).find('div')[1].innerText
        this.datalist.push({
          img,
          id,
          name
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
.miaoshu{
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
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
</style>