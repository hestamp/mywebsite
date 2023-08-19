import { NextResponse } from 'next/server'
import connectMongo from '@/utils/db'
import Post from '@/models/Post'
export const GET = async (request, { params }) => {
  try {
    const { id } = params
    await connectMongo()

    const post = await Post.findById(id)

    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params
    await connectMongo()

    await Post.findByIdAndDelete(id)

    return new NextResponse('Post has beed deleted', { status: 200 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}
