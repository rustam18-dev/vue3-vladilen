<template>
  <div>
    <div class="card" style="margin-top: 5px;">
      <h2>{{ title }}</h2>
      <app-button
          @action="open()"
      >
        {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
      <app-button
          color="danger"
          v-if="wasRead"
          @action="$emit('unmark', id)"
      >
        Отметить непрочитанной</app-button>
      <div v-if="isNewsOpen">
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa explicabo hic laborum minus, nam natus
          nesciunt repudiandae sint suscipit?</p>
        <app-button
            v-if="!wasRead"
            color="primary"
            @action="mark"
        >
          Прочесть новость</app-button>

        <app-news-list></app-news-list>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/AppButton";
import AppNewsList from "@/AppNewsList";

export default {
  components: {
    AppButton,
    AppNewsList
  },
  props: {
    wasRead: Boolean,
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Нет параметра ID для emit read-news')
      return false
    },
    unmark: null,
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      read: this.readRate,
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark() {
    //   this.$emit('unmark', this.id)
    // },
  },
}
</script>

<style scoped>

</style>
