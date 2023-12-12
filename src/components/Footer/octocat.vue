<template>
  <a class="octocat-link" target="_blank" :href="link">
    <img src="../../assets/logo.png" style="width: 22px" />
  </a>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Octocat',
  setup() {
    const link = ref('https://github.com/pdsuwwz/vue-word-cloud')
    return {
      link
    }
  }
})
</script>
<style lang="scss" scoped>
.octocat-link {
  width: 22px;
  margin: 0 6px;
  color: #71717a;
  transition: 0.2s color;
  &:hover {
    color: #3f3f46;
  }
}
</style>
