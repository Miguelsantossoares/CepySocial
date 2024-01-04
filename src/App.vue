<template>
  <v-app theme="">

    <v-app-bar flat class="my-5 border-b">
    <v-app-bar-title>
      <v-img class="mb-5 ml-5" :width="130" aspect-ratio="16/9" cover src="D:\Miguel\Repositório Ceyp\CeypSocial\src\assets/yvonne.png"></v-img>
    </v-app-bar-title>

    </v-app-bar>

    <v-main>
      <v-container>
        <h1 class="mb-6 mt-6 text-brand">Cadastro da pessoa</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Cadastro</v-card-title>

            <v-card-title>
              <v-btn class="ma-1" @click="isDialogOpen = true" variant="tonal" size="small" :ripple="false">Adicionar pessoa</v-btn>
              <v-dialog
                v-model="isDialogOpen"
                width="700px"
              >
              <form @submit.prevent="handleSubmit">
                <v-card >
                  <v-card-title>Adicionar pessoa</v-card-title>

                  <v-card-text class="">

                    <v-row>
                      <v-col>
                        <v-text-field
                        v-model="data.name"
                        variant="outlined" 
                        label="Nome completo"
                        :rules="nameRules"
                        required
                        >
                      </v-text-field>
                      </v-col>
                      
                      <v-col>
                        <v-text-field
                          v-model="data.birth"
                          variant="outlined" 
                          label="Data de nascimento"
                          placeholder="00/00/0000"
                          :rules="dateRules"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-select
                          v-model="data.sex"
                          variant="outlined" 
                          label="Sexo"
                          :items="['Masculino', 'Feminino']"
                          :rules="sexRules"
                          required
                        ></v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-select
                          v-model="data.color"
                           variant="outlined" 
                           label="Cor"
                           :items="['Branco', 'Pardo', 'Negro']">
                        </v-select>
                      </v-col>

                      <v-col>
                        <v-text-field v-model="data.phone" variant="outlined" :counter="9" label="Celular" :rules="phoneRules"></v-text-field>
                      </v-col>

                      <v-col>
                        <v-checkbox v-model="data.whatsapp" label="WhatsApp"></v-checkbox>
                      </v-col>
                    </v-row> 

                    
                      <v-row class="mx-0">
                          <v-text-field v-model="data.address" variant="outlined" label="Bairro" :rules="bairroRules" ></v-text-field>
                      </v-row>

                      <v-row class="mx-0">
                          <v-text-field v-model="data.lagradouro" variant="outlined" label="lagradouro" :rules="lagradouroRules" ></v-text-field>
                      </v-row>

                      <v-row class="mx-0">
                          <v-text-field v-model="data.number" variant="outlined" label="Número" :rules="numeroRules" ></v-text-field>
                      </v-row>

                      <v-row class="mx-0">
                          <v-text-field v-model="data.reference" variant="outlined" label="Referência" :rules="referenciaRules" ></v-text-field>
                      </v-row>
                    

                  </v-card-text>

                  <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-btn class="mr-6 mb-2" variant="text" @click="isDialogOpen = false">Cancelar</v-btn>
                    <v-btn class="mr-6 mb-2" type="submit" variant="tonal" color="success">Cadastrar</v-btn>
                  </v-card-actions>

                </v-card>
              </form>
              </v-dialog>
            </v-card-title>
          </div>
        </v-card>

          <v-card>
          <v-card-text>
            <h1>Usuários</h1>

            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Nome completo
                  </th>
                  <th class="text-left">
                    Data de nascimento
                  </th>
                  <th class="text-left">
                    Celular
                  </th>
                  <th>

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item, index in users"
                  :key="index"
                >
                  <td>{{ item.name }}</td> 
                  <td>{{ item.birth }}</td>
                  <td>{{ item.phone }}</td>
                  <v-col class="mt-1">
                    <v-btn class="mr-3" color="error" type="buttom" @click="deleteUser(index)">Deletar</v-btn>
                    <v-btn class="ml-3" color="info" type="buttom" @click="deleteUser(index)">Editar</v-btn>
                  </v-col>
 
                    

                </tr>

              </tbody>
            </v-table>
          </v-card-text>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, } from 'vue';
import { useUserStore } from './store/user'

const store = useUserStore()
const data = ref({})
const users = computed(() => {
  return store.$state.users
})

const handleSubmit = () => {
  store.createUser(data.value)
  data.value = {}
  isDialogOpen.value = false
}

const deleteUser = (id) => {
  store.deleteUser(id);
}

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

 </script>
