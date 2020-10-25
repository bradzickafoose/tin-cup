import Layout from 'components/layout/layout'
import PostPreview from 'components/event/post-preview'

export default function EventsPage() {
  return (
    <Layout title="News + Events">
      <h1>News + Events</h1>
      {posts.map(post => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          slug={post.slug}
        />
      ))}
    </Layout>
  )
}
