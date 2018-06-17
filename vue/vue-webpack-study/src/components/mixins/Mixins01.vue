<template>
  <div>
    mixins
  </div>
</template>
<script>
const myMixins = {
  data: function () {
    return {
      admin: 'tom'
    }
  }
}
export default {
  mixins: [myMixins],
  name: 'Mixins01',
  data: function () {
    return {
      mes: 'hello'
    }
  },
  mounted: function () {
    console.log(this.admin + '----' + this.mes) // tom----hello
  }
}
</script>
<style scoped>

</style>
