<template>
<div class="container mt-4">
 
  
  <div class="row">
    <form>
        <fieldset>
          <legend>Music App</legend>
          <div class="row ">
              <div class="form-group row pl-sm-5">
            <label for="staticEmail" class="col-sm-2 col-form-label pl-sm-5 text-center">Search Music</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="staticEmail" placeholder="Enter Here" @input="keypressed">
            </div>
          </div>
          </div>
        </fieldset>
    </form>
  </div>
  <div class="row mt-5">
    <div class="col-md-12">     
       
       <result-area v-bind:musiclist="musiclist"/>
      
    </div>
 
</div>

</div>
    
</template>

<script>
import axios from 'axios';
import ResultArea from "./ResultArea"

export default {
  name: 'Home',
  data () {
    return {
    musiclist:[],
    }
  },
  components:{
    ResultArea
  
  },
  
  methods:{
    keypressed(event){
      var key = event.target.value;
     
      axios.get("https://api.spotify.com/v1/search?q="+ key + "&type=track",{
        headers:{
        
         "Authorization": `Bearer ${'BQAzjFvlhx_ixSCF9jBZA6VbVp0tCnMOJp_psP8j7lxCie6hV9kfIxrrTTZhjoy1UGUe2CSBgHZG3kKwaBebSTTH5Xo_BzpZmzPde325lLXj-PZ85a9KJpm3MucbCC6-TW26_MWhbF7YFkzM-MyVTeGoRZZxU1PrMyLO-YMvsviMJ72F31YAoNCgG2oJJ0sjmLv0w53CTFrU8zrN45lwDThh6rpT1taautXm3HTx-v9iTs4vxrKj3uaacwD3kkm7s4WnQkqfv64kUJl1FaQIhAaNuUwVVJBraIF0-zuy'}`
        
        }
      })
      .then(response=>{
        this.musiclist=response.data.tracks.items
        console.log(response.data.tracks.items)
      })
      .catch(e=>{
          this.error = [];
          this.error.push(e)
      })
    }
  }
 
}
</script>