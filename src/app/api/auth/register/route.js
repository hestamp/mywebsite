import User from '@/models/User'
import connectMongo from '@/utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
  const { name, email, pass } = await request.json()

  await connectMongo()

  const hashPass = await bcrypt.hash(pass, 5)

  const newUser = new User({
    name,
    email,
    password: hashPass,
  })

  try {
    await newUser.save()
    return new NextResponse('user has been created', { status: 201 })
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    })
  }
}
