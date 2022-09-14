<template>
  <div>
      <input
        type="text"
        class="bg-gray-100 rounded-lg px-6 py-3 focus:outline-none"
        placeholder="enter color"
        v-model="$store.state.colorCode"
      />
    </div>
</template>

<script>
export default {
}
</script>