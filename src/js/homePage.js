import axios from "axios";
import { mapGetters } from "vuex";
export default {
    name : 'HomePage',
    data() {
        return {
            postLists : [],
            categoryLists : [],
            searchKey : "",
            tokenStatus : false
        }
    },
    computed: {
        ...mapGetters(['storageToken', 'storageUserData'])
    },
    methods: {
        getAllPost() {
            axios.get('http://127.0.0.1:8000/api/allPostList').then((response) => {
                // this.postLists = response.data.post;
                // console.log(this.postLists.length);
                // console.log(response.data.post.length);

                //to show post image with loop
                for(let i = 0; i < response.data.post.length; i++){
                    if(response.data.post[i].image != null){
                        response.data.post[i].image = "http://localhost:8000/postImage/" + response.data.post[i].image;
                    }else{
                    response.data.post[i].image = "http://localhost:8000/defaultImage/default.png";
                    }
                    // console.log(response.data.post[i].image);
                }
                console.log(response.data.post);
                this.postLists = response.data.post;

        });
        },
        loadCategory(){
            axios.get('http://127.0.0.1:8000/api/allCategory').then((response) => {
                this.categoryLists = response.data.category;
            }).catch((error) => {
                console.log(error);
            })
        },
        //post search
        search(){
            let search = {
                key : this.searchKey
            }
            axios.post('http://127.0.0.1:8000/api/post/search', search).then((response) => {
                console.log(response.data.searchValue);
                 //to show post image with loop
                 for(let i = 0; i < response.data.searchValue.length; i++){
                    if(response.data.searchValue[i].image != null){
                        response.data.searchValue[i].image = "http://localhost:8000/postImage/" + response.data.searchValue[i].image;
                    }else{
                    response.data.searchValue[i].image = "http://localhost:8000/defaultImage/default.png";
                    }
                    // console.log(response.data.post[i].image);
                }
                this.postLists = response.data.searchValue;
            })
        },
        //category serarch
        categorySearch(searchKey){
            let search = {
                key : searchKey
            }
            axios.post('http://127.0.0.1:8000/api/category/search', search).then((response) => {
                //to show post image with loop
                for(let i = 0; i < response.data.resultCategory.length; i++){
                    if(response.data.resultCategory[i].image != null){
                        response.data.resultCategory[i].image = "http://localhost:8000/postImage/" + response.data.resultCategory[i].image;
                    }else{
                    response.data.resultCategory[i].image = "http://localhost:8000/defaultImage/default.png";
                    }
                    // console.log(response.data.post[i].image);
                }
                this.postLists = response.data.resultCategory;
                
            }).catch((error) => console.log(error));
        },
        //post datails
        newsDetails(id){
            this.$router.push({
                name : 'newsdetails',
                params: {
                    newsId : id
                }
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
        checkToken(){
            if (this.storageToken != null && this.storageToken != undefined && this.storageToken != "") {
                this.tokenStatus = true
            }else{
                this.tokenStatus = false
            }
        }
    }, 
    mounted () {
        console.log(this.storageToken);
        this.checkToken()
        this.getAllPost()
        this.loadCategory()
    },
};