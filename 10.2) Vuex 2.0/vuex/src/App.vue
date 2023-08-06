<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>

      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({
        value: 10,
        delay: 350,
      })">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
  components: {TheNavbar},
  computed: {
    ...mapGetters('count', ['counter', 'doubleCounter']),
    ...mapGetters(['uppercaseTitle']),
  },
  methods: {
    ...mapMutations('count',{add: 'increment'}),
    ...mapActions('count', ['incrementAsync']),
  }
}
</script>
