<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang">{{ $i18n('app.changeBtn') }}</button>
      <button class="btn primary" @click="modal = true">Открыть модалку</button>
    </div>

    <teleport to="#modal">
      <app-modal
          v-if="modal"
          @close="modal = false"
      >

      </app-modal>
    </teleport>

  </div>
</template>

<script>
import AppModal from "@/components/AppModal";

export default {
  components: {
    AppModal
  },
  data() {
    return {
      modal: false,
    }
  },
  inject: ['changeI18N'],
  methods: {
    changeLang() {
      this.changeI18N('en')
      this.$forceUpdate()
    },
  },
}
</script>

<style scoped>

</style>
