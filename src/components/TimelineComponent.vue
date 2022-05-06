<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { today, thisWeek, thisMonth } from '../data/mock.ts'
  import moment from 'moment'

  type Period = 'Today' | 'This Week' | 'This Month'

  const periods = ['Today', 'This Week', 'This Month']
  const currentPeriod = ref<Period>('Today')
  const posts = computed(() => {
    return [today, thisWeek, thisMonth].filter(post => {
      if (currentPeriod.value === 'Today') {
        return post.created.isAfter(moment().subtract(1, 'day'))
      }
      if (currentPeriod.value === 'This Week') {
        return post.created.isAfter(moment().subtract(1, 'week'))
      }
      if (currentPeriod.value === 'This Month') {
        return post.created.isAfter(moment().subtract(1, 'month'))
      }
      return false
    })
  })

  const setPeriod = (period: Period) => {
    currentPeriod.value = period
  }
</script>

<template>
  <nav class="tabs">
    <span class="flex w-full justify-center">
      <ul v-for="period in periods" :key="period">
        <li
          :class="[
            'tab tab-lifted md:px-12',
            {
              'btn btn-outline btn-accent tab-active': period === currentPeriod,
            },
          ]"
          :data-test="period"
          @click="setPeriod(period)"
        >
          <a>{{ period }}</a>
        </li>
      </ul>
    </span>
  </nav>
  <main>
    <TimelinePost v-for="post in posts" :key="post.id" :post='post'/>
  </main>
</template>

<script lang="ts">
  import TimelinePost from '@components/TimelinePost.vue'

  export default {
    name: 'TimelineComponent',
    components: {
      TimelinePost
    }
  }
</script>
