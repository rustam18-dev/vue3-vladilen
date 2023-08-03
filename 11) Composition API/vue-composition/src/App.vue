<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api </h1>
      <small>data, methods, computed, watch</small>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
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

    // console.log(isRef(name))
    // console.log(isRef(version.value))

    const framework = reactive({
      name: 'VueJS',
      version: 3,
    })

    // const doubleVersion = computed(() => {
    //   return version.value * 2
    // })

    const doubleVersion = computed(() => version.value * 2)

    // console.log(isRef(doubleVersion))
    // console.log(doubleVersion.value)


    // console.log(isReactive(framework))
    // console.log(isReactive(framework.name))

    watch([doubleVersion, name], (newValues, oldValues) => {
    console.log('new doubleVersion', newValues[0]);
    console.log('new name', newValues[1]);
    console.log('old doubleVersion', oldValues[0]);
    console.log('old name', oldValues[1]);
    })

    function changeInfo() {
      name.value = 'Vue JS!';
      version.value = 42;
      // framework.name = 'Vue JS!';
      // framework.version = 42;
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      doubleVersion,
    }

  },
  // data() {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo() {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>
