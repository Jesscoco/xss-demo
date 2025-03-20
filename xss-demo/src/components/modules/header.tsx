export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <div className="w-36 h-12 relative">
              <img src="/images/ponoupo-logo.svg" alt="Ponoupo" className="w-full h-full object-contain" />
            </div>
          </a>
          <nav className="flex items-center space-x-6">
            <a href="/post" className="text-gray-700 hover:text-[#e86225]">
              Post
            </a>
            <a href="/chat" className="text-gray-700 hover:text-[#e86225]">
              Chat
            </a>
            <a href="/logout" className="text-gray-700 hover:text-[#e86225]">
              Log out
            </a>
            <a href="/profile" className="text-gray-700 hover:text-[#e86225]">
              Profile
            </a>
          </nav>
        </div>
      </header>
    )
  }
  
  