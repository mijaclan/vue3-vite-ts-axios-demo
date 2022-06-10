<script lang="ts">
import {postName } from '../api/postData';
import{ getLoveTalk,getQqState } from '../api/hanApi'

// 调用的方式async await 当然其他的也可以
async function fetchPostNameData(params:any) {
  const res = await postName(params)
  if(res.status == 200) {
    return res.data
  }
}

async function fetchGetLoveTalk() {
  const res = await getLoveTalk()
  if(res.status == 200) {
    return res.data
  }
}

async function fetchGetQqState(params:object) {
  const res = await getQqState(params)
  if(res.status == 200) {
    return res.data
  }
}


export default {
  props: { msg: String },
  setup() {
    // 调用
    function loveTalk() {
      console.log('get loveTalk',fetchGetLoveTalk())
    }

    function qqState() {
      console.log('post qqState',fetchGetQqState({ qq: '1655466387' }))
    }

    function name() {
      console.log('大概会被404，没有找到post相关的公共接口这个是我本地的')
      console.log('post name',fetchPostNameData({ name: '沧浪' }))
    }
    return {
      name,loveTalk,qqState
    }
  }
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>tips: see browser controller</h3>
  <button type="button" @click.self="loveTalk()" >get loveTalk</button>
  <button type="button" @click.self="qqState()" >post qqState</button>
  <button type="button" @click.self="name()" >post name</button>
</template> 

<style scoped>
  button {
    margin: 0 10px;
  }
</style>
