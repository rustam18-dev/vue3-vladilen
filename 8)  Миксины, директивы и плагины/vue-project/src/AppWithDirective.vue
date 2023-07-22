<template>
  <div class="container">
    <div class="card">
      <h2 v-color:[type].blink.hover="myColor" v-if="show">Разговор про директивы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label>
        <input  type="text" id="inp" v-focus >
      </div>
      <button class="btn" @click="myColor = 'darkblue'">Сделать синим!</button>
      <button class="btn" @click="type = type === 'color' ? 'background' : 'color' ">Переключить тип!</button>
      <p>{{ type }}</p>
    </div>
  </div>
</template>

<script>
import focusDirective from "@/focusDirective";
import colorDirective from "@/components/colorDirective";

export default {
  data() {
    return {
      myColor: 'darkred',
      type: 'color',
      show: true,
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  }
}
</script>

<style scoped>

</style>
