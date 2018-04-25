<template>
  <div>
    <FloderTitle v-if="floder" v-bind:parentFloder="floder"></FloderTitle>
  </div>
</template>

<script>

import FloderTitle from './FloderTitle.vue'
// import Vue from 'vue'
// const FloderTitle = Vue.component('FloderTitle', require('./FloderTitle.vue'))

export default {
  name: 'Floder',
  data () {
    return {
      floder: [
        {
          tit: '一级标题',
          con: [
            {
              tit: '二级标题',
              con: [
                {
                  tit: '三级标题',
                  con: [
                    {
                      tit: '四级标题'
                    },
                    {
                      tit: '四级标题'
                    },
                    {
                      tit: '四级标题'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          tit: '一级标题',
          con: [
            {
              tit: '二级标题',
              con: [
                {
                  tit: '三级标题',
                  con: [
                    {
                      tit: '四级标题'
                    },
                    {
                      tit: '四级标题'
                    },
                    {
                      tit: '四级标题'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {},
  components: {
    FloderTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
