import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
    Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

type User = {
    id: number;
    name: string;
    gender: string;
}

async function getUsers(): Promise<User[]> {
    const res = await fetch('http://localhost:3000/api/users', {
        cache: 'no-cache'
    });

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    return res.json();
}

export default async function DashboardPage() {
    const users = await getUsers();
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value;

    if (!username) {
        redirect("/login");
    }

    console.log(users);

    return (
        <>
            <h1>welcome boss: {username}</h1>

            <Table className="w-100">
                <TableCaption>All Users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-25">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Gender</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((u) => (
                        <TableRow key={u.id}>
                            <TableCell>{u.id}</TableCell>
                            <TableCell>{u.name}</TableCell>
                            <TableCell>{u.gender}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}