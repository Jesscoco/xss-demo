import PostsList from "./components/modules/posts-list"
import Header from "./components/modules/header"
import Footer from "./components/modules/footer"
import NewPostForm from "./components/modules/new-post-form"
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-[#8b3a4a] mb-8">Posts</h1>
            <div className="flex justify-center mb-8">
              <img src="/images/posts-illustration.svg" alt="Posts illustration" className="max-w-md w-full" />
            </div>
            <PostsList />
            <NewPostForm />
          </div>
        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
