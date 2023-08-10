<template>
  <the-navbar></the-navbar>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>

    <router-link to="mail">To Mail</router-link>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
export default {
  components: {TheNavbar}

}
</script>

<style scoped>

</style>