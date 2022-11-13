<template>
  <div id="app">
    <div v-if="isLoading" class="spinner">
      <img src="./assets/spinner.gif" alt="Загрузка">
    </div>
    <todo-list v-else/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import { mapState, mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    TodoList
  },
  async created() {
    setTimeout(await this.fetchUser, 1000)
  },
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
}
</script>

<style>
html {
  height: 100%;
}
body {
  min-height: 100%;
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
