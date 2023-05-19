<template>
	<div class="header">
		<div class="header__left-menu">
			<NuxtLink
				to="/"
				class="header__logo"
			>
				<img
					src="~/assets/box.svg"
					alt="box"
					class="logo__img"
				/>
				<div class="logo__text">Abito</div>
			</NuxtLink>
			<MenuList class="header__menu" />
		</div>
		<div class="header__right-menu">
			<NuxtLink
				to="/login"
				class="header__auth"
			>
				Вход и регистрация</NuxtLink
			>
			<UiButton
				text="Подать объявление"
				size="small"
				class="header__button"
			/>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.header {
	display: flex;
	align-items: center;
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

.header__logo,
.header__auth {
	text-decoration: none;
	color: #0a143a;
	font-size: 14px;
	line-height: 16px;
}

@media (max-width: 730px) {
	.header__right-menu {
		gap: 8px;
	}
	.header__menu {
		margin-left: 10px;
	}
}

@media (max-width: 680px) {
	.header__menu {
		display: none;
	}
}

@media (max-width: 360px) {
	.header__button {
		display: none;
	}
}
</style>
