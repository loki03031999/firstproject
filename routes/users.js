import express from 'express';


const router = express.Router();

const user =[
    {
        "firstname":"lokesh",
        "lastname":"gulhane",
        "age":22
    },
    {
        "firstname":"om",
        "lastname":"gulhane",
        "age":12
    },
    {
        "firstname":"lokesh",
        "lastname":"gulhane",
        "age":22
    }
] 


router.get('/', (req,res)=>{
    res.send("hello from !!");
})

router.get('/user',(req,res)=>{
    res.send(user);
})


export default router;