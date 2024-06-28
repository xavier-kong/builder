import { api } from "~/trpc/server";

export default async function Page({ params }: { params: { username: string }}) {
    const streakQuery = await api.post.getStreakData({ username: params.username });

    return (
        <div>{}</div>
    );
}
