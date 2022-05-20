<script setup lang="ts"></script>

<template>
  <section :key="post.id" class="card mt-4 w-full bg-base-100 shadow-xl">
    <div class="card-body flex-row">
      <a class="btn btn-link btn-xs card-title">{{ post.title }}</a>
      <div>{{ post.created.format('Do MMM') }}</div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Post } from '@data/index.ts'

  export default {
    name: 'TimelineComponent',
    props: {
      post: {
        type: Object as () => Post,
        required: true,
      },
    },
  }
</script>
