import serverlessExpress from '@vendia/serverless-express'
import cors from 'cors'
import express from 'express'

import { router as nftRouter } from './routers/nftRouters'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/nft', nftRouter)

export const handler = serverlessExpress({ app })
