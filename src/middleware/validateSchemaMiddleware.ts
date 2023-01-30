import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export async function validateSchema(schema: ObjectSchema){
    return(req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error){
            return res.status(404).send(error.details.map(e => e.message))
        }
        next()
    }
}