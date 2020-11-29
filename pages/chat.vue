<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" sm="8">
      <v-card>
        <v-card-title>Chat with Auriane</v-card-title>
        <v-card-text>
          <v-form v-on:submit.prevent="sendChat">
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


                    </v-list-item>
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
                  <v-btn color="blue" icon v-on:click="sendChat">
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
import {Socket} from "socket.io-client";
import {Bot} from "~/js/bot";

export default {
  components: {},
  data: () => ({
    chatMessage: '',
    socket: null,
    messages: [
      {
        me: false,
        content: 'This is a test'
      },
      {
        me: true,
        content: 'This is a test from me'
      }
    ],

  }),
  methods: {
    sendChat: function () {
      if (this == undefined || this.chatMessage == undefined) {
        return
      }
      this.messages.push({me: true, content: this.chatMessage})
      this.socket.sendMessage(this.chatMessage)
      this.chatMessage = null

    }
  }
}
</script>

<style scoped>

.chatbubble-me{
  position : left;
  background: #4e4747;
  padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 1rem;
}
.chatbubble-me:after {
	content: '';
	position: absolute;
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-right-color: #4e4747;
	border-left: 0;
  border-top: 0;
	margin-top: -15px;
	margin-left: 2px;
}

.chatbubble-other{
  position : right;
  background: #aca6a6;
  padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 1rem;
}
.chatbubble-other:after {
	content: '';
	position: absolute;
	right: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-left-color: #aca6a6;
	border-right: 0;
	border-top: 0;
	margin-top: -15px;
	margin-right: 2px;
}







</style>
