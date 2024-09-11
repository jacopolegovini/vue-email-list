const {createApp} = Vue;
createApp({
    data() {
      return {
        email: '',
        apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail' 
    }
    },
    methods: {
        generateEmail() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.email = response.data.response;
                    return this.email
                })
        }
    }

}).mount('#app')