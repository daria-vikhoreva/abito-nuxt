<template>
	<div>
		<UiLoader v-if="loading" />
		<CardListItem
			v-for="card in cards"
			:key="card.id"
			:card="card"
		/>
	</div>
</template>

<script setup lang="ts">
import { ICard } from '~/types/adverts';

interface Props {
	cards: ICard[];
	loading: boolean;
}

defineProps<Props>();
</script>
