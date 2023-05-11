<template>
	<div class="menu">
		<UiLink
			v-for="(item, index) in menu"
			:key="index"
			class="menu__item"
			:link="item"
		/>
	</div>
</template>

<script setup>
const menu = [
	{ name: 'Авто', href: '#' },
	{ name: 'Недвижимость', href: '#' },
	{ name: 'Работа', href: '#' },
	{ name: 'Услуги', href: '#' },
];
</script>

<style scoped>
.menu {
	display: flex;
	gap: 14px;
}
</style>
