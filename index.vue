<template>
  <div class="container" :class="{'toggle-active':visibility}" @click="clickHandle('test click', $event)">
    <card :text="userInfo.nickName"></card>
    <div v-for="(item, i) in arr" :key="i">
      <input type="text" v-model="arr.name" />
    </div>
    <a href="/pages/counter/main">去往Vuex示例页面</a>
  </div>
</template>