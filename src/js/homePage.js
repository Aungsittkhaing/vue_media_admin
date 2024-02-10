import axios from "axios";
export default {
    name : 'HomePage',
    data() {
        return {
            postLists : []
        }
    },
    methods: {
        getAllPost() {
            axios.get('http://127.0.0.1:8000/api/allPostList').then((response) => {
                // this.postLists = response.data.post;
                // console.log(this.postLists);
                // console.log(response.data.post.length);
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
        }
    }, 
    mounted () {
        this.getAllPost()
    },
};