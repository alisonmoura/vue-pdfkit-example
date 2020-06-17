<template>
  <div class="row justify-end">
    <button @click="changeMode" v-if="!darkMode">Dark Mode</button>
    <button @click="changeMode" v-else>Light Mode</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    changeMode() {
      this.darkMode = !this.darkMode
      if (this.darkMode) document.querySelector('body').classList.add('dark')
      else document.querySelector('body').classList.remove('dark')
    }
  }
}
</script>

<style></style>
