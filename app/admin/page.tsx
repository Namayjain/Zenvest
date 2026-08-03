import { getSupabaseAdmin } from "@/lib/supabase";
import Container from "@/components/Container";
import Link from "next/link";
import AdminClientSide from "./AdminClientSide";
import { logout } from "./login/actions";

export const metadata = {
  title: "Admin Dashboard | Zenvest Wealth",
  robots: "noindex, nofollow"
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-xl font-bold">Supabase is not configured.</h1>
        <p className="mt-2 text-navy-600">Please check your environment variables.</p>
      </div>
    );
  }

  // Parse searchParams for pagination and filters
  const page = typeof searchParams.page === "string" ? parseInt(searchParams.page) : 1;
  const pageSize = 10;
  const search = typeof searchParams.search === "string" ? searchParams.search : "";
  const filterService = typeof searchParams.service === "string" ? searchParams.service : "";

  let query = supabase
    .from("contact_messages")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (search) {
    query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`);
  }
  
  if (filterService && filterService !== "All") {
    query = query.eq("service", filterService);
  }

  // Pagination
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  query = query.range(from, to);

  const { data: leads, count, error } = await query;

  return (
    <div className="pt-32 pb-24 bg-navy-50 min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-navy-900">Admin Dashboard</h1>
            <p className="text-navy-600 mt-1">Manage your website leads</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <Link href="/" className="text-navy-600 hover:text-gold-500 font-medium">
              &larr; Back to Website
            </Link>
            <form action={logout}>
              <button type="submit" className="text-red-500 hover:text-red-600 font-medium bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors">
                Logout
              </button>
            </form>
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg">Error fetching leads: {error.message}</div>
        ) : (
          <AdminClientSide 
            leads={leads || []} 
            totalCount={count || 0} 
            currentPage={page} 
            pageSize={pageSize}
            initialSearch={search}
            initialService={filterService}
          />
        )}
      </Container>
    </div>
  );
}
