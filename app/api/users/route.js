import { NextResponse } from 'next/server';
import { users } from '@/app/util/db';
import fs from 'fs';
export function GET() {
    let data = users;
    return NextResponse.json(data);
};

export async function POST(req, res) { 
    let { id, name, email, password, date, time, icon, post } =await req.json();
    console.log(id, name, email, password, date, time, icon, post);
    if (!id && id=='' || !name &&name=='' || !email && email=='' || !password && password=='' || !date && date=='' || !time && time ==''|| !icon && icon=='' || !post && post=='') { 
        return NextResponse.json(
            { result: "fils all failed",ok: false },
            { status: 400 }
        );
    }
    else {
        users.push({ id, name, email, password, date, time, icon, post });
        const updatedUserArray = users;
        const updatedData = JSON.stringify(updatedUserArray, null, 2);
        fs.writeFileSync(
            "./app/util/db.js",
            `export const users=${updatedData};`,
            "utf-8"
        )
        return NextResponse.json(
            { result: "success user created", ok:true },
            {status:200}
        );
        
    }
};