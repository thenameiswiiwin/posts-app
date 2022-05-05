<script setup lang="ts">
import { useCountState, storeToRefs } from '@stores'

const countState = useCountState()
const { count, doubleCount } = storeToRefs(countState)
</script>

<template>
  <main class="flex min-h-screen flex-col items-center justify-center">
    <img class="width-full mb-20" src="@assets/images/logo.png" />
    <h1 id="count">count is {{ count }}</h1>
    <h2 id="double_count">double count is {{ doubleCount }}</h2>
    <div class="my-auto mt-16 mb-0 flex w-96 items-center justify-between">
      <button
        id="dec_btn"
        class="inline-block rounded bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
        @click="countState.reduce"
      >
        dec
      </button>
      <button
        id="inc_btn"
        class="inline-block rounded bg-green-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg"
        @click="countState.increment"
      >
        inc
      </button>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'HomeComponent',
}
</script>
