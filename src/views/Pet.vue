<template>
  <div>
    <h1>{{ animal.name }}</h1>
    <p>{{ animal.age }}</p>
    <p>{{ animal.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function() {
    return {
      animal: {}
    }
  },
  computed : {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted: function() {
    const animal = this[this.$route.params.species][this.$route.params.id]; // access the mapState's array element identified by name
    this.animal = animal;
  }
};
</script>

<style>
</style>
