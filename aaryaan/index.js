
// const express = require('express')
import express from 'express'
const app = express() 
const port = 3000
// const stu = require('./routes/student.js')
// const tea  = require('./routes/teacher.js')

// import stu from './routes/student.js'
// import tea from './routes/teacher.js'


// app.get('/about', (req, res) => {
//   res.send('ABOUT PAGE!')
// })
// app.get('/login', (req, res) => {
//     res.send('Hello aaryaan welcome!')
//   })
//   app.get('/logout', (req, res) => {
//     res.send('thank you aaryaan')
//   })
//   app.all('/all', (req, res) => {
//     res.send('ALL METHOD')
//   })  
  // app.get('*', (req, res) => {
  //   res.send('PAGE NOT FOUND!!!!')
  // })
  // app.all('/api/*', (req, res) => {
  //   res.send('API PAGE NOT FOUND ')
  // })

// app.get('/ab?cd', (req, res) => {
//   res.send('ACD AND ABCD WORKS!')
// })
// app.get(/ab/, (req, res) => {
//   res.send('THIS IS A REGULAR EXPRESSION A!')
// })
// app.get('/cbexample1', (req, res) => {
//   res.send('THIS IS ONE CALLBACK EXAMPLE ')
// })
// app.get('/cbexample2', (req, res,next) => {
//  console.log('first call back')
//  next()
// },(req, res)=>{
//   console.log('SECOND CALL BACK ')
//   res.send('MORE THAN ONE CALLABACK')
// })
//  const cb1 = (req,res,next) => {
//   console.log('one')
//   next()
//  }
//  const cb2 = (req,res,next) => {
//   console.log('two')
//   next()
//  }
//  const cb3 = (req,res) => {
//   console.log('three')
//   res.send('ARRAY OF CALLABACK')
//  }

//  app.get('/cbexample3',[cb1,cb2,cb3])
 
// const cb1 = (req,res,next) => {
//     console.log('one')
//     next()
//    }
//    const cb2 = (req,res,next) => {
//     console.log('two')
//     next()
//    }
//     app.get('/cbexample4',[cb1,cb2],(req,res,next)=>{
//       console.log('third')
//       next()
//     },(req,res)=>{
//       console.log('forth')
//       res.send('combination of independent and array of call back ')
//     })
// app.use('/student',stu)
// app.use('/teacher',tea)

// app.get('/student/delete:id([0-9]{3})',(req,res)=>{
//   console.log(req.params)
//   res.send(`student deleted ${req.params.id}`)
// })
// app.get('/:type(post|article)/:id',(req,res)=>{
//   console.log(req.params)
//   res.send('post and article')
// })
// app.get('/product/:category/:id',(req,res)=>{
//   console.log(req.params)
//   res.send(`product category ${req.params.category} and product id ${req.params.id}`)
// })
// app.get('/student/delete:id([0-9]{2})',(req,res)=>{
//   console.log(req.params)
//   const {id} =req.params
//   console.log(id)
//   if(id == 10)
//   {
//   res.send("this id will not be deleted ")
//   }
//   else
//   {
//     res.send(`student deleted ${id}`)
//   }
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

