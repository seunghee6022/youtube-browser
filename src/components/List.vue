<template>
  <!-- <div> -->
      <div class="list-group col-lg-4">
        <!-- <h1>Video List</h1> -->

        <VideoListItem v-for="item in items" 
        :key="item.etag" 
        :item="item" 
        @video-select="onVideoClick"
        />
      </div>
  <!-- </div> -->
</template>

<script>
import VideoListItem from './VideoListItem.vue'
export default {
name: 'List',
components :{
    VideoListItem,
},
props: {
    items : Array,
  
},
methods : {
    onVideoClick(item){
        console.log("VL",item.snippet.title)
        this.$emit('video-select',item)
    }
}
}
</script>

<style>

</style>