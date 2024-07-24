import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      {/* Navigation */}
      <nav className="bg-secondary p-2">
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-secondary-foreground hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-secondary-foreground hover:underline">About</Link></li>
          <li><Link to="/contact" className="text-secondary-foreground hover:underline">Contact</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application. Start building your features here.</p>
        <Button>Get Started</Button>
      </main>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground p-4 text-center">
        <p>© 2023 My App</p>
      </footer>
    </div>
  );
};

export default Index;