<template>
  <div class="col-md-4">
    <div class="joke-card ">
      <div class="card-block">
        <button class="close" @click="removeJoke(index)" ><span>&times;</span></button>
        <p><u>{{jokes.setup}}</u></p>
        <p><em>{{jokes.punchline}}</em></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {mapActions}  from 'vuex'

  export default{
    props:['jokes', 'index'],
    mothods: mapActions([
    'removeJoke'
  ])
  }
</script>
