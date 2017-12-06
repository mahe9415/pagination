<template>
<ul class="pagination pagination--circle">
<li @click="changeQuestion(current_index - 1)">
<button class="pagination__navigation">
<i aria-hidden="true" :class="current_index==0 ?'material-icons icon pagination__navigation--disabled' :'material-icons icon'">chevron_left</i></button>
</li>
<template v-for="i in pagination">
<li v-for="(question,index) in questions" @click="changeQuestion(index)" v-if="i == index+1">
  <button :class="!question.user_answer ? 
                  current_index==index  ? 
                  ' highlight-border pagination__item' 
                  :'pagination__item' 
                  : current_index== index ?
                   ' highlight-border pagination__item':
                   'pagination__item pagination__item--active success'
                    ">{{index+1}}</button>
</li> 
<li v-if="i=='...'"> ...
</li>      
 </template>
 <li @click="changeQuestion(current_index +1)""><button :class="current_index+1 >=this.questions.length ?'material-icons icon pagination__navigation--disabled' :'material-icons icon'"><i aria-hidden="true" class="material-icons icon">chevron_right</i></button></li>
</ul>
</template>
<script>
export default {
name:'Pagination',
data(){
    return{
        current_index:0,
        questions:[]
    }
},
watch:{

},
computed:{
  pagination() {
    let c=this.current_index;
    let m= this.questions.length;
    var current = c,
        last = m,
        delta = 5,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 5) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }
    return rangeWithDots;
}
},
beforeCreate(){

},
created(){

},
mounted(){
},
methods:{
  inRange(index){
    // console.log(this.pagination)
    if(this.pagination.includes(index)){
      return true
    }
    else{
      return false
    }
  },
  changeQuestion(index){
    // console.log(this.current_index)
    this.setCurrent_index(index)
  }
}
}
    
</script>

<style scoped>
.highlight{
  background: red!important;
  border-color: green!important;
}
.highlight-border{
  border:1px solid #000!important;
}
</style>