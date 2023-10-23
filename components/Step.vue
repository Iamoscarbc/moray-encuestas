<template>
  <div class="card-steps text-left mt-4 mb-4">
    <div class="d-flex flex-column" style="gap: 8px;">
        <span class="mibancoprimary--text font-weight-bold">Paso {{ step }} de 4 😊</span>
        <span class="mibancoaccent--text font-weight-bold" style="font-size: 18px;">Completa tu <br>información personal</span>
    </div>
    <img src="@/assets/svg/Comerciante-Mibanco-Movil.svg" v-if="step == 1">
  </div>
</template>

<script>
export default {
    props: ["step"]
}
</script>

<style lang="scss">
.card-steps{
    padding: 16px 0 0 16px;
    background-color: rgba(233, 247, 237, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 4px;
}
</style>