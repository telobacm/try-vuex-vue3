<template>
  <div class="home grid justify-items-center gap-5 font-semibold">
    <LogoComp />
    <CounterComp />
    <SquaredComp />
    <ButtonsComp />
    <ColorInput />
    <ColorRandom />
  </div>
</template>

<script>
import CounterComp from "@/components/CounterComp.vue";
import SquaredComp from "@/components/SquaredComp.vue";
import ButtonsComp from "@/components/ButtonsComp.vue";
import ColorInput from "../components/ColorInput.vue";
import ColorRandom from "../components/ColorRandom.vue";
import LogoComp from "../components/LogoComp.vue";

export default {

  name: "HomeView",
  components: {
    CounterComp,
    SquaredComp,
    ButtonsComp,
    ColorInput,
    ColorRandom,
    LogoComp
},
};
</script>
