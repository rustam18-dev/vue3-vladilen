<template>
<!--  <app-alert-->
<!--      v-if="alert"-->
<!--      type="danger"-->
<!--      title="Работа с Composition API"-->
<!--      @close="close"-->
<!--  >-->
<!--  </app-alert>-->

  <div class="card">
    <h1>Vue Composition Api </h1>
    <small>data, methods, computed, watch</small>
    <div class="form-control">
      <input type="text" v-model="firstName">
    </div>
    <button class="btn" @click="change">Изменить</button>
  </div>

  <FrameworkInfo
      @change-version="changeVersion"
  />
</template>

<script>
import AppAlert from "@/AppAlert";
import FrameworkInfo from "@/FrameworkInfo";
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  ref,
  watch
} from "vue";

export default {
  components: {
    FrameworkInfo,
    AppAlert
  },
  setup(props, context) {
    const name = ref('VueJs')
    const version = ref(3)
    const firstName = ref('');


    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })
    watch(firstName, (newV, oldV) => {
      console.log(newV);
      console.log(oldV);
    })

    const changeInfo = () => {
      name.value = 'Vue JS!';
      version.value = 42;

    }

    const changeVersion = (number) => {
      version.value = number
    }

    provide('name', name)
    provide('version', version)

    return {
      change: changeInfo,
      firstName,
      changeVersion,
    }

  }
}
</script>

<style scoped>

</style>