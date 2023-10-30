<template>
  <div class="card-steps text-left mt-4 mb-4" :class="'step-'+step">
    <div class="d-flex flex-column" style="gap: 8px;">
        <span class="mibancoprimary--text font-weight-bold">Paso {{ step }} de 4 😊</span>
        <span class="mibancoaccent--text font-weight-bold" style="font-size: 18px;" v-html="text"></span>
    </div>
    <img src="@/assets/svg/Comerciante-Mibanco-Movil.svg" v-if="step == 1">
  </div>
</template>

<script>
export default {
    props: ["step", "text"]
}
</script>

<style lang="scss">
.card-steps{
  background-color: rgba(233, 247, 237, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 4px;
  &.step-1{
    padding: 16px 0 0 16px;
  }
  &.step-2{
    padding: 16px;
  }
  &.step-3{
    padding: 16px;
  }
  &.step-4{
    padding: 16px;
  }
}
</style>