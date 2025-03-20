export default function Footer() {
    return (
      <footer className="bg-[#8b3a4a] text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-36 h-12 relative">
              <img src="/images/ponoupo-logo-white.svg" alt="Ponoupo" className="w-full h-full object-contain" />
            </div>
            <p className="text-sm ml-4">Copyright © | by Jessica SOSSOU</p>
          </div>
          <a href="/admin" className="text-[#e86225] hover:underline">
            Administration
          </a>
        </div>
      </footer>
    )
  }
  
  