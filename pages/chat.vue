<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card>
        <v-card-title>Chat with Auriane</v-card-title>
        <v-card-text>
          <v-form>
            <v-container fill-height>
              <v-row>
                <v-virtual-scroll
                  :bench="0"
                  :items="messages"
                  height="300"
                  item-height="64"
                >
                  <template v-slot:default="message">
                    <v-list-item :key="message.index">
                      <v-list-item-content>
                        <v-list-item-title :class="message.item.me ? ['chatbubble-me'] : ['chatbubble-other']">
                          {{ message.item.content }}
                        </v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-icon small>
                          mdi-open-in-new
                        </v-icon>
                      </v-list-item-action>
                    </v-list-item>

                    <v-divider></v-divider>
                  </template>
                </v-virtual-scroll>
              </v-row>
              <v-row>
                <v-col
                  cols="8"
                  md="10"
                >
                  <v-text-field
                    v-model="chatMessage"
                    label="Send a message"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="4"
                  md="2"

                >
                  <v-btn color="blue" icon>
                    <v-icon>mdi-send</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
export default {
  components: {},
  data: () => ({
    chatMessage: '',
    messages: [
      {
        me: false,
        content: 'This is a test'
      },
      {
        me: true,
        content: 'This is a test from me'
      }
    ]
  })
}
</script>

<style scoped>

</style>
