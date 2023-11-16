<template>
    <v-row justify="center" align="center">
        <v-col cols="12">
            <WarningAlert />
            <h2 class="mb-3">¡Hola! Empieza tu solicitud de préstamo aquí</h2>
            <span>Completa tus datos correctamente para poder evaluarte.</span>
            <div class="step-1-section-3 mt-6">
                <div class="d-flex justify-space-between">
                    <div style="width: 30%;">
                        <label class="mb-1 font-weight-medium" style="font-size: 14px;">Documento</label>
                        <v-text-field label="DNI" height="48" single-line hide-details disabled outlined></v-text-field>
                    </div>
                    <div style="width: 67%;">
                        <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número de identidad*</label>
                        <v-text-field placeholder="Ingrese Nro de documento" height="48" single-line hide-details outlined v-model="form.documentNumber">
                        </v-text-field>
                    </div>
                </div>
                <div>
                    <label class="mb-1 font-weight-medium" style="font-size: 14px;">Confirma tu Número de DNI</label><br>
                    <label class="mibancoprimary--text" style="font-size: 12px;">(recuerda que será validado por
                        RENIEC)*</label>
                    <v-text-field placeholder="Vuelve a ingresar tu N° de identidad" height="48" single-line hide-details
                        outlined v-model="form.documentNumberConfirmation">
                    </v-text-field>
                </div>
                <div>
                    <label class="mb-1 font-weight-medium" style="font-size: 14px;">Número celular*</label>
                    <v-text-field label="Ingresa tu número celular" height="48" single-line hide-details outlined v-model="form.phone">
                    </v-text-field>
                </div>
                <p style="font-size: 13px; font-weight: 500;">
                    <span class="mibancoprimary--text">¡Ojo, emprendedor/a!</span> Asegúrate de
                    <span class="mibancoprimary--text">escribir
                        <br _ngcontent-serverapp-c256="" class="d-block d-md-none"> correctamente tu número</span> para que
                    puedan
                    <br _ngcontent-serverapp-c256="" class="d-block d-md-none"> contactarse contigo.
                </p>
                <div>
                    <label class="mb-1 font-weight-medium" style="font-size: 14px;">Correo electrónico*</label>
                    <v-text-field placeholder="Ingresa tu correo electrónico" height="48" single-line hide-details outlined v-model="form.email">
                    </v-text-field>
                </div>
                <v-checkbox
                    class="mt-0"
                    v-model="tdp"
                    color="mibancoprimary"
                    hide-details
                >
                    <template v-slot:label>
                    <span style="font-size: 14px;">Marca esta casilla para <span class="mibancoprimary--text text-underline">autorizar el <br>tratamiento de tus datos personales.</span></span>
                    </template>
                </v-checkbox>
            </div>
            <v-btn width="100%" rounded color="mibancoprimary" height="38" @click="nextStep()"
                :disabled="!validForm">Continuar</v-btn>
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
    data() {
        return {
            form: {
                name: '',
                lastNameP: '',
                lastNameM: '',
                birthdate: '',
                phone: '',
                email: '',
                documentNumber: ''
            },
            tdp: false
        }
    },
    computed: {
        validForm() {
            return !!this.form.documentNumber && !!this.form.phone && !!this.tdp && !!this.form.email
        }
    },
    methods: {
        ...mapMutations("variables", ['SET_FORM', 'SET_QUOTAS']),
        nextStep() {
            this.SET_FORM(this.form)
            this.$router.push('/monto')
        }
    }
}
</script>
  
<style lang="scss">
.step-1 {
    &-section-1 {
        border: 2px solid rgba(233, 247, 237, 1);
        display: flex;
        flex-direction: column;
        padding: 16px;
        text-align: left;
        gap: 10px;
        margin-bottom: 16px;
    }

    &-section-2 {
        border: 1px solid rgba(0, 149, 48, 1);
        background-color: rgba(233, 247, 237, 1);
        border-radius: 4px;
        padding: 12px 16px;
        margin-bottom: 16px;
    }

    &-section-3 {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 24px;
    }
}
</style>