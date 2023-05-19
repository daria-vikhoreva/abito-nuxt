<template>
	<div class="search">
		<div class="search__wrapper">
			<UiInput size="medium" />
		</div>
		<UiButton
			text="Найти"
			class="search__button"
			size="medium"
		>
			<template #left>
				<img
					src="~/assets/search.svg"
					alt="search"
				/>
			</template>
		</UiButton>
	</div>
</template>

<script></script>

<style scoped>
.search {
	width: 100%;
	display: flex;
}

.search__wrapper {
	width: 100%;
	background: #256eeb;
	border-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.search .search__button {
	max-width: 107px;
	width: 100%;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	display: flex;
	align-items: center;
	gap: 5px;
}
</style>
