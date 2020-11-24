<template>
  <div class="more">
    <h1>Note numéro {{$route.params.id}}</h1>
    <br>
    <br>
    <OneNote :noteId="`${$route.params.id}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OneNote from '@/components/OneNote.vue'

export default {
  name: 'Home',
  components: {
  OneNote
  }
}
</script>