import { Button } from "../common/Button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button variant="primary">Get Started</Button>
      <Button variant="secondary">Try a Demo</Button>
      <Button variant="outline">Explore Features</Button>
    </div>
  );
}
