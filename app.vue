<template>
	<div class="container">
		<div class="main-page">
			<AppHeader />
			<SearchInput class="main-page__search" />
			<section class="main-page__recommendation recommendation">
				<h1 class="recommendation__title">Рекомендации для вас</h1>
				<CardList />
			</section>
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
.recommendation__title {
	font-size: 24px;
}
.main-page__recommendation {
	margin-top: 42px;
}
</style>
