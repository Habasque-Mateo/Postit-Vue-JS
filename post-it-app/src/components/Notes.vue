<template>
  <div class="notes" id="notes">
    <table>
      <tr v-for="note in Notes" :key="note.id">
        <td>
        Note : {{ note.title }}<br>
        <router-link :to="`/more/${note._id}`">More</router-link>
 </td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Notes',
  data() {
    return { Notes: [] }
  },
  created() {
    axios.get(`http://postit.wac.under-wolf.eu/notes`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.Notes = response.data.notes
    })
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
