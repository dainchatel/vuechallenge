new Vue({
  el: '#vue-app',
  data: {
    name: 'goon',
    cave: 'daggum-rig',
    weapon: '<input type="text" value="bone axe"/>',
    brigades: 25,
    x: 0,
    y: 0,
    showing: true,
    colors: []
  },
  methods: {
    greet: function(name) {
      return 'Sup ' + name + ', or should i say, ' + this.name;
    },
    add: function(dir) {
      if (dir === 'add') {
        this.brigades++;aaaaa
      }
      else {
        this.brigades--;
      }
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    getColors: function() {
      axios.get('https://colors-54871.firebaseio.com/.json')
        .then(function (response) {
          this.colors = response.data.slice(1,7);
          this.colors.forEach((d,i) => {
            console.log(d);
            this.showing = true;
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logColors: function() {
      console.log(colors);
    },
    renderColors: function() {
      return 'hi';
    }
  }
});
