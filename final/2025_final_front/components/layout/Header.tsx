import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">로고</div>
          <div className="space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              메인
            </Link>
            <Link href="/register" className="text-gray-700 hover:text-blue-600 transition-colors">
              등록
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
