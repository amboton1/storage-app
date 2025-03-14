import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    return Response.json({ title: "Admin Dashboard" });
};

export default function DashboardPage() {
    const { title } = useLoaderData<typeof loader>();

    return <h1>{title}</h1>;
}
