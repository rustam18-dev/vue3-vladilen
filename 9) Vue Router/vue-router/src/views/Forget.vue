<template>
  <div class="card">
    <h2>Забыл пароль? Так вспоминай!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
    <button class="btn" @click="$router.push('/login')">Обратно к логину2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
