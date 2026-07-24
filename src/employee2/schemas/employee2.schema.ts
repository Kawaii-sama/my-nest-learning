import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Profile } from "./profile.schema"

@Schema()
export class Employee2 extends Document {

}
