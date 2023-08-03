<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api </h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>
      <button class="btn" @click="change">Изменить</button>
    </div>

    <FrameworkInfo
        :name="name"
        :version="version"
        @change-version="changeVersion"
    />
  </div>
</template>

<script>
import FrameworkInfo from "@/FrameworkInfo";
import {
    ref,
    reactive,
    toRefs,
    isRef,
    isReactive,
    computed,
    watch,

} from 'vue'

export default {
  setup() {
    const name = ref('VueJs')
    const version = ref(3)
    const firstName = ref('');

    // const doubleVersion = computed(() => version.value * 2)

    // watch([doubleVersion, name], (newValues, oldValues) => {
    // console.log('new doubleVersion', newValues[0]);
    // console.log('new name', newValues[1]);
    // console.log('old doubleVersion', oldValues[0]);
    // console.log('old name', oldValues[1]);
    // })

    watch(firstName, (newV, oldV) => {
      console.log(newV);
      console.log(oldV);
    })

    function changeInfo() {
      name.value = 'Vue JS!';
      version.value = 42;

    }

    function changeVersion(number) {
      version.value = number
    }

    return {
      name,
      version,
      change: changeInfo,
      firstName,
      changeVersion,
    }

  },
  components: {
    FrameworkInfo
  }
}
</script>
