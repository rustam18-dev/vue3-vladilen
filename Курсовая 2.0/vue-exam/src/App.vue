<template>
  <div class="container column">
    <form class="card card-w30">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" @change="onTypeChange">
          <option value="title">Заголовок</option>
          <option value="subtitle">Подзаголовок</option>
          <option value="avatar">Аватар</option>
          <option value="text">Текст</option>
        </select>
      </div>


      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value" rows="3" v-model.trim="value"></textarea>
      </div>

      <button class="btn primary" :disabled="!isValid" @click.prevent="send(type, value)">Добавить</button>
    </form>

    <div class="card card-w70">
      <div v-if="checkOfData">
        <div v-for="(blockItem, index) in block" :key="index">

          <h1 v-if="blockItem.type === 'title'">{{ blockItem.value }}</h1>

          <div class="avatar" v-if="blockItem.type === 'avatar'">
            <img :src="blockItem.value">
          </div>

          <h2 v-if="blockItem.type === 'subtitle'">{{ blockItem.value }}</h2>

          <p v-if="blockItem.type === 'text'">{{ blockItem.value }}</p>

        </div>
      </div>
      <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>

  </div>
  <div class="container">
    <p>
      <button class="btn primary" @click="loadingData">Загрузить комментарии</button>
    </p>
    <div class="card" v-if="!loading">
      <h2>Комментарии</h2>
      <span>Пока пусто.</span>
      <ul class="list">
        <li class="list-item" v-for="item in data" :key="data.id">
          <div>
            <p><strong>{{ item.email }}</strong></p>
            <small>{{ item.body }}</small>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-else></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      type: 'title',
      value: '',
      title: null,
      subtitle: null,
      avatar: null,
      text: null,
      data: null,
      description: null,
      block: [],
      loading: false,
    };
  },
  mounted() {

  },
  computed: {
    checkOfData() {
      return this.block.length > 0;
    },
    isValid() {
      return this.value.length > 3
    }
  },
  methods: {
    onTypeChange(event) {
      this.type = event.target.value;
    },
    send(type, value) {
      const propertyMap = {
        title: 'title',
        subtitle: 'subtitle',
        avatar: 'avatar',
        text: 'text',
      };

      if (propertyMap.hasOwnProperty(type)) {
        // this[propertyMap[type]] = value;
        const block = {
          type,
          value
        };
        this.block.push(block);
      }
      this.value = '';
    },
   async loadingData() {
      this.loading = true
      const resp = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')
      this.data = resp.data
      this.loading = false
    }
  }
};

</script>

<style>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }
</style>
