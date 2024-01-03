<template>
  <v-app theme="">

    <v-app-bar flat class="border-b">
      <v-app-bar-title>Ceyp Social</v-app-bar-title>


    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="mb-6 text-brand">Cadastro da pessoa</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Cadastro</v-card-title>

            <v-card-title>
              <v-btn @click="isDialogOpen = true" variant="tonal" size="small" :ripple="false">Adicionar pessoa</v-btn>

              <v-dialog
                v-model="isDialogOpen"
                width="700px"
              >
                <v-card >
                  <v-card-title>Adicionar pessoa</v-card-title>

                  <v-card-text class="">
                    <v-row>
                      <v-col>
                        <v-text-field variant="outlined"  label="Nome completo" :rules="nameRules"></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          variant="outlined" 
                          label="Data de nascimento"
                          placeholder="00/00/0000"
                          :rules="dateRules"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-select
                          variant="outlined" 
                          label="Sexo"
                          :items="['Masculino', 'Feminino']"
                          :rules="sexRules"
                        ></v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-select
                           variant="outlined" 
                           label="Cor"
                           :items="['Branco', 'Pardo', 'Negro']">
                        </v-select>
                      </v-col>

                      <v-col>
                        <v-text-field variant="outlined" :counter="9" label="Celular" :rules="phoneRules"></v-text-field>
                      </v-col>

                      <v-col>
                        <v-checkbox label="WhatsApp"></v-checkbox>
                      </v-col>
                    </v-row> 

                    <v-row>
                      <v-col>
                        <v-text-field variant="outlined" label="Endereço" placeholder="Bairro, lagradouro, número e referência" :rules="adressRules" ></v-text-field>
                      </v-col>
                    </v-row>
                    
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                    <v-btn variant="tonal" color="success">Cadastrar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
          </div>
        </v-card>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const isDialogOpen = ref(false)
const dateRules = [
  value => {
    if (value) {
      return true
    }

    return 'A data é obrigatório';
  },

];
const sexRules = [
  value => {
    if (value) {
      return true
    }

    return 'O sexo é obrigatório';
  },

];
const nameRules = [
  value => {
    if (value) {
      return true
    }

    return 'O nome é obrigatório';
  },

];
const phoneRules = [
  value => {
    if (value) {
      return true
    }

    return 'O celular é obrigatório';
  },

];
const adressRules = [
  value => {
    if (value) {
      return true
    }

    return 'O endereço é obrigatório';
  },

];
</script>








