import express from "express";
import Contact from '../models/Contact.js'
import Workout from '../models/Workout.js'
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.delete("/workout/:id",async (req,res)=>{
  const id = req.params.id;
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(id);
    if(!deletedWorkout){
      return res.status(404).json({ message: "Workout not found" });
    }
    res.status(200).json({message:"Workout deleted successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({success:false,error:"failed to deleted workout"}) 
  }
})

router.post("/contact",async(req,res)=>{
  const {name,email,message}=req.body;
  
  if(!name || !email || !message){
    return res.status(400).json({message:"Please fill all fields."})
  }
  
  try{
    const newContact  = new Contact({name,email,message});

    await newContact.save();
    res.status(200).json({
      "message":"contact saved success"
    })
  }
  catch(error){
    console.log(error);
    res.status(500).json({success:false,error:"failed to save contact"})
  }

})

export default router;
