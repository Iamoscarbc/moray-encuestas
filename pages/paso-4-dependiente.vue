<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <WarningAlert/>
      <h2 class="mibancoaccent--text text-center">Préstamo Mi efectivo <br>Semilla 💰</h2>
      <Step :step="4" :text="'Por último, ayúdanos a validar tu negocio'"/>
      <p v-if="validForm" class="step-4-text-validation">*Para continuar debes subir los siguientes documentos:</p>
      <div class="step-4-section" id="payment-slips-container">
        <template v-if="!paymentSlips || paymentSlips.length == 0">
          <img src="@/assets/svg/PaymentSlip.svg" width="80">
          <span class="section-1-title">¡Sube 1 boleta de pago o tu constancia de trabajo!</span>
          <span class="section-1-description">Los formatos deben ser JPG o PDF.</span>
          <v-btn rounded color="mibancoprimary" outlined height="38" width="100%" @click="openFileManager()">Subir boleta o constancia</v-btn>
          <input type="file" accept=".jpg, .jpeg, .pdf" multiple ref="fileManager" @change="changeFileManager" style="display: none;">
        </template>
        <template v-else>
          <img src="@/assets/svg/WarningPaymentSlip.svg" width="80" v-if="paymentSlips.length == 1">
          <span class="section-1-title" v-if="paymentSlips.length == 1">Te falta subir 1 boleta o factura más de tu negocio.</span>
          <img src="@/assets/svg/UploadSuccess.svg" width="80" v-if="paymentSlips.length == 2">
          <span class="section-1-title" v-if="paymentSlips.length == 2">¡Boletas/facturas subidas<br>con éxito!</span>
          <div class="section-1-preview-image" v-for="(f, i) in paymentSlips">
            <img :src="urlPaymentSelphie[i]" v-if="f.type == 'image/jpeg'">
            <img src="@/assets/img/defaultPaymentSlip.png" v-else>
            <div class="section-1-preview-image-options">
              <span>boleta{{ i+1 }}.{{ f.type.split('/')[1] }}</span>
              <span class="section-1-preview-image-delete" @click="deleteImageFM(i)"><img src="@/assets/svg/cerrar.svg" width="24">Eliminar foto</span>
            </div>
          </div>
          <v-btn rounded color="mibancoprimary" outlined height="38" width="100%" @click="openFileManager()" v-if="paymentSlips.length != 2">Subir boleta</v-btn>
          <input type="file" accept=".jpg, .jpeg, .pdf" multiple ref="fileManager" @change="changeFileManager" style="display: none;" v-if="paymentSlips.length != 2">
        </template>
      </div>
      <div class="step-4-section-4">
        <div class="d-flex flex-row">
          <v-checkbox
            class="mt-0"
            v-model="tyc"
            color="mibancoprimary"
            hide-details
          >
            <template v-slot:label>
              <span style="font-size: 14px;">Acepto los <span class="mibancoprimary--text text-underline">tratamientos de mis datos personales términos</span> y condiciones del <br>préstamo Mi efectivo Semilla.</span>
            </template>
          </v-checkbox>
        </div>
        <div class="d-flex flex-row">
          <v-checkbox
            v-model="udp"
            color="mibancoprimary"
            hide-details
          >
            <template v-slot:label>
              <span style="font-size: 14px;">Acepto el <span class="mibancoprimary--text text-underline">uso de mis datos personales.</span></span>
            </template>
          </v-checkbox>
        </div>
        <p class="mt-4" style="font-size: 10px; font-weight: 400; color: #495057;">Este canal está habilitado solo para personas que no presentan relación alguna con PEP (Persona expuesta políticamente), ni empresas dirigidas por este tipo de persona. De ser tu caso por favor acércate a la Agencia más cercana.</p>
        <img src="@/assets/img/TCEA.png" width="100%">
      </div>
      <CardSeguros :sureProp="sureProp" @changeSure="changeSure"/>
      <div class="d-flex flex-column" style="gap: 8px;">
        <v-btn rounded color="mibancoprimary" height="38" @click="validateForm()">Enviar Solicitud</v-btn>
        <v-btn rounded color="mibancoprimary" outlined height="38" @click="$router.back()">Volver</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import WarningAlert from '@/components/WarningAlert.vue'
import Step from '@/components/Step.vue'
export default {
  components: {
    WarningAlert,
    Step
  },
  data(){
    return {
      paymentSlips: [],
      urlPaymentSelphie: [],
      validForm: false,
      tyc: false,
      udp: false,
      sureProp: null
    }
  },
  methods: {
    openCamera(){
      this.$refs.fileCamera.click()
    },
    openFileManager(){
      this.$refs.fileManager.click()
    },
    changeFileManager($event){
      if(this.paymentSlips.length == 1){
        return
      }
      for (let i = 0; i < $event.target.files.length; i++) {
        const element = $event.target.files[i];
        this.paymentSlips.push(element)
        this.urlPaymentSelphie.push(URL.createObjectURL(element))        
      }
      let ps = document.getElementById("payment-slips-container")
      ps.style.borderColor = null
      console.log("this.paymentSlips", this.paymentSlips)
    }, 
    deleteImageFM(i){
      this.paymentSlips.splice(i, 1)
      this.urlPaymentSelphie.splice(i, 1)
    },
    validateForm(){
      if(this.paymentSlips.length != 1){
        let ps = document.getElementById("payment-slips-container")
        ps.style.borderColor = '#EB5757'
        this.validForm = true
      }

      if(this.sureProp == null){
        let cs = document.getElementById("card-sures")
        cs.style.border = '3px solid #EB5757'
        return
      }

      if(!this.tyc || !this.udp){
        return
      }
      
      if(this.paymentSlips.length = 1){
        this.validForm = false
        this.$router.push('paso-5')
      }
    },
    changeSure(val){
      this.sureProp = val
    }
  }
}
</script>

<style lang="scss">
.step-4{
  &-text-validation{
    color: #EB5757;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.75px;
  }
  &-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 16px;
    margin-bottom: 16px;
    border: 1px solid #C8C9DD;
    border-radius: 8px;
    .section-1{
      &-title{
        font-weight: 700;
        color: #495057;
        font-size: 16px;
        text-align: center;
        margin-top: 8px;
        letter-spacing: 1px;
      }
      &-description{
        font-weight: 400;
        color: #76808A;
        font-size: 15px;
        margin-top: 8px;
        letter-spacing: 1px;
      }
      &-preview-image{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
        padding: 0px 7px;
        img{
          width: 135px;
          height: 94px;
          border-radius: 16px;
        }
        &-options{
          display: flex;
          flex-direction: column;
          justify-content: center;
          span{
            color: #000000;
            font-size: 14px;
            font-weight: 400;
          }
        }
        &-delete{
          display: flex;
          align-items: center;
          color: #009530 !important;
          gap: 4px;
          &:hover{
            text-decoration: underline;
          }
          img{
            width: 24px;
            height: 24px;
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>