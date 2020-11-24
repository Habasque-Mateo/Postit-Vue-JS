<template>
  <div class="oneNote" id="oneNote">
    <div class="container">
      <button v-on:click="modifyNote">Modify</button> 
      <button v-on:click="deleteNote">Delete</button><br><br>
      <strong>Note : {{ Note.title }}</strong><br><br>
      <u>Steps</u> : 
      <ul>
        <li v-for="step in Note.content" :key="step">
          {{ step }}
        </li>
        </ul><br>
      <router-link to="/">Back home</router-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'OneNote',
  data() {
    return { Note: [] }
  },
  props: {
    noteId: String
  },
  created() {
    axios.get(`http://postit.wac.under-wolf.eu/notes/${this.noteId}`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.Note = response.data.note
    })
  },
  methods: {
    deleteNote: function() {
      axios.delete(`http://postit.wac.under-wolf.eu/notes/${this.noteId}`)
      .then(() => {
        alert("Note deleted");
        this.$router.push('/')
      })
    },
    modifyNote: function() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
.container {
  width: 70%;
  text-align: left;
  float: right;
}
td {
  list-style-type: none;
  padding: 30px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
