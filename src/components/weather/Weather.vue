<template>
    <div class="container" v-if="current">
        <h2 class="header">Weather forecast</h2>
        <div class="tabs">
            <span @click="showCurrentCity('bishkek')" :class="{'active': activeTab === 'bishkek'}">Bishkek</span>
            <span @click="showCurrentCity('osh')" :class="{'active': activeTab === 'osh'}">Osh</span>
        </div>
        <h2 class="city">{{ current.city }}</h2>
        <div class="weather">
            <h4 class="right_now">Now</h4>
            <div class="current_date_time">{{ current.time }}</div>
            <div class="image_text_block">
                <div class="image">
                    <img :src="require(`@/assets/images/${current.text}.png`)">
                </div>
                <div class="text">{{ current.text }}</div>
            </div>
            <div class="humidity">Humidity: {{ current.humidity }}%</div>
            <div class="visibility">Visibility: {{ current.visibility }} km</div>
            <div class="temp">
                <div class="temp-degree">{{ current.degree }}</div>
                <div class="degree">&#x2103;</div>
            </div>
        </div>
        <router-link :to="{name: 'daily', params: {city: activeTab}}" class="daily">Show for 5 days</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: ''
        }
    },
    mounted() {
        this.activeTab = 'bishkek';
        this.$store.dispatch('getWeatherForecast', 'bishkek');
    },
    computed: {
        current() {
            return this.$store.getters.showCurrentForecast;
        }
    },
    methods: {
        showCurrentCity(city) {
            this.activeTab = city;
            this.$store.dispatch('getWeatherForecast', city);
        }
    }
}
</script>

<style lang="scss">
  @import 'forecast';
</style>
