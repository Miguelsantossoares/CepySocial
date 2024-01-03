<template>
  <v-app  theme="dark">
    <v-app-bar flat class="border-b">
      <v-app-bar-title>Ceyp Social</v-app-bar-title>
    </v-app-bar>
    
  <v-main>
    <v-container>
        <v-card>
         <h1 class="pa-4 text-brand">Cadastro</h1>
         <v-card-text>

                <v-text-field label="Nome completo" variant="outlined" placeholder="Seu nome"></v-text-field>
 
                <v-text-field label="Data de nascimento" variant="outlined" placeholder="00/00/0000"></v-text-field>

                <v-select label="Sexo" variant="outlined" :items="['Masculino', 'Feminino']">
                </v-select>

                <v-text-field
              :counter="9"
              label="Telefone"
              variant="outlined"
              placeholder="(00) 00000000">
                </v-text-field>
                <v-checkbox class="" label="Whatsapp"></v-checkbox>
              <v-select
                label="Cor"
                variant="outlined"
                :items="['Branco', 'Pardo', 'Negro']">
              </v-select>
              <v-text-field
                label="Endereço"
                variant="outlined"
                placeholder="Bairro, lagradouro, número e referência">
              </v-text-field>
              <v-btn class="w-100 w-max-width" variant="tonal">Cadastrar</v-btn>

          </v-card-text>
      </v-card>
    </v-container>
  </v-main>
  </v-app>

</template>

<script setup>
  //
</script>
