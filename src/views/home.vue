<template>
  <!-- <button @click="fn(user)">1</button>
  <button @click="fn(mail)">2</button>
  <component :is="a"></component>

  <div v-focuss="123"></div> -->
  Home
</template>
<script setup lang="ts">
import user from "@/views/admin/user.vue"
import mail from "@/views/member/mail.vue"
import { reactive, ref, shallowRef } from "vue";
const table = reactive({
  user,
  mail
})
const a = shallowRef(user)
const fn = (value: any) => {
  a.value = value
} 
</script>

<style lang="scss">

</style>