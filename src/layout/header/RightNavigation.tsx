export function RightNavigation() {
  return (
    <nav className="flex">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center justify-center w-12 h-12">
          i
        </div>
      ))}
    </nav>
  );
}
