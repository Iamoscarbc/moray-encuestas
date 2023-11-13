<template>
    <div class="card-sures">
        <div class="card-sures-first">
            <div class="container-card-title">
                <div class="card-title">
                    <h2 class="mibancoprimary--text" style="font-size: 16px;">¡Nuevo Seguro de Vida <br>para ti y tu familia!</h2>
                </div>
            </div>
            <div class="card-prices">
                <span class="card-prices-description">Tu seguro de vida desde:</span>
                <span class="card-prices-amount">S/0.05 al día</span>
            </div>
            <div class="container-speech">
                <img src="@/assets/svg/lines.svg" width="10">
                <span class="speech">¡Porque pensamos en ti y tu familia <br>en esos momentos difíciles!</span>
                <img src="@/assets/svg/lines.svg" width="10" style="rotate: 180deg;">
            </div>
        </div>
        <div class="card-sures-second"></div>
        <div class="form-radios">
            <v-radio-group v-model="sure" hide-details>
                <v-radio
                    :value="true"
                    class="mt-0"
                    color="mibancoprimary"
                    hide-details
                >
                    <template v-slot:label>
                        <div class="d-flex flex-column">
                            <span style="font-size: 10px; line-height: 1.3; font-weight: 600; color: #231F20;">Me interesa y</span>
                            <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }">
                                    <span class="mibancoprimary--text" style="font-size: 10px; line-height: 1.3; font-weight: 600; text-decoration: underline;">deseo más información</span>
                                </template>

                                <v-card>
                                    <v-card-title class="text-h5 grey lighten-2">
                                    Privacy Policy
                                    </v-card-title>

                                    <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                    >
                                        I accept
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </div>
                    </template>
                </v-radio>
                <v-radio
                    :value="false"
                    class="mt-0"
                    color="mibancoprimary"
                    hide-details
                >
                    <template v-slot:label>
                        <div class="d-flex flex-column">
                            <span style="font-size: 10px; line-height: 1.3; font-weight: 600; color: #231F20;">No deseo información</span>
                        </div>
                    </template>
                </v-radio>
            </v-radio-group>
        </div>
        <img class="card-sures-family" src="@/assets/svg/family.svg" width="184">
    </div>
</template>

<script>
export default {
    props: ['sureProp'],
    data(){
        return {
            dialog: false
        }
    },
    computed: {
        sure: {
            get(){
                return this.sureProp
            },
            set(newValue){
                this.$emit('changeSure', newValue)
            }
        }
    },
    methods: {
        openModal(){

        }
    }
}
</script>

<style lang="scss">
.card-sures{
    width: 322px;
    height: 203px;
    background-color: #FFD100;
    margin-bottom: 16px;
    overflow: hidden;
    position: relative;
    padding: 8px 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    box-shadow: 0px 4px 4px 0px #00000040;
    &-first{
        height: calc(203px - 91px);
        width: 100%;
        .container-card-title{
            overflow: hidden;
            margin-bottom: 8px;
            padding: 0px 10px;
            .card-title{
                background-color: #ffffff;
                text-align: center;
                border-radius: 12px 20px;
                transform: rotate(-2deg);
                h2{
                    transform: rotate(2deg);
                    font-weight: 900;
                }
            }
        }
        .card-prices{
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 171px;
            &-description{
                font-size: 10px;
                font-weight: 600;
            }
            &-amount{
                font-size: 24px;
                font-weight: 900;
                color: #009530;
            }
        }
        .container-speech{
            display: flex;
            gap: 3px;
            span{
                font-size: 8px;
                font-weight: 500;
                text-align: center;
            }
        }
    }
    &-second{
        position: absolute;
        height: 90px;
        width: 105%;
        background-color: #ffffff;
        rotate: (-3deg);
        left: -2px;
        bottom: -9px;
        border-radius: 16px;
    }
    &-family{
        position: absolute;
        right: 0;
        bottom: 0;
        border: none;
    }
}
</style>