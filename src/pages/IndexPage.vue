<template>
  <q-page class="flex flex-center">
    რაცხა კონტენტი
    <VueFbCustomerChat />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VueFbCustomerChat from "vue-fb-customer-chat";

export default defineComponent({
  name: "IndexPage",
  components: {
    VueFbCustomerChat,
  },
});
</script>
