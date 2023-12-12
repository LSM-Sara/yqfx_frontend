<template>
  <div>
    <div class="title">
      {{ props.title }}
    </div>
    <div class="content">
      {{ props.content }}
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  }
})
</script>

<style>
.title {
}
.content {
}
</style>
