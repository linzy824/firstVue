<template>
<div >
  <Nav></Nav>
  {{testNum|my-filter}}
  <br/>
  {{myfilter}}
  <br/>
  <button v-on:click="fun1(1)"></button>
  <input type="text" v-model="testNum" @blur="fun2(testNum)">
  <router-view></router-view>
</div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  name: 'Index',
  data () {
    return {
      testNum:5646541,
      myfilter:'testNum|my-filter',
    }
  },
  components: {
    Nav
  },
  methods:{
    fun1: function (arg) {
      
      
    },
    fun2:function (arg) {
      this.testNum=this.testNum+".00"
    }
  }
}
</script>
