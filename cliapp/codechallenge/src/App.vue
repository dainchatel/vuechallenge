<template>
  <div class="editor">
    <h1>JS Code</h1>
    <codemirror v-model="code" :options="editorOption"></codemirror>
    <button @click='compile'>run</button>

  </div>
</template>

<script>
'use strict';
  import { codemirror } from 'vue-codemirror'
  export default {
    components: {
      codemirror
    },
    data() {
      return {
        code: 'var dain = "hello"',
        editorOption: {
          tabSize: 4,
          styleActiveLine: true,
          line: true,
          mode: 'text/javascript',
          lineWrapping: true,
          theme: 'base16-dark'
        }
      }
    },
    methods: {
      compile() {
        var UOMSYSTEM = true;
        var stool_osm = 290;
        var stool_potassium = 1;
        var stool_sodium = 1;
        eval(this.code + ' for (var val in calc_output) {console.log(calc_output[val]);}')
   // Value: calc_output[val].value calc_output[val].value_text, Message: calc_output[val].message
  }
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
