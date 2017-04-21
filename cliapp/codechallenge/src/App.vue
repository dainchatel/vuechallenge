<template>
<div>
  <header class='header-big'>
    <img src='./assets/logo.png' alt='md calc logo'/>
  </header>
  <div class="editor">
    <h1>Code Editor</h1>
    <codemirror class='codemirror' v-model="code" :options="editorOption"></codemirror>
  </div>
    <div class='form-holder'>
      <div class='input-holder'>
        <div class='inputter'>
          <label>UOMSYSTEM</label>
          <input v-model="uomsystem" type='boolean'/>
        </div>
        <div class='inputter'>
          <label>stool_osm</label>
          <input v-model="stool_osm" type='number'/>
        </div>
        <div class='inputter'>
          <label>stool_potassium</label>
          <input v-model="stool_potassium" type='number'/>
        </div>
        <div class='inputter'>
          <label>stool_sodium</label>
          <input v-model="stool_sodium" type='number'/>
        </div>
        </div>
      <button @click='compile'>Run</button>
    </div>
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
        uomsystem: true,
        stool_osm: 290,
        stool_potassium: 1,
        stool_sodium: 1,
        answer: {},
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
        var UOMSYSTEM = this.uomsystem;
        var stool_osm = this.stool_osm;
        var stool_potassium = this.stool_potassium;
        var stool_sodium = this.stool_sodium;

// given input for easy access

//         var calc_output = [];
// var v = parseFloat(stool_osm) - (2 * (parseFloat(stool_potassium) + parseFloat(stool_sodium)));
// var msg = '';
// var mini_msg = '';
// if (v > 100) { mini_msg = 'Osmotic Diarrhea';
//    msg = 'While definitions vary, some sources suggest a Stool Osmolar Gap > 100 as being a predominantly osmotic diarrhea.' }
// if (v <= 100) { mini_msg = 'Secretory Diarrhea';
//    msg = 'While definitions vary, some sources suggest a Stool Osmolar Gap \u2264 100 as being a predominantly secretory diarrhea.' }
// calc_output.push({ name: 'mini', value: v.toFixed(0), value_text: 'mOsm/kg', message: mini_msg });
// calc_output.push({ name: 'Stool Osmolar Gap', value: v.toFixed(0), value_text: 'mOsm/kg', message: msg });

        eval(this.code + ' for (var val in calc_output) {console.log(calc_output[val]);}')

// I tried this and it didn't work -- going to play around with it more later
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

.header-big {
  height: 15vh;
  background-color: #1bb193;
  margin: -2vh -2vw 0 -2vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 10vh;
}

h1 {
  text-align: center;
  font-family: 'Roboto';
  color: rgba(60,60,60,.6);
  margin: 1vh 0;
}

button {
  background-color: #ffb600;
  height: 10vh;
  width: 23vw;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 5vh;
  color: white;
}

.form-holder {
  margin: 4vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-holder {
  margin-bottom: 4vh;
  display: flex;
  justify-content: space-around;
}

label {
  font-size: 2vh;
  font-family: 'Roboto';
  color: rgba(60,60,60,.4);
}

input {
  height: 5vh;
  margin: 0 2vw;
  border-radius: 5px;
  border: 1px solid rgba(60,60,60,.3);
  font-size: 3vh;
  color: rgba(60,60,60,.7);
  font-family: 'Roboto';
  width: 19vw;
}

.inputter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
