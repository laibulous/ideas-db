'use client';

import {signIn, useSession} from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login(){
    const {data: session}= useSession();
    const router= useRouter();

    useEffect(()=>{
        if(session)
            router.push('/dashboard');
    },[session, router]);

    if(session)
        return <p>Redirecting</p>
    
    return(
        <div>
            <h1>Welcome to Ideas Database!</h1>
            <button onClick={()=>signIn('google')} style={{"color":"blue"}}>Continue with Google</button>
        </div>
    );

}

