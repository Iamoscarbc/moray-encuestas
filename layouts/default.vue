<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
.v-application{
  line-height: normal !important;
}
.v-btn{
  text-transform: none;
  &.mibancoprimary{
    .v-btn__content{
      color: #ffffff;
    }
  }
}
.v-text-field--filled > .v-input__control > .v-input__slot, .v-text-field--full-width > .v-input__control > .v-input__slot, .v-text-field--outlined > .v-input__control > .v-input__slot{
  min-height: 48px;
}
.v-input--is-disabled {
  background-color: rgba(226, 230, 235, 1);
}
.col-12{
  padding: 16px;
}
</style>
