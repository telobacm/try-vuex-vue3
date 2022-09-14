<template>
    <img alt="Vue logo" src="../assets/logo.png" :style="myStyle" />
</template>

<script>
export default {
  computed: {
    myStyle() {
      return { rotate: this.$store.getters.counterSquared+'deg' };
    },
  }
}
</script>