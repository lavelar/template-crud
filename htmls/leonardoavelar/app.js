<<<<<<< HEAD
let App = new Vue({
=======
var App = new Vue({
>>>>>>> 34f37a0a1598d4ce1a2545845805ed795d337e00
  el: '#app',
  data: {
    user: '',
    repositorios: []
  },	
<<<<<<< HEAD
  methods: {
    searchData: () => {

      this.$http.get(`http://api.github.com/users/${App.user}/repos`).then( ({ data }) => {
        this.repositorios = data
      })
    }
  }
})
=======
  methods: {    
  },
})

function searchData() {
  App.$http.get(`http://api.github.com/users/${App.user}/repos`).then( ({ data }) => {
    App.repositorios = data
  })
}
>>>>>>> 34f37a0a1598d4ce1a2545845805ed795d337e00
