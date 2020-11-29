<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card>
        <v-card-title>Welcome to HealthSupport !</v-card-title>
        <v-card-text>
          HealthSupport is a ChatBot which aims to improve mental health through discussion with the user.
          It analyses the intent, and uses standardized answers proven to better mood and emotion regulation.
          It is open source, and you can see the source code at the following links:
          <div class="spacer"></div>
          <ul>
            <li><a href="https://github.com/Redblueflame/healthassist-bot">
              <v-icon>{{ icons.mdiGithub }}</v-icon>
              Chatbot sourcecode</a></li>
            <li><a href="https://github.com/Redblueflame/HealthSupport-Frontend">
              <v-icon>{{ icons.mdiGithub }}</v-icon>
              Frontend (this website)</a></li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn v-on:click="redirect_chat">Get started</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {
  mdiGithub
} from '@mdi/js'

// noinspection JSUnusedGlobalSymbols
export default {
  components: {},
  data: () => ({
    icons: {
      mdiGithub
    }
  }),
  methods: {
    redirect_chat: () => {
      window.location.href = "https://rasa.healthassist.redbluefla.me/guest/conversations/production/a743bdaa038742acbb1fd6609760907d"
    }
  }
}
</script>
<style scoped>
.spacer {
  margin-bottom: 10px;
}

ul {
  padding: 0;
  list-style-type: none;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}
</style>
