//within here we will setup providers such as google authentication
// "use client"
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    //existing and running session - user's data
    async session({session}){
        //updating the sessionID of user
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
    },

    async signIn({profile}){
        //connect to DB

        //wait for the connection to database
        await connectToDB();

        //once connected
        //check if a user already exists
        const userExists = await User.findOne({
            email: profile.email
        })


        //if not, create a new user
        if(!userExists){
            await User.create({
                email: profile.email,
                username: profile.name.replace(" ","").toLowerCase(),
                image: profile.picture
            })
        }



    }
})

export {handler as GET, handler as POST}

 