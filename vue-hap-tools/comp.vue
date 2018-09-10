
<template>
  <div>
    <comp1 @toggle="childToggle" :username="bob"></comp1>
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
  methods: {
    childToggle () {
    }
  }
}
</script>
