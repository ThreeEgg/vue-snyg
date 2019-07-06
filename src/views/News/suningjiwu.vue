<template>
    <div class="news">
        <newsHeader  :msg="msg"></newsHeader>
        <jBanner></jBanner>
        <jiwubox></jiwubox>
    </div>
</template>
<script>
import newsHeader from "./newsheader/";
import jBanner from "./jbanner/";
import jiwubox from "./jiwubox"
export default {
    name:"jiwu",
    data(){
        return{
            msg:"苏宁极物"
        }
    },
    components:{
        newsHeader,
        jBanner,
        jiwubox
    }
}
</script>