import dotenv from 'dotenv'
import server from './src/server/index'
import { logError, logSuccess } from './src/utils/logger'

dotenv.config()

const port = process.env.PORT || 8000

// Execute server

server.listen(port, () => {
  logSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`)
})

// control Server Error

server.on('error', (error) => {
  logError(`[SERVER ERROR]: ${error}`)
})

export default server