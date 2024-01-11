<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
          <v-window-item :value="1"></v-window-item>
          <v-row>
            <v-col cols="12" sm="6">
              <v-card-text class="mt-12">
                <h4 class="text-center">Login in to Your Account</h4>
                <h6 class="text-center grey--text">Log in to your account so you can continue building
                <br>and editing your onboarding flows
                </h6>
                <v-row align="center" justify="center">
                  <v-col cols="12" sm="8">
                    <v-text-field label="Email" variant="outlined" dense color="blue" autocomplete="false" class="mt-16"></v-text-field>
                    <v-text-field label="Senha" variant="outlined" dense color="blue" autocomplete="false" stype="password"></v-text-field>
                    <v-row>
                      <v-col cols="12" sm="7">
                        <v-checkbox label="Remenber Me" class="mt-n1" color="blue"></v-checkbox>
                      </v-col>
                      <v-col cols="12" sm="5">
                        <span class="caption blue--text">Forget password</span>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="6"></v-col>
          </v-row>
        </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>


export default {
data: () => {
  step: 1
},
propos: {
  source: String
}


};
</script>
<style scoped>
.v-appication .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-appication .rounded-bl-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
