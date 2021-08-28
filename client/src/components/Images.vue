<template>
<div class="gallery">
    <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="image.src" />
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "Images",
    data() {
        return {
            images: []
        }
    },
    methods: {
        async getAllImages() {
            const images = await axios.get('http://localhost:5000');

            this.images = images.data;
        }
    },
    async created() {
        await this.getAllImages();
    }
}
</script>

<style>
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: 0.5rem;
}

.gallery-item img {
    width: 100%;
    height: 22vw;
    object-fit: cover;
    /* border-radius: 0.75rem; */
}
</style>
