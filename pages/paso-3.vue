<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <WarningAlert/>
      <h2 class="mibancoaccent--text text-center">Préstamo Mi efectivo <br>Semilla 💰</h2>
      <Step :step="3" :text="'¡Listo este es el último paso! Ahora completa la información <br>de tu negocio o trabajo'"/>
      <div class="step-3-section-1">
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
      </div>
      <div class="step-3-section-2">
        <div class="d-flex align-center">
          <v-icon color="mibancoprimary" class="mr-2">mdi-cart-outline</v-icon>
          <span class="mibancoprimary--text">Mi negocio</span>
        </div>
      </div>
      <div class="step-3-section-3">
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Ocupación o profesión*</label>
          <v-text-field
            color="mibancoprimary"
            label="¿A qué te dedicas?"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Giro o actividad comercial*</label>
          <v-select
            color="mibancoprimary"
            :items="['Bodega y/o Tienda', 'Servicio Taxi', 'Venta de Alimentos']"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuál es el nombre de tu negocio? (Opcional)</label>
          <v-text-field
            color="mibancoprimary"
            label="¿Cuál es el nombre de tu negocio?"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Fecha que iniciaste tu negocio*</label>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="dateFormatted"
                label="dd/mm/aaaa"
                color="mibancoprimary"
                height="48"
                single-line
                hide-details
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              >
                <template v-slot:append>
                  <v-icon color="mibancoprimary">mdi-calendar-month-outline</v-icon>
                </template>
              </v-text-field>
            </template>
            <v-date-picker
              color="mibancoprimary"
              v-model="dateInitBuss"
              :active-picker.sync="activePicker"
              :max="maxDate"
              @change="save"
              min="1950-01-01"
            ></v-date-picker>
          </v-menu>
        </div>
        <h3 class="mibancoprimary--text">Ventas de mi negocio</h3>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cada cuánto vendes?*</label>
          <v-dialog
            v-model="dialogSales"
            width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="mibancoprimary"
                :value="valueSales"
                v-bind="attrs"
                v-on="on"
                label="Selecciona tu opción aquí"
                height="48"
                single-line
                hide-details
                readonly
                outlined>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogSales=false">
                  <h5>Frecuencia de tus ventas</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValueSales" :dataRadio="dataSales" :value="valueSales"/>
                </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto vendes <span class="mibancoprimary--text" style="text-transform: lowercase;">{{valueSales}}</span>?</label>
          <v-text-field
            color="mibancoprimary"
            label="S/. 0.00"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div class="d-flex align-center justify-space-between">
          <h3 class="mibancoprimary--text">Compras de mi negocio</h3>
          <v-dialog
              v-model="dialogPurchasesInfo"
              width="350"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="mibancoprimary"
                  v-bind="attrs"
                  v-on="on">mdi-information-outline</v-icon>
              </template>

              <v-card>
                  <v-card-title class="d-flex justify-end pb-0" @click="dialogPurchasesInfo=false">
                      <v-icon>mdi-close</v-icon>
                  </v-card-title>

                  <v-card-text style="text-align: center">
                      <img src="@/assets/svg/Error.svg">
                      <p class="mibancoprimary--text font-weight-bold" style="font-size: 19px; margin-bottom: 48px;">Compras de mi negocio</p>
                      <p class="mb-4" style="line-height: normal; color: #151D18; font-size: 16px;">Coloca el total de compras para <br>tu negocio. <br>Ejm: Mercadería, insumos, etc.</p>
                  </v-card-text>
              </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cada cuánto realizas compras para tu negocio en mercadería?*</label>
          <v-dialog
            v-model="dialogPurchases"
            width="350">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                color="mibancoprimary"
                :value="valuePurchases"
                v-bind="attrs"
                v-on="on"
                label="Selecciona tu opción aquí"
                height="48"
                single-line
                hide-details
                readonly
                outlined>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogPurchases=false">
                  <h5>Frecuencia de tus compras</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValuePurchases" :dataRadio="dataPurchases" :value="valuePurchases"/>
                </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto compras <span class="mibancoprimary--text" style="text-transform: lowercase;">{{valuePurchases}}</span> para tu negocio en mercadería?*</label>
          <v-text-field
            color="mibancoprimary"
            label="S/. 0.00"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div class="d-flex align-center justify-space-between">
          <h3 class="mibancoprimary--text">Gastos fijos mensuales</h3>
          <v-dialog
              v-model="dialogExpenses"
              width="350"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="mibancoprimary"
                  v-bind="attrs"
                  v-on="on">mdi-information-outline</v-icon>
              </template>

              <v-card>
                  <v-card-title class="d-flex justify-end pb-0" @click="dialogExpenses=false">
                      <v-icon>mdi-close</v-icon>
                  </v-card-title>

                  <v-card-text style="text-align: center">
                      <img src="@/assets/svg/Error.svg">
                      <p class="mibancoprimary--text font-weight-bold" style="font-size: 19px; margin-bottom: 48px;">Gastos fijos mensuales</p>
                      <p class="mb-4" style="line-height: normal; color: #151D18; font-size: 16px;">Coloca la <strong>suma total</strong> de tu <br>negocio: <br>
                        Alquiler de local + Transporte de mercadería + Luz + Agua + <br>Celular del negocio + Arbitrios + <br>Otros (publicidad, personal de <br>servicio, etc.)</p>
                  </v-card-text>
              </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto suman los gastos <span class="mibancoprimary--text">mensuales de tu negocio?*</span></label>
          <v-text-field
            color="mibancoprimary"
            label="S/. 0.00"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <h3 class="mibancoprimary--text">Gastos familiares</h3>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto suman tus <span class="mibancoprimary--text">gastos familiares mensuales?</span> (Ejm: alimentación, pensiones, luz, agua, etc)</label>
          <v-text-field
            color="mibancoprimary"
            label="S/. 0.00"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <h3 class="mibancoprimary--text">Dirección del negocio</h3>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Departamento del negocio*</label>
          <v-select
            color="mibancoprimary"
            :items="['Lima']"
            height="48"
            label="Departamento"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Provincia*</label>
          <v-select
            color="mibancoprimary"
            :items="['Lima']"
            height="48"
            label="Provincia"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Distrito*</label>
          <v-select
            color="mibancoprimary"
            :items="['Comas','San Juan de Lurigancho']"
            height="48"
            label="Distrito"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Dirección del negocio*</label>
          <v-text-field
            color="mibancoprimary"
            label="Ingresa la dirección de tu negocio aquí"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div class="d-flex align-center">
          <span class="mibancoprimary--text">Quiero usar mi ubicación actual</span>
          <v-icon color="mibancoprimary">mdi-map-marker-outline</v-icon>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Celular del negocio*</label>
          <v-text-field
            color="mibancoprimary"
            label="Ingresa la dirección de tu negocio aquí"
            height="48"
            single-line
            hide-details
            outlined
          ></v-text-field>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿En qué horario te podemos contactar?</label>
          <v-select
            color="mibancoprimary"
            :items="['9:30 am - 11:30 am','1:00 pm - 3:00 pm','4:00 pm - 6:00 pm']"
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
      </div>
      <div class="d-flex flex-column" style="gap: 8px;">
        <v-btn rounded color="mibancoprimary" height="38" @click="$router.push('/paso-4')">Continuar</v-btn>
        <v-btn rounded color="mibancoprimary" outlined height="38" @click="$router.back()">Volver</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import WarningAlert from '@/components/WarningAlert.vue'
