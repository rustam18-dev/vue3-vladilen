<template>
  <app-alert
      v-if="alert"
      type="primary"
      title="Работа с Composition API"
      @close="close"
  >
  </app-alert>

  <div class="card">
    <h1>Переиспользование</h1>


    <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщение</button>

    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from "@/AppAlert";
import {useAlert} from "@/use/alert";

export default {
  setup() {
    const {alert , close, toggle} = useAlert()

    const router = useRouter()
    const route = useRoute()

    const navigate = () => router.push('/')

    return {
      navigate,
      ...useAlert(true)
    }
  },
  components: {
    AppAlert
  }
}
</script>

<style scoped>

</style>