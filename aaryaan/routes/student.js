import express from 'express'
const router = express.Router()

router.get('/all',(req, res) => {
    res.send('about student')
  })
  router.post('/create',(req, res) => {
    res.send('create student')
  })
  router.put('/update',(req, res) => {
    res.send('update student')
  })
  router.delete('/delete',(req,res)=>{
    res.send('delete student')
  })

  export default router