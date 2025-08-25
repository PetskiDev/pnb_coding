import { auth, signIn, signOut } from "~/server/auth";

export default async function Navbar() {
  const session = await auth();

  const handleSignIn = async () => {
    "use server";
    await signIn("google");
  };

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
      <div className="font-semibold">P&B Coding</div>
      <div className="flex items-center gap-2">
        {session?.user ? (
          <>
            <span className="text-sm text-gray-700">
              {session.user.name ?? session.user.email}
            </span>
            <form action={handleSignOut}>
              <button
                type="submit"
                className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
              >
                Sign out
              </button>
            </form>
          </>
        ) : (
          <form action={handleSignIn}>
            <button
              type="submit"
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              Sign in
            </button>
          </form>
        )}
      </div>
    </header>
  );
}


