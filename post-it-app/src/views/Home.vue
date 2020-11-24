<template>
  <div class="home" >
    <h1>All post-it</h1>
    <button>Add new note</button>
    <Notes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from '@/components/Notes.vue'

export default {
  name: 'Home',
  components: {
  Notes
  }
}
</script>
