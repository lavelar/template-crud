let App = new Vue({
  el: '#app',
  data: {
    user: '',
    repositorios: []
  },	
  methods: {
    searchData: () => {

      App.$http.get(`http://api.github.com/users/${App.user}/repos`).then( ({ data }) => {
        App.repositorios = data
      })
    }
  }
})