import Step from '@/components/Step.vue'
import RadioCustom from '@/components/RadioCustom.vue'
import CardSeguros from '@/components/CardSeguros.vue'
export default {
  components: {
    WarningAlert,
    Step,
    RadioCustom,
    CardSeguros
  },
  data(){
    return {
      menu: false,
      activePicker: null,
      maxDate: null,
      dateInitBuss: null,
      dialogSales: false,
      valueSales: 'Diariamente',
      dataSales: [
        {label: 'Diariamente', value: "Diariamente"},
        {label: 'Semanalmente', value: "Semanalmente"},
        {label: 'Quincenalmente', value: "Quincenalmente"},
        {label: 'Mensualmente', value: "Mensualmente"}
      ],
      dialogPurchases: false,
      valuePurchases: 'Diariamente',
      dataPurchases: [
        {label: 'Diariamente', value: "Diariamente"},
        {label: 'Semanalmente', value: "Semanalmente"},
        {label: 'Quincenalmente', value: "Quincenalmente"},
        {label: 'Mensualmente', value: "Mensualmente"}
      ],
      dialogPurchasesInfo: false,
      dialogExpenses: false,
      dialogLocation: false,
      tyc: false,
      udp: false
    }
  },
  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    }
  },
  methods: {
    changeValueSales($event){
      this.valueSales = $event
    },
    changeValuePurchases($event){
      this.valuePurchases = $event
    },
    save (date) {
      this.$refs.menu.save(date)
    },
  },
  computed:{
    ...mapState("variables", ['amount']),
    dateFormatted(){
      return this.dateInitBuss ? this.$moment(this.dateInitBuss).format('DD/MM/YYYY') : ''
    }
  },
  mounted(){
    const fechaActual = new Date()
    fechaActual.setFullYear(fechaActual.getFullYear() - 18)
    this.maxDate = fechaActual.toISOString().substr(0, 10)
  }
}
</script>

<style lang="scss">
.step-3{
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
    margin-bottom: 16px;
  }
  &-section-4{
    .v-input__slot{
      align-items: flex-start;
    }
  }
}
</style>