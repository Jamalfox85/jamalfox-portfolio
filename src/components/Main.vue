<template lang="">
  <div class="client_wrapper">
    <Body class="home-wrapper" />
  </div>
</template>

<script>
import { useModal } from "../composables/useModal.ts";
export default {
  setup() {
    const modal = useModal();
    return { modal };
  },
};
</script>

<style lang="scss">
.client_wrapper {
  flex-grow: 1;
  .home-wrapper {
    // height: 100%;
    background: url("../assets/images/nami-splash.jpeg");
    background-size: cover;
    position: relative;
    color: rgb(240, 230, 210);
    // width: 100%;
    flex-grow: 1;
  }
}
</style>
