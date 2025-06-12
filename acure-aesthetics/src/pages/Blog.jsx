import React, { useState, useEffect } from 'react'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs')
      const data = await response.json()
      setBlogs(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest news and insights in aesthetic treatments
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogs.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                    <div className="text-gray-600 mb-4">
                      <p>{new Date(blog.date).toLocaleDateString()}</p>
                      <p>By {blog.author}</p>
                    </div>
                    <div className="prose prose-sm max-w-none mb-4">
                      <p>{blog.content}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Subscribe to Our Newsletter</h2>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
