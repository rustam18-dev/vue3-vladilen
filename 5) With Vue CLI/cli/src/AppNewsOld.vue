<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>

    <app-news
        v-for="item in news"
        :key="item.id"
        :title="item.title"
        :id="item.id"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
        @unmark="unreadNews"
    >
    </app-news>

  </div>
</template>

<script>
import AppNews from "@/AppNews";

export default {
  name: 'App',
  components: {
    'app-news': AppNews
  },
  data() {
    return {
      openRate: 0,
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {
          id: 1,
          title:  'Джо байден победил на выборах в США',
          isOpen: false,
          wasRead: false,
        },
        {
          id: 2,
          title:  'Vue 3 успешно работает',
          isOpen: false,
          wasRead: false,
        },
      ],
      isOpen: false,
    }
  },
  provide() {
    return {
      title: 'Список всех новостей',
      news: this.news,
    }
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNews(id) {
      const idx = this.news.findIndex(news => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unreadNews(id) {
      const news = this.news.find(news => news.id === id);
      news.wasRead = false;
      this.readRate--;
    },
  },
}
</script>

<style scoped>
h2 {
  color: darkred;
}
</style>
