<template>
  <div class="hello">
    <input type='text' placeholder="黑，请输入" v-model="newName"/>
    <p>{{ newName }}</p>
    <p>{{ old }}</p>
  </div>
</template>

<script>
export default {
  name: 'Form01',
  data () {
    return {
      name: 'tom',
      old: '18'
    }
  },
  computed: {
    newName: {
      get: function () {
        return this.name + ' lucy'
      },
      set: function () {
        this.old = '19'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/varibles.scss";

</style>
