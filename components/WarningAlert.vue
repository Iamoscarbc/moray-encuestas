<template>
  <div class="card-warning-alert mb-4">
    <span>Recuerda: Este formulario es solo una prueba y NO AFECTARÁ ningún dato <br>que tenga registrado en Mibanco</span>
  </div>
</template>

<script>
export default {
    name: "CardWarningAlert"
}
</script>

<style lang="scss">
    .card-warning-alert{
        background-color: rgba(255, 209, 0, 1);
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        span{
            font-weight: 800;
        }
    }
</style>