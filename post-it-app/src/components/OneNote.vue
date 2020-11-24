<template>
  <div class="oneNote" id="oneNote">
    <div class="container">
      id : {{ getNote.id }}<br>
      title : {{ getNote.title }}<br>
      content : {{ getNote.content }}<br>
      <button>Modify</button><br>
      <button>Delete</button><br>
      <router-link to="/">Back home</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'OneNote',
  data() {
    return { Notes: [
      { id: "1", title: "note1", content: "coucou c'est moi" },
      { id: "2", title: "note2", content: "coucou encore c'est moi" },
      { id: "3", title: "note3", content: "coucou encore encore c'est moi" }
    ] }
  },
  props: {
    noteId: String
  },
  computed: {
    getNote() {
      for(var i=0; i < this.Notes.length; i++)
      {
        console.log("id " + this.Notes[i].id);
        if(this.Notes[i].id == this.noteId) return this.Notes[i];
      }
      return null;
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
  width: 55%;
  text-align: left;
  float: right;
}
td {
  list-style-type: none;
  padding: 30px;
  text-align: left;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
