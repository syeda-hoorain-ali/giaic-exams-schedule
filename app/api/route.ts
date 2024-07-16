import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const uri = process.env.MONGODB_URI as string;
        const client = new MongoClient(uri);

        await client.connect();
        const bodybase = client.db('giaic_exams');
        const collection = bodybase.collection('batch1_quatre1');

        const body = await req.json();
        const document = await collection.findOne(
            { 'Roll Number': body.rollNo },
            { projection: { _id: 0 } }
        );

        return NextResponse.json(document);

        // return NextResponse.json({ 
        //     'Roll Number': body.rollNo,
        //     'Date': new Date(),
        //     'Day': 'Wednesday',
        //     'Time': '10:00'
        // })


    } catch (error) {
        return NextResponse.json({error: 'Failed to fetch exams'})
    }
}