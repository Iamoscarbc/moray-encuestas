<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <WarningAlert/>
      <h2 class="mibancoaccent--text text-center">Préstamo Mi efectivo <br>Semilla 💰</h2>
      <Step :step="3"/>
      <div class="step-3-section-1">
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">Monto a solicitar*</label>
          <v-text-field
            color="mibancoprimary"
            label="S/ 2000"
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
          <div class="d-flex align-center justify-space-between">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">Fecha que iniciaste tu negocio*</label>
            <v-icon color="mibancoprimary">mdi-information-outline</v-icon>
          </div>
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
          <div class="d-flex align-center justify-space-between">
            <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cada cuánto vendes?*</label>
            <v-icon color="mibancoprimary">mdi-information-outline</v-icon>
          </div>
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
                  <template v-slot:append>
                    <v-icon>mdi-chevron-down</v-icon>
                  </template>
              </v-text-field>
            </template>
            <v-card>
                <v-card-title class="d-flex justify-space-between px-4" @click="dialogSales=false">
                  <h5>Número de hijos</h5>
                  <v-icon>mdi-close</v-icon>
                </v-card-title>
                <v-card-text class="px-4">
                  <RadioCustom @changeValue="changeValueSales" :dataRadio="dataSales" :value="valueSales"/>
                </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto vendes <span class="mibancoprimary--text">semanalmente</span>?</label>
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
              v-model="dialogPurchases"
              width="350"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="mibancoprimary"
                  v-bind="attrs"
                  v-on="on">mdi-information-outline</v-icon>
              </template>

              <v-card>
                  <v-card-title class="d-flex justify-end pb-0" @click="dialogPurchases=false">
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
          <v-select
            color="mibancoprimary"
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
          <label class="mb-1 font-weight-medium" style="font-size: 14px;">¿Cuánto compras <span class="mibancoprimary--text">semanalmente</span> para tu negocio en mercadería?*</label>
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
        <div class="d-flex align-center justify-space-between">
          <h3 class="mibancoprimary--text">Dirección del negocio</h3>
          <v-dialog
              v-model="dialogLocation"
              width="350"
              >
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="mibancoprimary"
                  v-bind="attrs"
                  v-on="on">mdi-information-outline</v-icon>
              </template>

              <v-card>
                  <v-card-title class="d-flex justify-end pb-0" @click="dialogLocation=false">
                      <v-icon>mdi-close</v-icon>
                  </v-card-title>

                  <v-card-text style="text-align: center">
                      <img src="@/assets/svg/Error.svg">
                      <p class="mibancoprimary--text font-weight-bold" style="font-size: 19px; margin-bottom: 48px;">-</p>
                      <p class="mb-4" style="line-height: normal; color: #151D18; font-size: 16px;">-</p>
                  </v-card-text>
              </v-card>
          </v-dialog>
        </div>
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
            :items="['Lima']"
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
            :items="['Lima']"
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
      <div class="step-3-section-4">
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
      <div class="d-flex flex-column" style="gap: 8px;">
        <v-btn rounded color="mibancoprimary" height="38" @click="$router.push('/paso-3')">Enviar Solicitud</v-btn>
        <v-btn rounded color="mibancoprimary" outlined height="38" @click="$router.back()">Volver</v-btn>
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
    save (date) {
      this.$refs.menu.save(date)
    },
  },
  computed:{
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