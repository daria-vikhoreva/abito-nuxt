<template>
	<div class="ads-list">
		<AdsListItem
			v-for="ad in ads"
			:key="ad.id"
			:ad="ad"
		/>
	</div>
</template>

<script setup lang="ts">
import { IAds } from '~/types/ads';

interface Props {
	ads: IAds;
}

defineProps<Props>();
</script>

<style scoped>
.ads-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
