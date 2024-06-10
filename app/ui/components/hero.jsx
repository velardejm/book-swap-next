import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(hero-background.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Buy, Sell, and Swap Your Books
          </h1>
          <p className="mb-5">
            Join BookSwap Today and Dive into a World Where Every Book Finds its
            Next Adventure. Be part of a passionate community of like-minded
            book lovers. Buy, sell, swap — and let stories unfold among fellow
            enthusiasts!
          </p>
          <Link href="/books" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
