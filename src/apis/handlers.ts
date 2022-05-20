import {rest} from 'msw'
import {today, thisWeek, thisMonth, Post} from '@data/index.ts'

export const handlers = [
  rest.get<Post[]>('/posts', (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.json([
        today, thisWeek, thisMonth
      ])
    )
  })
]
