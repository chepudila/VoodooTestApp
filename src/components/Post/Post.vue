<template>
    <div id="Post">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <span>{{author}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Post',
        props: ['post', 'author'],
    }
</script>

<style lang="scss" src="./Post.scss" scoped></style>