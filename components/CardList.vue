<template>
	<div>
		<CardListItem
			v-for="card in cards"
			:key="card.id"
			:card="card"
		/>
	</div>
</template>

<script setup>
import axios from 'axios';

const results = await axios.get('http://45.132.19.237/adverts');

const cards = results.data;
</script>

<style scoped></style>
