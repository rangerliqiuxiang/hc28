<template>
  <div class="d1">
    <ul :class="'ul'+' '+(this.$store.state.btype != '/hc28' ?  'bad' : '')">
       <li v-for="(v,k) in datalist" :key = k :style="[{width:coll+'px'},{height:coll/2+'px'}]">

            <Vcell :wid="coll/2+'px'" :hei="coll/2+'px'" :img="v.img"></Vcell>

            <aside :style="[{width:coll/2+'px'},{height:coll/2+'px'}]">
                <p>{{v.name}}</p>
                <p>{{v.des}}</p>
            </aside>
       </li>
        
    </ul>
  </div>
</template>

<script>
import Vcell from "../components/v-cell.vue";
import axios from 'axios'
export default {
  data() {
    return {
      ele: "",
      coll: "",
      datalist:[

      ]
    };
  },

  mounted() {
    this.ele = document.querySelector(".ul");
    this.coll = (parseFloat(window.getComputedStyle(this.ele).width)-18) * 0.3333333333;
    console.log(this.coll)
    this.fun1();
    axios({
      url:`${this.$store.state.btype}/home/Article/articleList/cat_id/10/size/1000.html`,
      method:'GET',
    }).then((data)=>{
        let source = this.$(data.data.split('<!DOCTYPE html>')[1]).find('ul li')
        source.each((v,k)=>{
            let id = (parseInt(/href="(.+)" class/.exec(this.$(k).find('a')[0].outerHTML)[1].split('id/')[1]))
            let img = ('http://hc28.com.cn'+/url\('(.+)'\)">/.exec(this.$(k).find('[class="img"]')[0].outerHTML)[1])
            let name = (this.$(k).find('[class="t"]').text())
            let des = (this.$(k).find('[class="d"]').text())
            this.datalist.push({
                id,
                img,
                name,
                des
            })
            
        })
    })
  },
  methods: {
    fun1() {
      window.onresize = () => {
        this.ele = document.querySelector(".ul");
        this.coll =
        parseFloat(window.getComputedStyle(this.ele).width) * 0.33333333333;
        console.log(this.coll);
      };
    }
  },
  components: {
    Vcell
  },
  
};
</script>



<style  scoped>
.d1 {
  margin-top: 124px;
  width: 100%;
}
.ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.ul li {
  box-sizing: border-box;
  background-color: #f2f2f2;
  color: #1f1f1f;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
}
.ul li:hover {
  background-color: #5e5e5e;
}
.ul li:hover>aside{
    color: white;
}
.bad li{
    background-color: #5e5e5e;
    color: white;
}
.bad li:hover{
    background-color: #f2f2f2;
}
.bad li:hover>aside{
    color: black;
}
.ul li>div{
    position: absolute;
    right: 0;
}
.ul li:nth-of-type(6n)>div,.ul li:nth-of-type(6n-1)>div,.ul li:nth-of-type(6n-2)>div{
    position: absolute;
    left:0;
}
.ul li:nth-of-type(6n)>aside,.ul li:nth-of-type(6n-1)>aside,.ul li:nth-of-type(6n-2)>aside{
    position: absolute;
    right: 0;
}
.ul li:nth-of-type(6n)>aside p:nth-of-type(1),.ul li:nth-of-type(6n-1)>aside p:nth-of-type(1),.ul li:nth-of-type(6n-2)>aside p:nth-of-type(1){
    position: relative;
    text-align: left;
    left: 5%;
    top: 65%;
}
.ul li:nth-of-type(6n)>aside p:nth-of-type(2),.ul li:nth-of-type(6n-1)>aside p:nth-of-type(2),.ul li:nth-of-type(6n-2)>aside p:nth-of-type(2){
    position: relative;
    text-align: left;
    left: 5%;
    top: 65%;
}
.ul li>aside p:nth-of-type(1){
    width: 100%;
    font-size: 30px;
    color: inherit;
    position: relative;
    left: -5%;
    text-align: right;
    top: 50%;
}
.ul li>aside p:nth-of-type(2){
    width: 100%;
    font-size: 18px;
    margin-top: 2%;
    position: relative;
    left: -5%;
    text-align: right;
    top: 50%;
}
</style>