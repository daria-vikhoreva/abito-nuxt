<template>
	<footer class="footer">
		<div class="footer__border"></div>
		<div class="footer__info">
			<div class="footer__company">
				© {{ $t('ООО «Абито»') }}, 2011–{{ getCurrentYear }}
			</div>
			<a
				v-for="link in links"
				:key="link.id"
				:href="link.href"
				class="footer__link"
				>{{ $t(link.name) }}</a
			>
		</div>
	</footer>
</template>

<script setup lang="ts">
const links = [
	{ id: 1, name: 'Политика конфиденциальности', href: 'example.com' },
	{ id: 2, name: 'Обработка данных', href: 'example.com' },
];
const getCurrentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
	display: flex;
	flex-direction: column;
}
.footer__border {
	margin-top: 37px;
	border: 1px solid #e5e5e5;
}
.footer__info {
	margin-top: 18px;
	font-size: 14px;
}
.footer__company {
	color: #c4c4c4;
}
.footer__link {
	margin-top: 5px;
	color: #c4c4c4;
	display: block;
}

.footer__menu {
	display: none;
}

@media (max-width: 680px) {
	.footer__menu {
		display: block;
		margin-top: 20px;
		display: flex;
		flex-direction: column;
	}
}
</style>
