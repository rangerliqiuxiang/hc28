<template>
    <div class="cell" :style="{
        width:wid,
        height:hei,
        'background-image':`url(${img})`,
    }">
    </div>
</template>


<script>
    export default {
        props:{
            wid:{
                required:true
            },
            hei:{
                required:true
            },
            img:{
                type:String,
            }
        },
    }
</script>



<style  scoped>
    .cell{
        /* border: solid; */
        background-size:100%;
        background-repeat: no-repeat;
        background-position: center;
        transition:0.5s;
    }
    .cell:hover{
        background-size: 120%;
    }
</style>
