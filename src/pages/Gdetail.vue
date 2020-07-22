<template>
  <div class="detail">
    <div class="banner">
      <Vbanner
          :datalist="datalist" 
          :bannerwid='"840px"'
          :bannerhei='"660px"'
          :btnshow = "false"
          :type="this.$store.state.btype"
      ></Vbanner>
    </div>
    <div class="right">
       <div class="leftf">
         <p class="lf1">{{t1}}</p>
         <p class="lf2">{{t2}}</p>
         <p class="lf3">{{t3}}</p>
         <p class="lf4">{{t4}}</p>
         <p class="lf5">{{t5}}</p>
         <p class="lf6">技术说明</p>
      </div>
    </div>
    <div class="mid">
      <ul>
        <li v-for="(v,k) in mid" :key = k >
            <p>{{v.name}}</p>
          <div>{{v.des}}</div>
        </li>
      </ul>
    </div>
    <div class="btn">
      <p>
        <img :src="btn" alt="">
      </p>
    </div>
    
  </div>
</template>

<script>
import Vbanner from "../components/v-banner.vue";
import axios from 'axios'

export default {
  data() {
    return {
      datalist: [
      ],
      datalist2:[

      ],
      mid:[],
      t1:'',
      t2:'',
      t3:'',
      t4:'',
      t5:'',
      btn:''
    };
  },
  components: {
    Vbanner
  },
  mounted(){

    let a = this.$route.fullPath.split('/id/')[1]
    console.log(a)
    axios({
      url:`${this.$store.state.btype}/Home/Goods/goodsInfo/id/${a}.html`,
      method:'GET',
    }).then((data)=>{
        let source = this.$(data.data.split('<!DOCTYPE html>')[1])
        console.log(source)
        let ban= source.find('[class="gdt-maintop"] ul li img')
        let content = source.find('[class="gdt-detail"]')
        let content2 = source.find('[class="infoSect"] dl')
        ban.each((v,k)=>{
          let img = ('http://hc28.com.cn'+/<img width="100%" src="(.+)" alt="">/.exec(k.outerHTML)[1])
          this.datalist.push({
            img
          })
        })
        this.t1=(content.find('[class="ztit"]').text())  
        this.t2=(content.find('[class="ftit"]').text())  
        this.t3=(content.find('[class="ftit2"] p')[0].innerText)  
        this.t4=(content.find('[class="ftit2"] p')[1].innerText)  
        this.t5=(content.find('[class="miaos"]').text())  
        content2.each((v,k)=>{
          let name  = this.$(k).find('dt').text()
          let des  = this.$(k).find('dd').text()
          this.mid.push({
            name,
            des
          })
        })

        let btn1 = source.find('[class="infoSect"] p img')[0].src
        this.btn = 'http://hc28.com.cn/'+btn1.split(/\/\/.+?\//.exec(btn1))[1]
    })
  }
};
</script>

<style scoped>
  .banner{
    width: 80%;
    margin-left: -35px;
    margin-top: 224px;
  }
  .mid{
    width: 80%;
    margin: auto;
    margin-top: 100px;
  }
  .mid ul {
    display: flex;
    flex-wrap: wrap;
    border-top: solid 1px;
    padding: 65px 0 ;
    padding-right: 450px;
  }
  .mid ul li p{
    font-size: 18px;
    font-family: GothamBook, Microsoft YaHei
  }
  .mid ul li div{
    font-size: 14px;
    line-height: 1.8;
    margin-top: 15px;
    font-family: GothamBook, Microsoft YaHei;
  }
  .mid ul li{
    width: 28%;
    padding: 25px 0 ;
    margin-left: 5%;
  }
  .mid ul li:nth-of-type(3n+1){
    margin-left: 0;
  }
  .btn{
    width: 80%;
    border-top: solid 1px;
    margin: auto;
    padding: 65px 0 80px 0 ;
  }
  .btn p{
    width: calc(100% - 450px);
    /* padding-right: 1000px; */
  }
  .btn p img{
    width: 100%;
  }
  .leftf{
    width: 350px;
    height: 460px;
    /* background-color: blueviolet; */
    position: sticky;
    top: 130px;
    background-color: white;
    padding-left: 20px;
  }
  .right{
    position: absolute;
    top: 0;
    right: 120px;
    height: 100%;
    
  }
  .lf1{
    font-size: 44px;
    line-height: 44px;
    font-weight: normal;
  }
  .lf2{
    font-size: 18px;
    font-size: normal;
    line-height: 1.5;
    margin-top: 15px;
  }
  .lf3,.lf4{
    font-size: 15px;
    margin-top: 10px;
    line-height: 1.8;
    font-size: normal;
  }
  .lf5{
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.8;
    color: #545454;
  }
  .lf6{
    font-size: 18px;
    line-height: 1.5;
    color: #000;
    font-weight: normal;
  }
</style>