<template>
  <div class="div-video-item" @click="onVideoClick(item)">
      <li class="list-group-item d-flex">
          
          <img :src="getThumbnailUrl" alt="youtube-thumbnail-image">
          <p class="video-item" >{{ item.snippet.title }}</p>
      </li>
  </div>
</template>

<script>
export default {
name : 'VideoListItem',
props : {
    item : Object,
},
methods : {
    onVideoClick (item) {
        console.log("VLI: ",item.snippet.title)
        this.$emit('video-select',item)

    }
},
computed : {
    getThumbnailUrl () {
        return this.item.snippet.thumbnails.default.url
    }
}
}
</script>

<style>

.video-item{
    margin : auto 10px;
    padding : 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  
}
.div-video-item :hover {
    background-color: beige;
    cursor : pointer;
    overflow: visible;
}
</style>