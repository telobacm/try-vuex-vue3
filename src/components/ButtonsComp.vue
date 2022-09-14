<template>
  <div class="flex gap-4 text-2xl">
      <button
        class="px-10 py-4 rounded-2xl bg-blue-400 hover:bg-blue-500"
        @click="$store.dispatch('decreaseCounter')"
      >
        -
      </button>
      <button
        class="px-10 py-4 rounded-2xl bg-blue-400 hover:bg-blue-500"
        @click="$store.dispatch('increaseCounter')"
      >
        +
      </button>
    </div>
</template>

<script>
export default {
}
</script>