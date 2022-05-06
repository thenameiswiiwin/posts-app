<script setup lang="ts"></script>

<template>
  <section>
    <div class="container mx-auto mt-20 px-6">
      <Timeline />
    </div>
  </section>
</template>

<script lang="ts">
  import Timeline from '@components/TimelineComponent.vue'

  export default {
    name: 'HomeComponent',
    components: {
      Timeline,
    },
  }
</script>
