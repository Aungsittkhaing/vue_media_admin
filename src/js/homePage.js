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
                this.postLists = response.data.post;
        console.log(this.postLists);

        });
        }
    }, 
    mounted () {
        this.getAllPost()
    },
};