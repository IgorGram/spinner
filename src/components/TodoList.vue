<template>
  <div>
    <div class="title">
      <h1>Изучайте <span style="color: blue">актуальные темы</span></h1>
    </div>
    <div v-if="data">
      <todo-list-item
          v-for="(item, index) in data"
          :key="index"
          :title="item.direction.title"
          :courseCount="item.groups.length"
      />
    </div>
  </div>
</template>

<script>
import TodoListItem from "@/components/TodoListItem";
import { mapState } from "vuex";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  computed: {
    ...mapState(['data']),
  }
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid lightgray;
}
</style>
