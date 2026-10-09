import { useEffect, useState } from "react";

export function useGithubData(username) {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!username) return;
        let isMounted = true;

        async function fetchInsights() {
            try {
                setLoading(true);
                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${username}`),
                    fetch(
                        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=4`,
                    ),
                ]);

                if (profileRes.ok && isMounted) {
                    setProfile(await profileRes.json());
                }
                if (reposRes.ok && isMounted) {
                    const reposData = await reposRes.json();
                    setRepos(Array.isArray(reposData) ? reposData : []);
                }
            } catch (err) {
                console.error("Failed to load GitHub data:", err);
            } finally {
                if (isMounted) setLoading(false);
            }
        }

        fetchInsights();
        return () => {
            isMounted = false;
        };
    }, [username]);

    return { profile, repos, loading };
}
