<template>
    <div class="container">
        <router-link to="/" class="main-page-btn">&#8592; To main page</router-link>
        <h2 class="city">{{ city }}</h2>
        <div class="weather" v-if="forecasts" v-for="weather in forecasts">
            <div class="current_date_time">{{ weather.date }}</div>
            <div class="image_text_block">
                <div class="image">
                    <img :src="require(`@/assets/images/${weather.text}.png`)">
                </div>
                <div class="text">{{ weather.text }}</div>
            </div>
            <div class="humidity">Humidity: {{ weather.humidity }}%</div>
            <div class="visibility">Visibility: {{ weather.visibility }} km</div>
            <div class="temp">
                <div class="temp-degree">{{ weather.degree }}</div>
                <div class="degree">&#x2103;</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getWeatherForecast', this.$route.params.city);
    },
    computed: {
        forecasts() {
            return this.$store.getters.showDailyForecast;
        },
        city() {
            const weather = this.$store.getters.showCurrentForecast;
            if (weather) {
                return weather['city'];
            }
        }
    }
}
</script>
