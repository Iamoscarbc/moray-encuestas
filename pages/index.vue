<template>
  <v-row justify="center" align="center" class="mt-4">
    <v-col cols="12" class="text-center">
      <h2 class="mb-4">¡Muchas gracias por tu <br>apoyo!</h2>
      <span style="font-size: 20px;">Este formulario es solo una <br>prueba y no cambiará <br>ningún dato que esté <br>registrado en la <br>información de Mibanco</span>
      <v-btn class="mt-4" width="100%" rounded color="mibancoprimary" height="38" @click="$router.push('/monto')">Iniciar prueba</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
