<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <WarningAlert/>
      <h2 class="mibancoaccent--text text-center">Préstamo Mi efectivo <br>Semilla 💰</h2>
      <Step :step="1" :text="'Completa tu<br>información personal'"/>
      <div class="step-1-section-1">
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Monto a solicitar*</label>
          <v-text-field
            color="mibancoprimary"
            prefix="S/."
            v-model="amount"
            disabled
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Plazo de pago de préstamo (en meses)*</label>
          <v-select
            :items="[1,2,3,4,5,6,7,8,9,10,11,12]"
            suffix="meses"
            height="48"
            v-model="quotasComputed"
            single-line
            hide-details
            outlined
          >
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </div>
      </div>
      <div class="step-1-section-2">
        <div class="d-flex align-center">
          <v-icon color="mibancoprimary" class="mr-2">mdi-account-outline</v-icon>
          <span class="mibancoprimary--text">Información personal</span>
        </div>
      </div>
      <div class="step-1-section-3">
        <div class="d-flex justify-space-between">
          <div style="width: 30%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Documento</label>
            <v-text-field
              label="DNI"
              height="48"
              single-line
              hide-details
              disabled
              outlined
            ></v-text-field>
          </div>
          <div style="width: 67%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número de DNI*</label>
            <v-text-field
              :value="form.documentNumber"
              height="48"
              single-line
              hide-details
              disabled
              outlined
            >
            </v-text-field>
          </div>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Vuelve a ingresar tu Número de DNI*</label>
          <v-text-field
            label="Vuelve a ingresar tu Nro. DNI*"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número celular*</label>
          <v-text-field
            :value="form.phone"
            height="48"
            single-line
            hide-details
            disabled
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Confirma el número de celular</label>
          <v-text-field
            label="Confirma tu número celular"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Nombres* </label>
          <v-text-field
            v-model="formLocal.name"
            label="Ingresa tu nombre completo"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Apellido paterno*</label>
          <v-text-field
            v-model="formLocal.lastNameP"
            label="Ingresa tu apellido paterno"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Apellido materno*</label>
          <v-text-field
            v-model="formLocal.lastNameM"
            label="Ingresa tu apellido materno"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Correo electrónico*</label>
          <v-text-field
            v-model="form.email"
            height="48"
            single-line
            hide-details
            disabled
            outlined
          >
          </v-text-field>
        </div>
      </div>
      <v-btn width="100%" rounded color="mibancoprimary" height="38" @click="nextStep()" :disabled="!validForm">Continuar</v-btn>
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
      formLocal: {
        name: '',
        lastNameP: '',
        lastNameM: '',
        birthdate: '',
        phone: '',
        email: '',
        documentNumber: ''
      }
    }
  },
  computed: {
    ...mapState("variables", ['amount', 'quotas', 'form']),
    validForm(){
      return !!this.formLocal.name && !!this.formLocal.lastNameP && !!this.formLocal.lastNameM
    },
    quotasComputed:{
      get(){
        return this.quotas
      },
      set(newVal){
        this.SET_QUOTAS(newVal)
      }
    }
  },
  methods: {
    ...mapMutations("variables", ['SET_FORM', 'SET_QUOTAS']),
    nextStep(){
      this.formLocal.email = this.form.email
      this.formLocal.phone = this.form.phone
      this.formLocal.documentNumber = this.form.documentNumber
      this.SET_FORM(this.formLocal)
      this.$router.push('/paso-2')
    }
  }
}
</script>

<style lang="scss">
.step-1{
  &-section-1{
    border: 2px solid rgba(233, 247, 237, 1);
    display: flex;
    flex-direction: column;
    padding: 16px;
    text-align: left;
    gap: 10px;
    margin-bottom: 16px;
  }
  &-section-2{
    border: 1px solid rgba(0, 149, 48, 1);
    background-color: rgba(233, 247, 237, 1);
    border-radius: 4px;
    padding: 12px 16px;
    margin-bottom: 16px;
  }
  &-section-3{
    border: 2px solid rgba(233, 247, 237, 1);
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 10px;
    margin-bottom: 24px;
  }
}
</style>