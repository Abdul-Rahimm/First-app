import Link from "next/link";

export default function experiment() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-400">Welcome to NextJS</h1>
      <p>On my way to learn NextJS fundamentals</p>
      <Link href="/experiment/mypage">
        <button className="px-4 py-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          MyPage
        </button>
      </Link>
    </div>
  );
}
