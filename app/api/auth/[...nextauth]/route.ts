import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/utils/prismaClient"

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({session}) {
      const user = await prisma.user.findFirst({where: {id: session.user.id}});
      session.user.credits = user.credits;
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
}
const handler = NextAuth(authOptions);
export {authOptions, handler as GET, handler as POST}