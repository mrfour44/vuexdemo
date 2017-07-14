<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Vuex test</p>
    <p>count: {{count}}</p>
    <p>循环store的对象</p>
    <div v-for="(v, k) in product" :key="v">{{k}} - {{v}}</div>
    <br>
    <p>循环store的数组</p>
    <div v-for="item in doneTodos" :key="item">
      <p>{{item.id}} - {{item.text}}</p>
    </div>
    <span>doneTodosCount ： {{doneTodosCount}}</span>
    <br>
    <button @click="add">点击修改count</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'This is a vuex demo'
    }
  },
  computed: {
    // ...mapState([
    //   'count',
    //   'product'
    // ]),
    ...mapGetters([
      'count',
      'product',
      'doneTodos',
      'doneTodosCount'
    ])
  },
  methods: {
    add() {
      // console.log(this.isGuest)
      // 提交mutation
      this.$store.commit('increment')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
