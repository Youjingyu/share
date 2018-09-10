
<template>
  <div>
    <comp1></comp1>
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
  }
}
</script>
