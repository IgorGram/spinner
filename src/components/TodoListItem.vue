<template>
  <div class="root">
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ `${courseCount} курсов` }}</div>
    </div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    title: {
      type: String,
      default: 'title',
    },
    courseCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 15px;
  border-bottom: 1px solid lightgray;
  height: 40px;
}

.circle {
  background: lightgray;
  height: 30px;
  width: 30px;
  opacity: 0.4;
  border-radius: 50%;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.subtitle {
  color: grey;
}

.info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: inherit;
}
</style>
