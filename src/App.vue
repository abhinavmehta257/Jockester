<template id="">
  <div id='app'>
    <h3>GOT JOKES ??</h3>
    <button type="button" class="btn btn-outline-success" @click='initJokes'name="button">Add ten random jokes</button>
    <button type="button" class="btn btn-outline-primary" @click='addJoke'name="button">Add random jokes</button>
    <br>
    <br>
    <div class="col-md-12">
      <div class="row">
        <joke
        v-for='(joke, index) in $store.state.jokes'
        :jokes='joke'
        :index='index'
        />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapActions}  from 'vuex'
  import joke from './components/jokes.vue'
  export default{

    methods:  mapActions([
    'initJokes',
    'addJoke',
    'removeJoke'
    ]),
  components:{
    joke
  }
  }

</script>
