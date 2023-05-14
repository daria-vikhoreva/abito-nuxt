<template>
	<div class="detail-page">
		<div class="detail-card">
			<div class="detail-card__left-col">
				<div class="detail-card__title">Электросамокат kugoo Gx</div>
				<div class="detail-card__img">
					<img
						src="~/assets/kugoo.jpg"
						alt="kugoo"
					/>
				</div>
				<div class="detail-card__descr">
					Продаю не спеша самокат в хорошем состоянии. Торг возможен. За период
					эксплуатации не выявлено ни одной проблемы. Из минусов — нужно
					прокачать задний тормоз. Установлен отсекатель сзади. Покрышки CST
					внедорожные. Все на подшипниках, болты протянуты. Пробег 881км , это
					немного для такого зверя.
				</div>
			</div>

			<div class="detail-card__right-col">
				<div class="detail-card__price">75 000 ₽</div>
				<div class="detail-card__author author">
					<div class="author__info">
						<div class="author__name">Михаил Воробьев</div>
						<div class="author__rating">
							<img
								src="~/assets/star.svg"
								alt="star"
							/>
							<span>5 отзывов</span>
						</div>
						<div class="author__status">Частное лицо</div>
					</div>

					<div class="author__img">
						<img
							src="~/assets/author.png"
							alt="author"
						/>
					</div>
				</div>
				<UiButton
					text="Показать телефон"
					size="large"
				/>
				<UiButton
					text="Написать сообщение"
					size="large"
					color="sea-blue"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.detail-card {
	display: flex;
	gap: 30px;
}

.detail-card__left-col {
	max-width: 480px;
	width: 100%;
}

.detail-card__title,
.detail-card__price {
	font-weight: 700;
	font-size: 24px;
	line-height: 28px;
}

.detail-card__img {
	margin-top: 25px;
}

.detail-card__descr {
	margin-top: 30px;
}

.detail-card__right-col {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.author {
	display: flex;
	justify-content: space-between;
}

.author__info {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
.author__name {
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
}

.author__rating {
	display: flex;
	gap: 10px;
}

.author__rating span {
	font-size: 13px;
	line-height: 16px;
	opacity: 0.5;
}

.author__status {
	font-size: 12px;
	line-height: 14px;
}

@media (max-width: 800px) {
	.detail-card__left-col {
		max-width: 420px;
	}
	.detail-card__img img {
		width: 100%;
	}
}

@media (max-width: 500px) {
	.detail-card {
		display: flex;
		flex-direction: column;
		gap: 30px;
		align-items: center;
	}
	.detail-card__left-col {
		max-width: 400px;
	}
}

@media (max-width: 350px) {
	.detail-card__title {
		font-size: 18px;
		line-height: 21px;
	}
	.detail-card__descr {
		font-size: 14px;
		line-height: 140%;
	}
}
</style>
