<template>
  <div class="swiper-container" :style="[{width:bannerwid},{height:bannerhei}]">
    <ul class="swiper-wrapper">
      <!--广告位-->
      <router-link
        tag='li'
        v-for = '(v,k) in datalist'
        :key="k"
        :to="{name:'gdetail',params:{
          type:type.split('/')[1],
          _id:v.id,
        }}"
        class="swiper-slide"
        :style="'background-image:url('+v.img+')'"
      >
      </router-link>
    </ul>
    <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets" v-if="btnshow"></div>
  </div>
</template>
<script>
// import Swiper from "swiper";
import Swiper from "../assets/js/swiper.min.js";
import "../assets/css/swiper.min.css";

export default {
  mounted() {
   
  },
  data(){
    return{
    }
  },
  updated(){
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 3000,
      loop: true,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      parallax: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next"
    });
  },
  props: {
    type: {
      type: String,
      default: "/hc28",
      required:true
    },
    datalist:{
        type:Array,
        required:true
    },
    bannerwid:{
      required:true
    },
    bannerhei:{
      required:true
    },
    btnshow:{
      required:true
    },
    bhref:{}
  },
  methods:{
      
  }
};
</script>

<style  scoped>
.swiper-container {
  /* width: 100%; */
  /* height: 653px; */
  margin-top: 124px;
}
.swiper-pagination {
  bottom: 30px;
}
.swiper-pagination span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 1;
}
.swiper-pagination span.swiper-pagination-bullet-active {
  background-color: transparent;
  border: 1px solid #fff;
}
.swiper-wrapper li {
  background-size: cover;
}
</style>