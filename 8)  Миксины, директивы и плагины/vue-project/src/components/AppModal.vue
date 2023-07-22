<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal">
      <h3>Это заголовок модалки</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum eius incidunt numquam quaerat quis
        saepe velit voluptate? Corporis, eligendi!</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppModel"
}
</script>

<style scoped>

</style>
