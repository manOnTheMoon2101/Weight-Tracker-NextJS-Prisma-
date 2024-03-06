import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";


export const GET = async () =>{

    try {
        const data = await prisma.data.findMany()

        data.map((x: any) =>{
            x.date = x.date.toDateString();

      
        })

       return NextResponse.json(data);
    }


    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}


export const POST = async (request: any)=>{
    try{
        const body = await request.json()
        const {lostWeight,weight,days,info} = body;

        
        const newPost = await prisma.data.create({
            data:{
             loseWeight:lostWeight,
             weight:weight,
             daysWorkedOut:days,
             extraInfo:info,
            
            }

        })
       

        return NextResponse.json(newPost)
    }
    catch(err){
        return NextResponse.json({
            message:"POST Error",
            err
        },
        {status:500})
    }
}
