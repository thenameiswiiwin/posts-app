<script setup lang="ts"></script>

<template>
  <section>
    <div class="container mx-auto mt-20 min-h-screen px-6">
      <suspense>
        <template #default>
          <Timeline />
        </template>
        <template #fallback>
          <Spinner />
        </template>
      </suspense>
    </div>
  </section>
</template>

<script lang="ts">
  import Timeline from '@components/TimelineComponent.vue'
  import Spinner from '@components/SpinnerComponent.vue'

  export default {
    name: 'HomeComponent',
    components: {
      Timeline,
      Spinner,
    },
  }
</script>
