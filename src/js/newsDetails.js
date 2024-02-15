import axios from "axios";
export default {
    name: "NewsDetails",
    data() {
        return {
            postId: 0,
            posts : {}
        }
    },
    methods: {
        loadPost(id) {
            let post = {
                postId : id
            }
            axios.post('http://127.0.0.1:8000/api/post/details', post).then((response) => {
                console.log(response.data.post);
                
                //to show post image with loop
                    if(response.data.post.image != null){
                        response.data.post.image = "http://localhost:8000/postImage/" + response.data.post.image;
                    }else{
                    response.data.post.image = "http://localhost:8000/defaultImage/default.png";
                    }
                    // console.log(response.data.post.image);
                this.posts = response.data.post;
                
            }).catch((error) => console.log(error));
            
        },
        back(){
            // history.back() (build-in js function)
            this.$router.push({
                name : 'home',
            })
        },
        home(){
            this.$router.push({
                name : 'home'
            })
        },
        login(){
            this.$router.push({
              name : 'loginPage'
            })
        }
    },
    mounted () {
        this.postId = this.$route.params.newsId;
        this.loadPost(this.postId);
    },
  };