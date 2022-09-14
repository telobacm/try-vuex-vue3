<template>
  <div>
      <button
        :style="myStyle"
        class="rounded-lg px-6 py-3 focus:outline-none"
        @click="$store.commit('randomColor')"
      >
        Random Color
      </button>
    </div>
</template>

<script>
export default ({
  computed: {
    myStyle() {
      return { backgroundColor: this.$store.state.colorCode };
    },
  }
})
</script>
