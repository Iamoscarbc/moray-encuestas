<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <WarningAlert/>
      <h2 class="mibancoaccent--text text-center">Préstamo Mi efectivo <br>Semilla 💰</h2>
      <Step :step="2"/>
      <div class="step-2-section-1">
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Monto a solicitar*</label>
          <v-text-field
            label="S/ 2000"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
      </div>
      <div class="step-2-section-2">
        <div class="d-flex align-center">
          <v-icon color="mibancoprimary" class="mr-2">mdi-account-outline</v-icon>
          <span class="mibancoprimary--text">Información personal</span>
        </div>
      </div>
      <div class="step-2-section-3">
        <span style="font-size: 14px; font-weight: 500;">Selecciona tu estado Civil <span style="font-size: 12px; font-weight: 600;" class="mibancoprimary--text">(recuerda que debe ser igual a tu DNI)*</span></span>
        <div>
          <v-select
            :items="['3 meses', '6 meses', '9 meses', '12 meses']"
            height="48"
            label="Selecciona tu opción aquí"
            single-line
            hide-details
            outlined
          >
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </div>
        <div>
          <div class="d-flex align-center justify-space-between">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Fecha de nacimiento*</label>
            <v-icon color="mibancoprimary">mdi-information-outline</v-icon>
          </div>
          <v-text-field
            label="Ingresa tu fecha de nacimiento"
            height="48"
            single-line
            hide-details
            outlined
          >
            <template v-slot:append>
              <v-icon color="mibancoprimary">mdi-calendar-month-outline</v-icon>
            </template>
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Tienes hijos?*</label>
          <RadioCustom :dataRadio="dataChildren" :defaultRadio="defaultChildren"/>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Tipo de vivienda*</label>
          <v-select
            :items="['3 meses', '6 meses', '9 meses', '12 meses']"
            height="48"
            label="Selecciona tu opción aquí"
            single-line
            hide-details
            outlined
          >
            <template v-slot:append>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-select>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Selecciona tu tipo de actividad*</label>
          <RadioCustom :dataRadio="dataTypeActivity" :defaultRadio="defaultTypeActivity"/>
        </div>
        <h3 class="mibancoprimary--text">Datos del cónyuge</h3>
        <div class="d-flex justify-space-between">
          <div style="width: 30%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Documento</label>
            <v-text-field
              label="DNI"
              height="48"
              single-line
              hide-details
              outlined
            ></v-text-field>
          </div>
          <div style="width: 67%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Nro. de documento*</label>
            <v-text-field
              label="Ingresa nro de documento"
              height="48"
              single-line
              hide-details
              outlined
            >
            </v-text-field>
          </div>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Nombres* </label>
          <v-text-field
            label="Nombres"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Apellidos*</label>
          <v-text-field
            label="Apellidos"
            height="48"
            single-line
            hide-details
            outlined
          >
          </v-text-field>
        </div>
      </div>
      <div class="d-flex flex-row" style="gap: 16px;">
        <v-btn width="48%" rounded color="mibancoprimary" outlined height="38" @click="$router.back()">Volver</v-btn>
        <v-btn width="48%" rounded color="mibancoprimary" height="38" @click="$router.push('/paso-3')">Continuar</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import WarningAlert from '@/components/WarningAlert.vue'
import Step from '@/components/Step.vue'
import RadioCustom from '@/components/RadioCustom.vue'
export default {
  components: {
    WarningAlert,
    Step,
    RadioCustom
  },
  data(){
    return {
      dataChildren: [
        {label: 'Sí', value: true},
        {label: 'No', value: false}
      ],
      defaultChildren: false,
      dataTypeActivity: [
        {label: 'Tengo un Negocio', value: "Tengo un Negocio"},
        {label: 'Trabajo para una empresa', value: "Trabajo para una empresa"}
      ],
      defaultTypeActivity: "Tengo un Negocio"
    }
  }
}
</script>

<style lang="scss">
.step-2{
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