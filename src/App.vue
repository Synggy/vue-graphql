<template>
  <div id="app">
    <div>
      <input type="text" v-model="name">
    <button @click="getAge">click me</button>
    </div>
    <div>
      <span>{{ age }}</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import gql from 'graphql-tag'

let getAge = function() {
  let query = gql`
   query ($name: String!) {
    person(name: $name) {
      name
      age
    }
  }`;
  let variables = {
    name: this.name
  }
  this.$apollo.query({
    query,
    variables,
  })
  .then(x => this.age = x.data.person.age)
};
export default {
  name: 'app',
  data: () => ({
    name: '',
    age: ''
  }),
  methods: {
    getAge
  }
}
</script>
