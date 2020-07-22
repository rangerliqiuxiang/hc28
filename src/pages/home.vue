<template>
  <div>
    <Vbanner :type="this.$store.state.btype" :datalist="datalist" :bannerwid='"100%"' :bannerhei='"653px"' :btnshow = "true"></Vbanner>
    
    <ul class="ul">
      <router-link 
        tag="li"
        :to="{name:'gdetail',params:{
          type:$store.state.btype.split('/')[1],
          _id:v.id,
        }}"
        v-for="(v,k) in homelist"
        :key = k
      >
          <Vcell
          :wid="coll+'px'"
          :hei="coll*0.6667+'px'"
          :img="v.img"
        ></Vcell>
        <div>
          <p>{{v.title}}</p>
          <p>{{v.author}}</p>
        </div>
      </router-link>
    </ul>
    <div class="btn">
      <div class="btn2">
        <div class="l"> 
            <vcell
              :wid="coll2+'px'"
              :hei="coll2*0.626+'px'"
              img="http://www.hc28.com.cn/hc28/public/upload/article/2019/09-20/90c55b14718be4feff594c84800ffc83.jpg"
            ></vcell>
            <p>CIFF上海虹桥•看点 | HC28的雅和静</p>
            <p>第44届中国(上海)国际家具博览会CIFF已于9月11日圆满落下帷幕。为期四天的展会，现场人气火爆、气氛热烈，参观的人流络绎不绝。HC28联手去年推出的新品牌都汇里联合参展，被众多媒体和观众评为 4.1馆中最炙手可热的展位。</p>
        </div>
        <div class="r">

        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Vbanner from "../components/v-banner.vue";
import Vcell from "../components/v-cell.vue";
import axios from 'axios'


export default {
  data() {
    return {
      datalist: [
        // {
        //   img:"http://www.hc28.com.cn/hc28/public/upload/ad/2019/09-02/8c53fb59b0014b8f49b41655442f61ec.jpg",
        //   id:'123'
        // },
        // {
        //   img:"http://www.hc28.com.cn/hc28/public/upload/ad/2019/09-02/e41a69090642696eedfb5a1ffdb7b0c2.jpg",
        //   id:'456'
        // },
        // {
        //   img:"http://www.hc28.com.cn/hc28/public/upload/ad/2019/09-02/fbc12c2fed9a1046f9dd99fa6c949cfb.jpg",
        //   id:'789'
        // }
      ],
      homelist:[
      ],
      ele: "",
      coll: "",
      coll2:'',
    };
  },
  components: {
    Vbanner,
    Vcell
  },
  mounted() {
    this.ele = document.querySelector(".ul");
    this.coll = parseFloat(window.getComputedStyle(this.ele).width) * 0.3333;
    this.coll2 = parseFloat(window.getComputedStyle(document.querySelector(".btn2")).width) * 0.38;
    this.fun1();
    axios({
      url:this.$store.state.btype+'/',
      method:'GET',
    }).then((data)=>{
      let source = this.$(data.data.split('<!DOCTYPE html>')[1])
      let a = source.find('[class="swiper-wrapper"] li a')
      let b = source.find('[id="product-list"] li')
      // console.log(source)
      // console.log(b)
      //轮播图
      a.each((v,k)=>{
        let img = 'http://www.hc28.com.cn'+/url\("(.+)"\)/.exec(k.style.backgroundImage)[1]
        let id = parseInt(k.href.split('id/')[1])
        this.datalist.push({
          img,
          id
        })
      })
      //轮播图底下展示
      b.each((v,k)=>{
        let id = parseInt(this.$(k).find('a')[0].href.split('id/')[1])
        let img = 'http://hc28.com.cn'+/<img src="(.+)" alt="">/.exec(this.$(k).find('a img')[0].outerHTML)[1]
        let title = this.$(k).find('[class="t1"]').text()
        let author = this.$(k).find('[class="t2"]').text()
        this.homelist.push({
          title,
          author,
          img,
          id
        })
      })
    })
  },
  methods: {
    fun1() {
      window.onresize = () => {
        this.ele = document.querySelector(".ul");
        this.coll =parseFloat(window.getComputedStyle(this.ele).width) * 0.3333;
        this.coll2 = parseFloat(window.getComputedStyle(document.querySelector(".btn2")).width) * 0.38;
        console.log(this.coll);
      };
    }
  },
  watch:{
  	$route:{
      handler(x,y){
        console.log(x)
        console.log(y)
        if(y){
          location.reload()
        }
      },
      immediate:true
    }
}
};
</script>

<style scoped>
.ul {
  width: 80%;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  margin-top: 60px;
  padding-bottom: 60px;
}
.ul li {
  width: 33.33%;
  padding: 5px 10px 30px 10px;
  box-sizing: border-box;
  overflow: hidden;
}
.btn{
  height: 448px;
  width: 100%;
  padding: 100px 0;
  background-color: #858585;
}
.btn2{
  width: 80%;
  /* height: 100%; */
  /* border: solid; */
  margin: auto;
}
.l{
  width: 38%;
  /* border: solid; */
}
</style>