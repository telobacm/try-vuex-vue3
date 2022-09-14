<template>
  <div class="text-3xl">
    {{ $store.state.counter }}<sup>2</sup> =
    {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default({
})
</script>
