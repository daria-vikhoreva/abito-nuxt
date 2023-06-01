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
import { ICards } from '~/types/cards';

interface Props {
	cards: ICards;
	loading: boolean;
}

defineProps<Props>();
</script>
