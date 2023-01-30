import prisma from "../database/db.js";

export async function addUser(name: string, email: string, password: string){
    return prisma.client.create({
        data:{
            name: name,
            email: email, 
            password: password
        }
    })
}
