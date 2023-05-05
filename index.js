import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    const message = `Hello World! I'm running on ${os.hostname()} (${os.arch()})`
    console.log(message)
    res.send(message)
})

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`)
})
