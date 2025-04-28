export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
        <p>You don't have permission to access the admin panel.</p>
      </div>
    </div>
  );
}
