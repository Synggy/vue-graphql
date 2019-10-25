<template>
  <div id="app">
    <input type="text" v-model="name">
    <button @click="get">click me</button>
    <span>{{ age }}</span>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
/* eslint-disable */
// import HelloWorld from './components/HelloWorld.vue'
import gql from 'graphql-tag'

let name = ''
let getAge = function() {
  let query = gql`
    query {
      getAge(name: "${ this.name }"){
        age
      }
    }`;
  return {
    query
  };
}
export default {
  name: 'app',
  data: () => ({
    name: "evan",
    age: ''
  }),
  components: {
    // HelloWorld
  },
  apollo: {
    getAge
  },
  methods: {
    get(){
      // this.age = this.getAge.data.getAge.age;
      console.log(getAge.data)
      // this.age = this.getAge.age;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
