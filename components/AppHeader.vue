<template>
	<div class="header">
		<div class="header__left-menu">
			<div class="header__logo">
				<img
					src="~/assets/box.svg"
					alt="box"
					class="logo__img"
				/>
				<div class="logo__text">Abito</div>
			</div>
			<MenuList class="header__menu" />
		</div>
		<div class="header__right-menu">
			<UiLink
				class="header__auth"
				:link="authLink"
			/>
			<UiButton text="Подать объявление" />
		</div>
	</div>
</template>

<script setup>
const authLink = { name: 'Вход и регистрация', href: '#' };
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	color: #0a143a;
	justify-content: space-between;
}

.header__left-menu {
	display: flex;
	align-items: center;
}

.header__right-menu {
	display: flex;
	gap: 25px;
	align-items: center;
}

.header__logo {
	display: flex;
	gap: 6px;
}

.logo__text {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
}

.header__menu {
	margin-left: 20px;
}
</style>
