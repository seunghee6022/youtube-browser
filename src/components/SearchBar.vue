<template>
  <div>
      <!-- v-model 쓰는 이유: 여기 vue파일에서만 사용할 것이므로 -->
      <input type="text" v-model='search' class="w-75 mb-3" @keypress.enter="searchVideo(search)">
      <button @click="searchVideo(search)">검색</button>
  </div>
</template>

<script>
import axios from 'axios'

const API_KEY = process.env.VUE_APP_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
name : "SearchBar",
    
data () {
    return{
        search :'',
    }
},
methods: {
    searchVideo (search) {
        this.search = search
        axios.get(API_URL,{
            params:{
            key:API_KEY,
            part : 'snippet',
            type : 'video',
            q : this.search,
            }
        })
       .then(res =>{
           res.data.items.forEach(item=>{
               const parser = new DOMParser()
               const doc = parser.parseFromString(item.snippet.title, 'text/html')
               item.snippet.title = doc.body.innerText
           })
        //    this.videos = res.data.items
           console.log(res.data.items)
           this.$emit('result',res.data.items)
       })
       .catch(err => console.error(err))
    }
}
}
</script>

<style>

</style>