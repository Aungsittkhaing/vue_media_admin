import axios from "axios";
import { mapGetters } from "vuex";

  export default {
        name : 'LoginPage',
        data() {
            return {
                userData : {
                    email : "",
                    password : ""
                },
                tokenStatus : false,
                userStatus : false
            }
        },
        computed: {
            ...mapGetters(['storageToken', 'storageUserData'])
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
            logout(){
                this.$store.dispatch('setToken', null);
                console.log(this.storageToken);
                this.login()    
            },
            accountLogin(){
                axios.post('http://127.0.0.1:8000/api/user/login', this.userData).then((response) => {
                    if (response.data.token == null) {
                        this.userStatus = true;
                        console.log("There is no users");
                    }else{
                        this.userStatus = false;
                        this.storeUserInfo(response);
                        console.log('token success');
                        this.home();
                    }
                    
                }).catch((error) => console.log(error)
                );
            },
            storeUserInfo(response){
                this.$store.dispatch('setToken', response.data.token);
                this.$store.dispatch('setUserToken', response.data.user);
                console.log('Token store success');   
            },
            check(){
                console.log(this.storageToken);  
                console.log(this.storageUserData);
                
            }
        },
    }