<template>
  <v-app theme="">

    <v-app-bar flat class="my-5 border-b">
    <v-app-bar-title>
      <v-img class="mb-5 ml-5" :width="130" aspect-ratio="16/9" cover src="./assets/yvonne.png"></v-img>
    </v-app-bar-title>
    <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
    <v-app-bar-title>
      <h2 class="mb-3">CEYP Social</h2>
    </v-app-bar-title>

    </v-app-bar>

    <v-main>
      <v-container>

        <v-card flat class="border">
          <div class="d-flex justify-space-between">
              <v-dialog
                v-model="isDialogOpen"
                width="700px"
              >
              <form @submit.prevent="handleSubmit">
                <v-card>
                  <v-card-title><span v-if="formType == 'add'">Cadastrar</span> <span v-else>Editar</span> pessoa</v-card-title>

                  <v-card-text>

                    <v-row >
                      <v-col md="12">
                        <v-text-field v-model="data.name" variant="outlined" label="Nome completo" :rules="nameRules" required></v-text-field>
                      </v-col>
                      
                      <v-col md="6">
                        <v-text-field v-model="data.birth" variant="outlined" label="Data de nascimento" placeholder="00/00/0000" :rules="dateRules" required></v-text-field>
                      </v-col>

                      <v-col md="6">
                        <v-select v-model="data.sex" variant="outlined" label="Sexo" :items="['Masculino', 'Feminino']" :rules="sexRules" required></v-select>
                      </v-col>

                      <v-col md="4">
                        <v-select v-model="data.color" variant="outlined" label="Cor" :items="['Branco', 'Pardo', 'Negro']"></v-select> 
                      </v-col>
                      <v-col md="4">
                      <v-text-field v-model="data.phone" variant="outlined" :counter="9" label="Celular" :rules="phoneRules"></v-text-field>
                    </v-col>

                    <v-col md="4">
                      <v-checkbox v-model="data.whatsapp" label="WhatsApp"></v-checkbox>
                    </v-col>

                    <v-col md="9">
                        <v-text-field v-model="data.address" variant="outlined" label="Bairro" :rules="bairroRules" ></v-text-field>
                    </v-col>

                    <v-col md="3">
                      <v-text-field v-model="data.number" variant="outlined" label="Número" :rules="numeroRules" ></v-text-field>
                    </v-col>

                    <v-col md="6">
                      <v-text-field v-model="data.lagradouro" variant="outlined" label="lagradouro" :rules="lagradouroRules" ></v-text-field>
                    </v-col>
                    

                    <v-col md="6">
                      <v-text-field v-model="data.reference" variant="outlined" label="Referência" :rules="referenciaRules" ></v-text-field>
                    </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions> 
                  <v-spacer></v-spacer>  <v-btn class="mr-6 mb-2" variant="text" @click="isDialogOpen = false">Fechar</v-btn>
                    <v-btn class="mr-6 mb-2" variant="tonal" color="success" type="submit" v-if="formType == 'add'">Salvar</v-btn>
                  </v-card-actions>
                </v-card>
              </form>
              </v-dialog>

          </div>
        </v-card>

          <v-card>
          <v-card-text>
            
             <v-row><h1 class="ma-5">Usuários</h1><v-spacer></v-spacer><v-btn class="my-5 mx-4" @click="data = {}; formType = 'add'; isDialogOpen = true" variant="tonal" size="small">Adicionar pessoa</v-btn></v-row>
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
                    <v-btn class="ml-3" color="info" type="buttom" @click="data = item; formType = 'edit'; isDialogOpen = true">Editar</v-btn>
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
const formType = ref('add')
const users = computed(() => {
  return store.$state.users
})

const handleSubmit = () => {
  if (formType.value == 'add') {
      store.createUser(data.value)
  } else {

  }


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
