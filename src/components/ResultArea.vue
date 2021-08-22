<template>
    <div>
       <h3>Results</h3>
       
       <div class="carousel-row row">
           <div class="slide-row" v-for="list in musiclist" v-bind:key="list.id">
               <div class="row">
                    <div class="col-3">
                    <div id="carousel-1" class="carousel slide slide-carousel" data-ride="carousel">
                   <div class="carousel-inner">
                       <div class="item active ml-5">
                           <img v-bind:src="list.album.images[0].url" alt="image">

                       </div>
                   </div>
               </div>
               </div>
               <div class="col-9">
                   <div class="slide-content">
                   <h2 class="mt-5">{{list.artists[0].name}} - {{list.name}}</h2>
                   <h4 class="">Album - {{list.album.name}}</h4>
               </div>
            <div class="modal-footer border-0">
                <router-link :to="{name:'track' ,params:{id:list.id}}"> <button type="button" class="btn btn-secondary">Show More</button></router-link>
           
            </div>
               </div>
              
               </div>
               
           </div>
       </div>
    </div>
</template>

<script>
export default {
    props:['musiclist'],
    name:null,
}
</script>
<style scoped>
img{
    max-width:100%;
}
.carousel-row{
    margin:30px 10%;
}
.slide-row{
    padding: 0px;
   
    background-color: #ffffff; 
    min-height: 150px;
    border: 1px solid black;
    overflow: hidden;
    height: auto;
    position: relative;
}
.slide-carousel{
    width: 95%;

}
.slide-carousel .carousel-indicators{
    margin-bottom: 0;
    bottom: 0;
    background: rgba(0, 0, 0, -5);
}
.slide-carousel .carousel-indicators li{
border-radius: 0;
width: 20px;
}
</style>