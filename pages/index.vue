<template>
  <section class="container">
    <div>
      <h1>NUXT CHAT</h1>
      <InitializeData />
      <ConversationContainer v-for="id in convoIds" :conversation="conversations[id]" :id="id" :key="id" />
    </div>
  </section>
</template>

<script>
import InitializeData from '~/components/InitializeData'
import ConversationContainer from '~/components/ConversationContainer'
import { mapState } from 'vuex'

export default {
  components: {
    InitializeData,
    ConversationContainer
  },
  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  }
}
</script>