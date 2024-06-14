//within here we will setup providers such as google authentication
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@utils/database";


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({session}){

    },

    async signIn({profile}){
        //connect to DB

        //wait for the connection to database
        await connectToDB();

        //once connected

        //check if a user already exists

        //if not, create a new user




    }
})

export {handler as GET, handler as POST}

 