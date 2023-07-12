import serverlessExpress from '@vendia/serverless-express'
import cors from 'cors'
import express from 'express'

import { router as userRouter } from './routers/user'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/user', userRouter)

export const handler = serverlessExpress({ app })
