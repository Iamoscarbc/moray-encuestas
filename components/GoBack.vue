<template>
  <div class="d-flex align-center mb-4" style="gap: 8px" @click="$router.back()">
    <v-icon color="mibancoprimary">mdi-chevron-left-circle</v-icon>
    <span class="mibancoprimary--text go-back">Regresar</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.go-back{
    font-weight: 700;
}
</style>