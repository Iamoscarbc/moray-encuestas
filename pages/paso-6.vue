<template>
  <v-row justify="center" align="center" class="step-6">
    <v-col cols="12">
      <WarningAlert/>
      <div class="d-flex flex-column" style="gap: 16px;">
        <div class="d-flex flex-column align-center">
          <img src="@/assets/svg/asesor-final.svg" width="200">
          <div class="card-final">
            <h2 class="mibancoprimary--text text-center mb-2" style="font-size: 20px;">¡Felicidades, Grecia! <br>Lograste terminar con éxito <br>tu solicitud de préstamo</h2>
            <div class="d-flex justify-space-between px-4">
              <span class="text-center" style="font-size: 11px; font-weight: 500;"> Sami, nuestra asistenta virtual, se <br>comunicará contigo vía <strong>WhatsApp</strong> para solicitarte algunos datos adicionales, esto <br>nos ayudará a conocerte mejor.</span>
              <img src="@/assets/svg/whatsapp.svg" width="40">
            </div>
          </div>
        </div>
        <h2 class="mibancoorange--text text-center mb-2" style="font-size: 16px;">Yevo tiene lo que necesitas para <br>potenciar tu negocio</h2>
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-center">
            <img src="@/assets/svg/ico_mb_user_start.svg" width="75">
            <span style="font-size: 12px; font-weight: 400; color: #151D18; text-align:center;">Conecta con más emprendedores</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img src="@/assets/svg/ico_beneficios.svg" width="75">
            <span style="font-size: 12px; font-weight: 400; color: #151D18; text-align:center;">Descuentos y promociones</span>
          </div>
          <div class="d-flex flex-column align-center">
            <img src="@/assets/svg/ico_mb_video1.svg" width="75">
            <span style="font-size: 12px; font-weight: 400; color: #151D18; text-align:center;">Asesorías y talleres gratis</span>
          </div>
        </div>
        <h2 class="mibancoprimary--text text-center mb-2" style="font-size: 16px;">Ingresa a tu cuenta de Yevo y <br>potencia tu negocio</h2>
        <div class="d-flex justify-space-between">
          <div style="width: 30%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Documento</label>
            <v-select
              v-model="login.documentType"
              :items="['DNI', 'CE']"
              height="48"
              single-line
              hide-details
              disabled
              outlined
            >
              <template v-slot:append>
                <v-icon>mdi-chevron-down</v-icon>
              </template>
            </v-select>
          </div>
          <div style="width: 67%;">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número de identidad</label>
            <v-text-field
              v-model="login.documentNumber"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Contraseña</label>
          <v-text-field
            v-model="login.documentNumber"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            height="48"
            single-line
            hide-details
            outlined
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
        </div>
        <span class="text-center" style="font-size: 14px;">¿Olvidaste tu contraseña? <span class="mibancoprimary--text">Ingresa aquí</span></span>
        <v-checkbox
            class="mt-0"
            v-model="login.confiar"
            color="mibancoprimary"
            hide-details
          >
          <template v-slot:label>
            <span style="font-size: 14px;">Confiar en este dispositivo <v-icon color="mibancoprimary">mdi-information-outline</v-icon></span>
          </template>
        </v-checkbox>
        <v-btn width="100%" rounded color="mibancoprimary" height="46">Ingresar ahora</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import WarningAlert from '@/components/WarningAlert.vue'
export default {
  components: {
    WarningAlert
  },
  data(){
    return {
      login : {
        documentType: 'DNI',
        documentNumber: '47323267',
        confiar: false
      },
      showPassword: false
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.step-6{
  .card-final{
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 8px;
    width: 100%;
  }
}
</style>