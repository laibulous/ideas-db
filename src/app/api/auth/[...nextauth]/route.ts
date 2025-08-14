import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Temporary debug - remove after testing
console.log('GOOGLE_ID exists:', !!process.env.GOOGLE_ID);
console.log('GOOGLE_SECRET exists:', !!process.env.GOOGLE_SECRET);
console.log('NEXTAUTH_SECRET exists:', !!process.env.NEXTAUTH_SECRET);
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL);
const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret:process.env.GOOGLE_SECRET!,
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    debug: true,

    callbacks:{
        async session({session, token}){
            session.user.id=token.sub||'';
            return session;
        }
    },
    pages: {
        error: '/auth/error', // Optional: custom error page
    }
});

export {handler as GET ,handler as POST};
