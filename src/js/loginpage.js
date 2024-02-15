import axios from "axios";
  export default {
        name : 'LoginPage',
        data() {
            return {
                userData : {
                    email : "",
                    password : ""
                }
            }
        },
        methods: {
            home(){
                this.$router.push({
                    name : 'home'
                })
            },
            login(){
                this.$router.push({
                  name : 'loginPage'
                })
            },
            accountLogin(){
                axios.post('http://127.0.0.1:8000/api/user/login', this.userData).then((response) => {
                    if (response.data.token == null) {
                        console.log("There is no users");
                    }else{
                        console.log("Login Success");  
                    }
                    
                }).catch((error) => console.log(error)
                );
            }
        },
    }