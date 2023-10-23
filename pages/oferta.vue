<template>
    <v-row justify="center" align="center" class="mt-1">
      <v-col cols="12" class="text-center">
        <GoBack />
        <h2 class="mb-4">¿Cuánto es el monto<br>que deseas solicitar?</h2>
        <span style="font-size: 16px;">Escribe el monto que deseas solicitar 💰</span>
        <v-text-field class="mt-5 mb-4 input-amount" filled placeholder="S/ 2000.00" hide-details type="number" min="100" max="2000"></v-text-field>
        <span class="mibancoprimary--text font-weight-bold" @click="$router.back()">Editar monto <v-icon small color="mibancoprimary">mdi-pencil</v-icon></span>
        <h4 class="mt-8">¡Felicidades! 🎉</h4>
        <span class="mibancoprimary--text">Tenemos esta opción para ti 👇</span>
        <div class="card-recommended mt-3 text-left">
            <div class="d-flex justify-space-between align-center mb-2">
                <span class="mibancosecondary--text" style="font-size: 12px; font-weight: 700;">Recomendado <v-icon color="mibancosecondary" small>mdi-trending-up</v-icon></span>
                <span class="mibancosecondary--text" style="font-size: 12px; font-weight: 700;">Hasta S/ 2000</span>
            </div>
            <div class="mb-2">
                <span class="white--text" style="font-weight: 700;">Mi efectivo semilla</span>
            </div>
            <div class="mb-5">
                <span class="white--text" style="font-weight: 300; font-size: 14px;">Solicita un préstamo para lo que <br>necesites sin necesidad de historial <br> crediticio.</span>
            </div>
            <div class="d-flex justify-end">
                <v-dialog
                    v-model="dialog"
                    width="350"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class="font-weight-bold"
                            style="font-size: 16px; letter-spacing: normal;"
                            color="mibancosecondary"
                            height="29"
                            width="180"
                            v-bind="attrs"
                            v-on="on"
                            rounded>Empezar evaluación</v-btn>
                    </template>

                    <v-card>
                        <v-card-title class="d-flex justify-end" @click="dialog=false">
                            <v-icon>mdi-close</v-icon>
                        </v-card-title>

                        <v-card-text style="text-align: center">
                            <img src="@/assets/svg/Alerta.svg">
                            <p class="mibancoprimary--text font-weight-bold">AVISO OBLIGATORIO</p>
                            <p class="mb-4" style="line-height: normal; color: #151D18">Para continuar con tu solicitud, debes encontrarte en tu local de negocio <br>y tenera a la mano tus boletas de compra o venta.</p>
                            <v-btn width="100%" rounded color="mibancoprimary" height="38" @click="dialog=false;dialog2 = true">Comenzar</v-btn>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </div>
        </div>
        <div class="text-left px-4 py-4">
            <span style="color: #76808A; font-size: 14px;">Este canal está habilitado solo para 
                <br>personas que no presentan relación 
                <br>alguna con PEP (Persona expuesta 
                <br>políticamente), ni empresas dirigidas por 
                <br>este tipo de persona. De ser tu caso por 
                <br>favor acércate a la Agencia más cercana.</span>
        </div>
        <v-dialog
            v-model="dialog2"
            width="350"
            >

            <v-card>
                <v-card-title class="d-flex justify-end" @click="dialog=false">
                    <v-icon>mdi-close</v-icon>
                </v-card-title>

                <v-card-text style="text-align: center">
                    <img src="@/assets/svg/Alert_pc.svg">
                    <p class="error--text font-weight-bold">¡AVISO IMPORTANTE!</p>
                    <p class="mb-4" style="line-height: normal; color: #151D18">Continúa tu solicitud desde <strong>tu celular</strong>, para que puedas adjuntar las fotos que te solicitemos y así validar la existencia de tu negocio.</p>
                    <v-btn width="100%" rounded color="mibancoprimary" height="38" @click="$router.push('/paso-1')">Entendido</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </template>
  
  <script>
  import GoBack from '@/components/GoBack.vue'
  export default {
    name: 'IndexPage',
    components: {
        GoBack
    },
    data() {
        return {
            dialog: false,
            dialog2: false
        }
    }
  }
  </script>
<style lang="scss">
.input-amount{
    .v-input__slot{
        &::before, &::after{
            display: none;
        }
    }
    input{
        text-align: center;
        font-weight: 800;
        font-size: 32px;
    }
}

.card-recommended{
    background-color: #009530;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px 0px #00000040;
}
</style>
  