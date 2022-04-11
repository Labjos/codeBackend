import express, { Express, Request, Response } from 'express'
import rootRouter from '../routes/index'
import dotenv from 'dotenv'

// security
import cors from 'cors'
import helmet from 'helmet'

// TODO HTTPS

// configuration the .env file
dotenv.config()

// create Express App

const server: Express = express()

// definition of /api and execute the rootRouter from 'index.ts' in routes

server.use('/api',
  rootRouter)

// TODO Mongoose Connection

// security Server
server.use(helmet())
server.use(cors())

// content type config

server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))

// Redirection http://localhost:8000/ --> http://loclahost:8000/api

server.get('/', (req:Request, res: Response) => {
  res.redirect('/api')
})

export default server
