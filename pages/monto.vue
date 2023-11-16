<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12">
      <h2 class="mb-4">¿Cuánto es el monto que deseas solicitar?</h2>
      <span style="font-size: 16px;">Escribe el monto que deseas solicitar 💰</span>
      <v-text-field class="mt-5 input-amount" filled placeholder="S/ 2000.00" hide-details type="number" min="100"
        max="2000" v-model="amount"></v-text-field>
      <v-btn class="mt-5" width="100%" rounded color="mibancoprimary" height="38" @click="nextStep()"
        :disabled="!validForm">Continuar</v-btn>
    </v-col>
  </v-row>
</template>
  
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      amount: null,
      validForm: false
    }
  },
  watch: {
    amount(val){
      if(val >= 100 && val <= 2000){
        this.validForm = true
      }else{
        this.validForm = false
      }
    }
  },
  methods: {
    ...mapMutations("variables", ['SET_AMOUNT']),
    nextStep(){
      this.SET_AMOUNT(Number(this.amount))
      this.$router.push('/oferta')
    }
  }
}
</script>
<style lang="scss">
.input-amount {
  .v-input__slot {

    &::before,
    &::after {
      display: none;
    }
  }

  input {
    text-align: center;
    font-weight: 800;
    font-size: 32px;
  }
}</style>
  