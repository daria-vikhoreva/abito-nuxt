<template>
	<div class="like">
		<FavoriteActive v-if="active" />
		<FavoriteDisabled v-else />
	</div>
</template>

<script setup>
import FavoriteDisabled from '~/assets/favorite_disabled.svg';
import FavoriteActive from '~/assets/favorite_active.svg';

const Props = defineProps({
	active: Boolean,
});
</script>

<style scoped>
.like {
	cursor: pointer;
}
</style>
