"use client"

export default function Footer(){
    return(
        <footer className="bg-neutral-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} PathPal. All rights reserved.</p>
          <nav className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </nav>
        </div>
      </footer>
    )
}