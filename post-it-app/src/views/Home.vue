<template>
  <div class="home" >
    <h1>All post-it</h1>
    <button v-on:click="toggleModal">Add new note</button>
    <div v-show="showModal" class="modal">
      <br><br>
      <form id="addNote">
        <input type="text" id="titleNote" placeholder="TITLE">&nbsp;
        <button v-on:click="addStep"> + Step</button><br>
        <span v-html="stepCounter"></span>
        <p><button v-on:click="createNote">CREATE</button></p>
      </form>
    </div>
    <br>
    <Notes/>
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from '@/components/Notes.vue'
import axios from 'axios';


export default {
  name: 'Home',
  components: {
  Notes
  },
  data() {
    return { showModal: false, stepCounter: "", nextStepId: 0 }
  },
  computed: {
    postBody() {
      var retTitle = document.getElementById("titleNote").value;
      var retContent = new Array();
      for(var i = 0; i < this.nextStepId; i++)
      {
        var oStep = document.getElementById("step" + (i + 1)).value;
        if(oStep != "") retContent.push(oStep);
      }

      return { title: retTitle, content: retContent };
    }
  },
  methods: {
    toggleModal: function() {
      this.showModal = !this.showModal;
    },
    addStep() {
      this.nextStepId++;
      this.stepCounter += `<p><input type'text' id='step${this.nextStepId}' placeholder='New step'></p>`;
    },
    createNote() {
      if(this.postBody.title == "")
      {
        alert("Please insert a title and at least one step");
        return;
      }
      axios({
          method: 'post',
          url: 'http://postit.wac.under-wolf.eu/notes',
          data: this.postBody
      })
      .then(() => {
        alert("Note created");
        document.location.reload();
      })
    }
  }
}
</script>
