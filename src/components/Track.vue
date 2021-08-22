<template>
    <div>
       
        <div class="card border-white bg-white mb-3 mt-5" style="width:60%; margin:auto">
 
  <div class="card-body">
      <div class="row">
          <div class="col-5">
              <div class="item active ml-5">
                <img v-bind:src="newlist.album.images[0].url" alt="image" class="image">

                </div>
          </div>
          <div class="col-6">
              <h2 class="mt-5">{{newlist.name}}</h2>
                   <h3 class="">Artist - {{newlist.artists[0].name}}</h3>
                   <h5>Popularity - {{newlist.popularity}}</h5>
                   <a v-bind:href="newlist.preview_url"><button class="btn btn-primary mt-5"> Listen Now</button></a>
          </div>
      </div>
    
  </div>
</div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Track',
    data () {
        return {
            newlist:[],
        }
    },
    
    created(){
        axios.get("https://api.spotify.com/v1/tracks/" + this.$route.params.id,{
        headers:{
        
         "Authorization": `Bearer ${'BQAzjFvlhx_ixSCF9jBZA6VbVp0tCnMOJp_psP8j7lxCie6hV9kfIxrrTTZhjoy1UGUe2CSBgHZG3kKwaBebSTTH5Xo_BzpZmzPde325lLXj-PZ85a9KJpm3MucbCC6-TW26_MWhbF7YFkzM-MyVTeGoRZZxU1PrMyLO-YMvsviMJ72F31YAoNCgG2oJJ0sjmLv0w53CTFrU8zrN45lwDThh6rpT1taautXm3HTx-v9iTs4vxrKj3uaacwD3kkm7s4WnQkqfv64kUJl1FaQIhAaNuUwVVJBraIF0-zuy'}`
        
        }
      })
      .then(response=>{
          this.newlist=response.data;
        console.warn(this.newlist)
      })
       .catch(e=>{
          this.error = [];
          this.error.push(e)
      })
    }
}
</script>
<style scoped>
.image{
    width:90%;
}
</style>