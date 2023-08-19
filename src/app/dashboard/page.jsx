'use client'
import React from 'react'
import styles from './dashboard.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const session = useSession()

  const router = useRouter()

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  )

  console.log(data)

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const image = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name,
        }),
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === 'authenticated') {
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formPost}>
          <h1 className={styles.header}>Add post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input
            type="text"
            placeholder="Description"
            className={styles.input}
          />

          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textarea}
            cols="30"
            rows="10"
          />
          <button className={styles.button} type="submit">
            Send post
          </button>
        </form>
        <div className={styles.posts}>
          {isLoading && <p>Is loading...</p>}
          {data &&
            data.map((post) => (
              <div key={post._id} className={styles.onePost}>
                <div className={styles.imgContainer}>
                  <Image
                    width={100}
                    height={100}
                    className={styles.image}
                    src={post.image}
                    alt="image"
                  />
                </div>
                <div className={styles.infoBLock}>
                  <div className={styles.authorNrest}>
                    <h4>{post.username}</h4>
                    <span
                      onClick={() => handleDelete(post._id)}
                      className={styles.delete}
                    >
                      X
                    </span>
                  </div>
                  <div className={styles.textInfo}>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <h4>{post.desc}</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
