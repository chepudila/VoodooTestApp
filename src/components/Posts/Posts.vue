<template>
    <div id="Posts">
        <div>
            <input type="search" v-model="search">
        </div>
        <div>
            <post v-for="post of showPosts" v-bind:key="post.id" v-bind:post="post" v-bind:author="getAuthorName(post.userId)"></post>
        </div>
    </div>
</template>

<script>
    import Post from "../Post/Post.vue";

    export default {
        name: 'Posts',
        data () {
            return {
                posts: {},
                users: {},
                search: '',
            }
        },
        created: function () {
            this.axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data;
            });
            this.axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
                this.users = response.data;
            });
        },
        components: {
            "post": Post,
        },
        computed: {
            showPosts: function () {
                if (this.search.length > 0) {
                    let tempUsers = this.users.filter(user => user.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
                    let tempPosts = this.posts.filter(function(post) {
                        for (const key in tempUsers) {
                            if (Object.hasOwnProperty.call(tempUsers, key)) {
                                const user = tempUsers[key];
                                if (user.id == post.userId) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    });
                    return tempPosts;
                }
                return this.posts;
            }
        },
        methods: {
            getAuthorName: function (id) {
                for (const key in this.users) {
                    if (Object.hasOwnProperty.call(this.users, key)) {
                        const element = this.users[key];
                        if (element.id == id) {
                            return element.name;
                        }
                    }
                }
                return '';
            },
        },
    }
</script>

<style lang="scss" src="./Posts.scss" scoped></style>