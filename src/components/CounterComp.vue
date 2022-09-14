<template>
  <div :style="{ color: $store.state.colorCode }" class="text-8xl">
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {
};
</script>