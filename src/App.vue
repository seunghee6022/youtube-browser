<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBar @result='addResult'/>
    <div class="row">
       <Detail :video="selectedVideo"/>
    <List :items="items" @video-select="onVideoClick"/>
  
    </div>
   
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import Detail from './components/Detail.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    Detail,
    List 
  },
  data () {
    return {
      items : [],
      selectedVideo : null,
    }
  },
  methods : {
    addResult (items) {
      this.items = items
      console.log(this.items)
    },
    onVideoClick(video){
      console.log("APP:",video.snippet.title)
      this.selectedVideo = video
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
