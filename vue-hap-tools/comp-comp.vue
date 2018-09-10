
<template>
  <div class="child" @click="toggle">
    age:{{age}}
  </div>
</template>
<script>

export default {
  props: ['username'],
  data () {
    return {
      age: 20
    }
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>
