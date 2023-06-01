<template>
	<a
		:href="ad.link"
		class="ad"
	>
		<img
			:src="ad.image"
			alt="image"
			class="ad__img"
		/>
		<div class="ad__title">{{ ad.title }}</div>
	</a>
</template>

<script setup lang="ts">
import { IAd } from '~/types/ads';

interface Props {
	ad: IAd;
}

defineProps<Props>();
</script>

<style scoped>
.ad {
	width: 300px;
	height: 200px;
	position: relative;
}
.ad__img {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}

.ad__title {
	position: absolute;
	bottom: 5%;
	left: 2%;
	padding: 10px;
	width: 96%;
	background-color: white;
	border-radius: 7px;
	color: black;
	font-weight: 500;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
