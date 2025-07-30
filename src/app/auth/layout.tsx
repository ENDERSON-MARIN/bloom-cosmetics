export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-500 min-h-screen">
      {children}
    </div>
  );
}
