<template>
  <div class="container">

    <app-alert :alert="alert" @close="alert = null"></app-alert>

    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>
    <div>
      <app-loader v-if="loading"></app-loader>
      <app-people-list
          v-else
          :people="people"
          @load="loadPeople"
          @remove="removePerson"
      ></app-people-list>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import AppLoader from "@/AppLoader"
import AppAlert from "@/AppAlert";
import AppPeopleList from "@/AppPeopleList";

export default {

  data() {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false,
    }
  }, mounted() {
      this.loadPeople();
  },
  methods: {
   async createPerson() {
     const response = await fetch('https://vue-with-http-ef76f-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: this.name,
        })
      })

     const firebaseData = await response.json();

     this.people.push({
       firstName: this.name,
       id: firebaseData.name
     })
     this.name = '';
     await this.loadPeople()
    },
    loadPeople() {
      this.loading = true
      setTimeout(async () => {
        try {
          const {data} =  await  axios.get('https://vue-with-http-ef76f-default-rtdb.firebaseio.com/people.json')
          if (!data) {
            throw new Error('Список людей пуст')
          }
          this.people = Object.keys(data).map(key => {
            return {
              id: key,
              ...data[key],
            };
          },);
          this.loading = false
        } catch (e) {
          this.alert = {
            type: 'danger',
            title: 'Ошибка',
            text: e.message,
          }
          this.loading = false
        }
      }, 1)
    },
    async removePerson(id) {
     try {
       const name = this.people.find(person => person.id === id).firstName
       await axios.delete(`https://vue-with-http-ef76f-default-rtdb.firebaseio.com/people/${id}.json`)
       this.people = this.people.filter(person => person.id !== id)
       this.alert = {
         type: 'primary',
         title: 'Успешно',
         text: `Пользователь c именем "${name}" успешно удалён!`,
       }
     } catch (e) {

     }
    },
  },
  components: {
    AppLoader,
    AppAlert,
    AppPeopleList},
};
</script>

<style>

</style>
