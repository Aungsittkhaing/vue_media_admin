import axios from "axios";
export default {
    name : 'HomePage',
    data() {
        return {
            postLists : [],
            categoryLists : [],
            searchKey : ""
        }
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
        search(){
            let search = {
                key : this.searchKey
            }
            axios.post('http://127.0.0.1:8000/api/category/search', search).then((response) => {
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
        }
    }, 
    mounted () {
        this.getAllPost()
        this.loadCategory()
    },
};