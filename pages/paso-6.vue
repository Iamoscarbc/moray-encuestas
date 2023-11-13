<template>
  <v-row justify="center" align="center" class="step-6">
    <v-col cols="12">
      <WarningAlert/>
      <div class="d-flex flex-column" style="gap: 16px;">
        <div class="d-flex flex-column align-center">
          <img src="@/assets/svg/asesor-final.svg" width="200">
          <div class="card-final">
            <h2 class="mibancoprimary--text text-center mb-2" style="font-size: 20px;">¡Felicidades, Grecia! <br>Lograste terminar con éxito <br>tu solicitud de préstamo</h2>
            <div class="d-flex justify-content-between px-4" style="gap: 8px;">
              <span class="text-center" style="font-size: 11px; font-weight: 500;"> Sami, nuestra asistenta virtual, se <br>comunicará contigo vía <strong>WhatsApp</strong> para solicitarte algunos datos adicionales, esto <br>nos ayudará a conocerte mejor.</span>
              <img src="@/assets/svg/whatsapp.svg" width="40">
            </div>
          </div>
        </div>
        <h2 class="mibancoorange--text text-center mb-2" style="font-size: 16px;">Yevo tiene lo que necesitas para <br>potenciar tu negocio</h2>
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">

          </div>
        </div>
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