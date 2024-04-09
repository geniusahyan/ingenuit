import { Mongoose } from "mongoose";
import {connect} from "../../../dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";

connect();

// export async function POST(){
//     try {
//         return NextResponse.json({namea:"ahyan"}, {status:200})
//     } catch (error) {
//         console.log(error)
//     }
// }