<template>
	<div class="container">
		<AppHeader />
		<SearchInput class="search" />

		<slot />

		<AppFooter />
	</div>
</template>

<style scoped>
.container {
	max-width: 1146px;
	margin: 0 auto;
	padding: 30px 0;
}

.search {
	margin-top: 24px;
}

@media (max-width: 1170px) {
	.container {
		max-width: 900px;
	}
}

@media (max-width: 875px) {
	.container {
		max-width: 850px;
		padding: 20px 15px;
	}
}
</style>
