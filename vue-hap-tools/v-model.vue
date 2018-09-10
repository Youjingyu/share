
<template>
  <div>
    <input type="text" v-model="age">
    <div v-for="(companyUser, i) in users">
      <div v-for="(user, j) in companyUser.users ">
        <input type="text" v-model="user.name">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      age: 20,
      visitors: [
        {
          company: 'sina',
          users: [{ name: 'bob' }]
        }
      ]
    }
  }
}
</script>
