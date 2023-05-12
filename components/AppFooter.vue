<template>
	<footer class="footer">
		<div class="footer__border"></div>
		<div class="footer__info">
			<div class="footer__company">© ООО «Абито», 2011–2021</div>
			<a
				href="#"
				class="footer__link"
				>Политика конфиденциальности</a
			>
			<a
				href="#"
				class="footer__link"
				>Обработка данных</a
			>
			<MenuList class="footer__menu" />
		</div>
	</footer>
</template>

<script>
export default {};
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
