<template>
  <div class="container">
    <app-alert
        v-if="alert"
        title="Внимание!"
        text="Это сообщение очень важное, будьте бдительны"
        type="danger"
        @close="alert = false"
    >
    </app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert";
import alertMixin from "@/alertMixin";
export default {
  mixins: [alertMixin],
  name: 'App',
  components: {
    AppAlert
  },

}
</script>

<style>
</style>
