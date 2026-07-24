import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema()
export class Profile extends Document {
    @Prop()
    'age' : number;

    @Prop()
    'qualifictaion' : string;
}

//for registrinf schema:-

export const ProfileSchema = SchemaFactory.createForClass(Profile);