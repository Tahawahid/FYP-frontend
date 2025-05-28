import { Button } from "../common/Button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button 
        variant="primary"
        onClick={() => window.location.href = '/onboarding'}
        className="flex items-center gap-2"
      >
        <span>Get Started</span>
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
      <Button 
        variant="primary"
        onClick={() => window.location.href = '/chat/career'}
        className="flex items-center gap-2"
      >
        <span>Chat with Mr. James</span>
        <svg 
          className="w-5 h-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </Button>
      <Button variant="secondary">Explore Features</Button>
    </div>
  );
}
