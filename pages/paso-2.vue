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
          <v-dialog
            v-model="dialogEC"
            width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="valueEC"
                v-bind="attrs"
                v-on="on"
                label="Selecciona tu opción aquí"
                height="48"
                single-line
                hide-details
                readonly
                outlined>
                  <template v-slot:append>
                    <v-icon>mdi-chevron-down</v-icon>
                  </template>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogEC=false">
                  <h5>Selecciona tu estado civil</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValueEC" :dataRadio="dataEC" :value="valueEC"/>
                </v-card-text>
            </v-card>
          </v-dialog>
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
          <RadioCustom @changeValue="changeValueChildren" :dataRadio="dataChildren" :value="valueChildren"/>
        </div>
        <div v-if="valueChildren == 'Sí'">
          <div class="d-flex align-center justify-space-between">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número de hijos*</label>
            <v-icon color="mibancoprimary">mdi-information-outline</v-icon>
          </div>
          <v-dialog
            v-model="dialogCC"
            width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="valueCC"
                v-bind="attrs"
                v-on="on"
                label="Número de hijos que dependan de ti"
                height="48"
                single-line
                hide-details
                readonly
                outlined>
                  <template v-slot:append>
                    <v-icon>mdi-chevron-down</v-icon>
                  </template>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogCC=false">
                  <h5>Número de hijos</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValueCC" :dataRadio="dataCC" :value="valueCC"/>
                </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Tipo de vivienda*</label>
          <v-dialog
            v-model="dialogTV"
            width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="valueTV"
                v-bind="attrs"
                v-on="on"
                label="Selecciona tu opción aquí"
                height="48"
                single-line
                hide-details
                readonly
                outlined>
                  <template v-slot:append>
                    <v-icon>mdi-chevron-down</v-icon>
                  </template>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogTV=false">
                  <h5>Tipo de Vivienda</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValueTV" :dataRadio="dataTV" :value="valueTV"/>
                </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Selecciona tu tipo de actividad*</label>
          <RadioCustom @changeValue="changeValueTypeActivity" :dataRadio="dataTypeActivity" :value="valueTypeActivity"/>
        </div>
        <h3 class="mibancoprimary--text" v-if="valueEC != 'Solter@'">Datos del cónyuge</h3>
        <div class="d-flex justify-space-between" v-if="valueEC != 'Solter@'">
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
        <div v-if="valueEC != 'Solter@'">
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
        <div v-if="valueEC != 'Solter@'">
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
  methods: {
    changeValueEC($event){
      this.valueEC = $event
    },
    changeValueChildren($event){
      this.valueChildren = $event
    },
    changeValueCC($event){
      this.valueCC = $event
    },
    changeValueTV($event){
      this.valueTV = $event
    },
    changeValueTypeActivity($event){
      this.valueTypeActivity = $event
    }
  },
  data(){
    return {
      dataChildren: [
        {label: 'Sí', value: true},
        {label: 'No', value: false}
      ],
      valueChildren: false,
      dataTypeActivity: [
        {label: 'Tengo un Negocio', value: "Tengo un Negocio"},
        {label: 'Trabajo para una empresa', value: "Trabajo para una empresa"}
      ],
      valueTypeActivity: "Tengo un Negocio",
      dataEC: [
        {label: "Solter@", value:"Solter@"},
        {label: "Casad@", value:"Casad@"},
        {label: "Viud@", value:"Viud@"},
        {label: "Divorciad@", value:"Divorciad@"},
      ],
      valueEC: "Solter@",
      dialogEC: false,
      dataCC: [
        {label: "1", value:"1"},
        {label: "2", value:"2"},
        {label: "3", value:"3"},
        {label: "4", value:"4"},
        {label: "5", value:"5"},
        {label: "6 a más", value:"6 a más"}
      ],
      valueCC: "1",
      dialogCC: false,
      dataTV: [
        {label: "Propia", value:"Propia"},
        {label: "Alquilada", value:"Alquilada"},
        {label: "Alojado en casa de familia", value:"Alojado en casa de familia"}
      ],
      valueTV: "Propia",
      dialogTV: false,
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