<template>
  <div class="notes" id="notes">
    <table>
      <tr v-for="note in Notes" :key="note.id">
        <td>id : {{ note.id }}<br>
        title : {{ note.title }}<br>
        content : {{ note.content }}<br>
        <router-link :to="`/more/${note.id}`">More</router-link>
 </td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: 'Notes',
  data() {
    return { Notes: [
      { id: "1", title: "note1", content: "coucou c'est moi" },
      { id: "2", title: "note2", content: "coucou encore c'est moi" },
      { id: "3", title: "note3", content: "coucou encore encore c'est moi" }
    ] }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
