import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app=express()
const PORT=8000

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about',(req,res)=>{
  res.sendFile(path.join(__dirname, 'about.html'));
})
app.get('/contact-me',(req,res)=>{
  res.sendFile(path.join(__dirname, 'contact-me.html'));
})
app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname, '404.html'));
}) 

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
}).on('error', (err) => {
  console.error('Failed to start server:', err)
})