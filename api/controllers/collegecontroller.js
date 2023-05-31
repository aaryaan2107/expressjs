import clgModel from '../models/clg.js'
class collegeController{
    static createDoc=async (req,res) =>{
        try {
            
            const doc = new clgModel(req.body)
            const result = await doc.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        }
        res.send("data created")
    }
    static getAllDoc= async (req,res)=>{
        try {
           const result = await clgModel.find()  
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
    static getSingleDocById=async(req,res)=>{
        try {
            const result = await clgModel.findById(req.params.id)  
             res.send(result)
         } catch (error) {
             console.log(error)
         }
        
    }
    static updateDocById=async (req,res)=>{
        try {
            const result = await clgModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result)
        } catch (error) {
            console.log(error)
        }

        
    }
    static deleteDocById=async (req,res)=>{
        try {
            const result = await clgModel.findByIdAndDelete(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
            console.log(error)
        }
        // res.send("delete doc by id ")
    }
}

export default collegeController