<template>
  <v-row justify="center" align="center" class="step-5">
    <v-col cols="12">
      <WarningAlert/>
      <div class="d-flex flex-column" style="gap: 8px;">
        <div class="d-flex justify-center">
          <img src="@/assets/svg/document-check.svg" width="120">
        </div>
        <h2 class="mibancoprimary--text text-center" style="font-size: 21px;">¡<span style="text-transform: capitalize;">{{form.name}}</span>, este es el resumen<br>de tu solicitud!</h2>
        <span class="text-center mb-2" style="font-size: 12px; letter-spacing: 0.7px;">Revisa que todos tu datos estén correctos, de no ser asi puedes editarlos antes de enviar tu solicitud.</span>
        <div class="d-flex justify-end">
          <v-btn color="mibancoprimary" height="40" outlined @click="formDisabled = !formDisabled">Editar
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </div>
        <span v-if="!formDisabled" style="text-align: center; color: #231F20; font-size: 12px; font-weight: 600;" @click="clickInput()">Elige el campo que deseas editar 👇</span>
        <v-form class="d-flex flex-column mb-4" style="gap: 8px">
          <div class="input-custom" :disabled="formDisabled">
            <label for="amount">Monto</label>
            <input v-model="amountComputed" id="amount" :disabled="formDisabled" min="100" max="2000">
          </div>
          <div>
            <v-dialog
              v-model="dialogQuotas"
              width="350">
              <template v-slot:activator="{ on, attrs }">
                <div class="input-custom" :disabled="formDisabled"
                  v-bind="attrs"
                  v-on="!formDisabled ? on : false">
                  <label for="quotas">N° de Cuotas</label>
                  <span v-text="quotasComputed"></span>
                </div>
              </template>
              <v-card>
                  <v-card-title class="d-flex justify-space-between px-4" @click="dialogQuotas=false">
                    <h5>Número de cuotas</h5>
                    <v-icon>mdi-close</v-icon>
                  </v-card-title>
                  <v-card-text class="px-4">
                    <RadioCustom @changeValue="changeValueQuotas" :dataRadio="dataQuotas" :value="quotas"/>
                  </v-card-text>
              </v-card>
            </v-dialog>
          </div>
          <div class="input-custom" :disabled="formDisabled" @click="clickInput">
            <label for="names">Nombres</label>
            <input v-model="form.name" id="names" disabled>
          </div>
          <div class="input-custom" :disabled="formDisabled">
            <label for="lastNameP">Apellido Paterno</label>
            <input v-model="form.lastNameP" id="lastNameP" disabled>
          </div>
          <div class="input-custom" :disabled="formDisabled">
            <label for="lastNameM">Apellido Materno</label>
            <input v-model="form.lastNameM" id="lastNameM" disabled>
          </div>
          <div class="input-custom" :disabled="formDisabled">
            <label for="birthDate">Fecha de Nacimiento</label>
            <input v-model="form.birthdate" id="birthDate" disabled>
          </div>
        </v-form>
        <div class="d-flex flex-row justify-space-between">
          <v-btn rounded color="mibancoprimary" height="38" width="120" @click="cancel()" outlined>Cancelar</v-btn>
          <v-btn rounded color="mibancoprimary" height="38" width="185" @click="sendForm()">Actualizar y enviar</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import WarningAlert from '@/components/WarningAlert.vue'
import Step from '@/components/Step.vue'
export default {
  components: {
    WarningAlert,
    Step
  },
  data(){
    return {
      formDisabled: true,
      dialogQuotas: false,
      dataQuotas: [
        {label: '01', value: 1},
        {label: '02', value: 2},
        {label: '03', value: 3},
        {label: '04', value: 4},
        {label: '05', value: 5},
        {label: '06', value: 6},
        {label: '07', value: 7},
        {label: '08', value: 8},
        {label: '09', value: 9},
        {label: '10', value: 10},
        {label: '11', value: 11},
        {label: '12', value: 12}
      ]
    }
  },
  computed: {
    ...mapState("variables", ['form', 'amount', 'quotas']),
    quotasComputed:{
      get(){
        return this.quotas
      },
      set(newVal){
        this.SET_QUOTAS(Number(newVal))
      }
    },
    amountComputed:{
      get(){
        return this.amount
      },
      set(newVal){
        this.SET_AMOUNT(Number(newVal))
      }
    }
  },
  methods: {
    ...mapMutations("variables",['SET_QUOTAS','SET_AMOUNT']),
    changeValueQuotas($event){
      console.log("changeValueQuotas", $event)
      this.quotasComputed = $event
    },
    clickInput(){
      console.log("firts input")
    },
    cancel() {
      this.$router.back()
    },
    sendForm() {
      this.$router.push('/paso-6')
    },
  }
}
</script>

<style lang="scss">
.step-5{
  .input-custom{
    border-radius: 8px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    font-size: 12px;
    font-weight: 500;
    color: #151D18;
    border: 1px solid #C8C9DD;
    &[disabled]{
      background: #F9FAFA;
      border: none;
    }
    input{
      text-align: right;
      text-decoration: none;
      height: 100%;
      outline: none;
    }
  }
}
</style>