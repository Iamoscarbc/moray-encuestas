<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12">
      <h2 class="mb-4">Empieza tu solicitud<br>de préstamo aquí</h2>
      <span style="font-size: 16px;">Escribe el monto que deseas solicitar 💰</span>
      <v-text-field class="mt-5 input-amount" filled placeholder="S/ 2000.00" hide-details type="number" min="100"
        max="2000" v-model="amount"></v-text-field>
      <v-btn class="mt-5" width="100%" rounded color="mibancoprimary" height="38" @click="$router.push('/oferta')"
        :disabled="!validForm">Continuar</v-btn>
    </v-col>
  </v-row>
</template>
  
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      amount: '',
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
  