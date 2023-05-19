import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config/config'
import router from './routes/app.route'

const app = express()

// Settings
app.set('port', config.PORT)

// Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route
app.use('/', router)

export default app