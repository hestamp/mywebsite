import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentiasProvider from 'next-auth/providers/credentials'
import connectMongo from '@/utils/db'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentiasProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connectMongo()

        try {
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            //check pass
            const isPassCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            )

            if (isPassCorrect) {
              return user
            } else {
              throw new Error('Wrong login or password')
            }
          } else {
            throw new Error('User not found')
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
    // ...add more providers here
  ],
  pages: {
    error: '/dashboard/login',
  },
})
export { handler as GET, handler as POST }
