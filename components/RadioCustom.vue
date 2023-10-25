<template>
    <v-radio-group v-model="radioGroup" row class="radio-group-custom" hide-details>
        <v-radio
            v-for="ele in dataRadio"
            :key="ele.value"
            :label="ele.label"
            :value="ele.value"
        >
        </v-radio>
    </v-radio-group>
</template>

<script>
export default {
    props: ["dataRadio", "value"],
    computed:{
        radioGroup: {
            get(){
                return this.value
            },
            set(newVal){
                this.$emit('changeValue', newVal)
            }
        }
    }
}
</script>
<style lang="scss">
.radio-group-custom{
    margin-top: 8px;
    .v-input--radio-group__input{
        gap: 8px;
        .v-radio{
            margin: 0;
        }
    }
    .v-input--selection-controls__input{
        display: none;
    }
    label{
        padding: 8px 16px;
        background: rgba(233, 247, 237, 1);
        min-width: 81px;
        justify-content: center;
        border-radius: 50px;
        color: rgba(0, 149, 48, 1) !important;
    }
    .v-item--active{
        label{
            color: #ffffff !important;
            background: rgba(0, 149, 48, 1);
        }
    }
}
</style>