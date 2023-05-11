<template>
	<div class="container">
		<div class="main-page">
			<AppHeader />
			<SearchInput class="main-page__search" />
			<div class="main-page__wrapper">
				<section class="main-page__recommendation recommendation">
					<h1 class="recommendation__title">Рекомендации для вас</h1>
					<CardList class="recommendation__list" />
				</section>
				<aside class="aside">
					<ServicesList />
					<AppFooter />
				</aside>
			</div>
		</div>
	</div>
</template>

<style>
html {
	font-family: 'Roboto', sans-serif;
	color: #0a143a;
}
.container {
	max-width: 1146px;
	margin: 0 auto;
}
.main-page {
	padding: 30px 0;
}
.main-page__search {
	margin-top: 24px;
}
.main-page__wrapper {
	margin-top: 42px;
	display: flex;
}
.recommendation__list {
	margin-top: 25px;
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
}
.recommendation__title {
	font-size: 24px;
	margin: 0;
}
</style>
