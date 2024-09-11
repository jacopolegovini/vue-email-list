const {createApp} = Vue;
createApp({
    data() {
      return {
        emailsArray: [],
        apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail' 
    }
    },

    methods: {
        generateEmail() {
            for(let i = 0; i < 10; i++) {
                axios.get(this.apiUrl)
                    .then((response) => {
                        console.log(response)
                        this.emailsArray.push(response.data.response)
                    })
                }
            console.log(this.emailsArray)
            return this.emailsArray;
        }           
    }, 

    computed: {

    }, 

    mounted() {
        this.generateEmail();
    }

}).mount('#app')