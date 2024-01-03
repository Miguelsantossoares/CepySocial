<template>
  <v-card>
    <v-card-text>
      <v-row>
        
        <v-col>
          <v-text-field label="Nome completo"></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
          label="Data de Nascimento"
          placeholder="00/00/0000"
          ></v-text-field>
        </v-col>

          <v-radio-group>
            <v-radio label="Masculino" value="M"></v-radio>
            <v-radio label="Feminino" value="F"></v-radio>
          </v-radio-group>

          <v-combobox
            label="Cor"
            :items="['Branco', 'Pardo', 'Negro']">
          </v-combobox>

      </v-row>
    </v-card-text>
  </v-card>

</template>

<script setup>
  //
</script>
