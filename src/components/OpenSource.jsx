import { useEffect, useState } from 'react';
import "../styles/OpenSource.css";

const GITHUB_USERNAME = "Yash-Atkari";

export default function OpenSource() {
    const [prs, setPrs] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPullRequests = async () => {
            try {
                setLoading(true);
                setError(null);

                const searchResponse = await fetch(
                    `https://api.github.com/search/issues?q=is:pr+author:${GITHUB_USERNAME}+is:merged&sort=updated&order=desc&per_page=30`
                );

                if (!searchResponse.ok) {
                    throw new Error("Unable to fetch pull requests from GitHub.");
                }

                const searchData = await searchResponse.json();
                const items = searchData.items || [];

                setTotalCount(searchData.total_count || 0);

                if (items.length === 0) {
                    setPrs([]);
                    return;
                }

                const repoUrls = Array.from(
                    new Set(items.map((item) => item.repository_url).filter(Boolean))
                );

                const repoResponses = await Promise.all(
                    repoUrls.map(async (url) => {
                        try {
                            const res = await fetch(url);
                            if (!res.ok) return null;
                            return await res.json();
                        } catch {
                            return null;
                        }
                    })
                );

                const repoLanguageMap = {};
                repoResponses.forEach((repo) => {
                    if (repo && repo.full_name) {
                        repoLanguageMap[repo.full_name] = repo.language || "Unknown";
                    }
                });

                const normalizedPrs = items.map((item) => {
                    const repoFullName = item.repository_url
                        ? item.repository_url.replace("https://api.github.com/repos/", "")
                        : "unknown/unknown";

                    return {
                        id: item.id,
                        title: item.title,
                        url: item.html_url,
                        repoName: repoFullName,
                        language: repoLanguageMap[repoFullName] || "Unknown",
                        mergedAt: item.closed_at,
                    };
                });

                setPrs(normalizedPrs);
            } catch (err) {
                setError(err.message || "Something went wrong while loading open source data.");
            } finally {
                setLoading(false);
            }
        };

        fetchPullRequests();
    }, []);

    return (
        <section className="open-source-section container py-4">
            <div className="row mb-4">
                <div className="col-12 col-md-8">
                    <h2 className="fw-bold open-source-title">Open Source Contributions</h2>
                    <p className="text-secondary px-1 open-source-subtitle">
                        A live snapshot of my merged pull requests across the GitHub ecosystem.
                    </p>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
                    <div className="open-source-stat-card text-center">
                        <p className="mb-1 text-secondary small">Accepted PRs</p>
                        <p className="display-6 fw-bold mb-0">{totalCount}</p>
                    </div>
                </div>
            </div>

            {loading && (
                <div className="text-center text-secondary py-5">
                    Fetching your GitHub contributions...
                </div>
            )}

            {error && !loading && (
                <div className="alert alert-warning text-center">
                    {error} You can still explore my work on{" "}
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </div>
            )}

            {!loading && !error && prs.length === 0 && (
                <div className="text-center text-secondary py-5">
                    No merged pull requests found yet. Check back soon!
                </div>
            )}

            {!loading && !error && prs.length > 0 && (
                <div className="row g-3">
                    {prs.map((pr) => (
                        <div key={pr.id} className="col-12 col-md-6 col-lg-4 d-flex">
                            <a
                                href={pr.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="open-source-card d-block h-100 flex-grow-1"
                            >
                                <div className="open-source-card-body">
                                    <p className="open-source-language mb-2">{pr.language}</p>
                                    <h2 className="h5 fw-bold mb-2 open-source-card-title">
                                        {pr.title}
                                    </h2>
                                    <p className="text-secondary small mb-3">
                                        Contributed to <span className="fw-semibold">{pr.repoName}</span>
                                    </p>
                                    {pr.mergedAt && (
                                        <p className="text-secondary small mb-0">
                                            Merged on{" "}
                                            {new Date(pr.mergedAt).toLocaleDateString(undefined, {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </p>
                                    )}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

