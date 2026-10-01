import Link from "next/link";
import { Button } from "@/registry/cmplt/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-black uppercase tracking-tight text-fg-primary">
        404 — Page Not Found
      </h2>
      <p className="mt-3 text-fg-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6">
        <Link href="/">
          <Button variant="primary" shape="pill">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
