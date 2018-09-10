
<template>
  <div>
    <comp1></comp1>
    <div @click="togglge"></div>
  </div>
</template>
<script>
import comp1 from './comp1'

export default {
  data () {
    return {
      name: 'bob'
    }
  },
  components: {
    comp1
  },
  mounted () {},
  watch: {
    name () {}
  },
  computed: {
    age () {
      return 20
    }
  },
  methods: {
    togglge () {}
  }
}
</script>
