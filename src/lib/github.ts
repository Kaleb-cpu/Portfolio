export type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

export type GithubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
};

const GH_API = "https://api.github.com";

async function gh<T>(path: string): Promise<T> {
  const res = await fetch(`${GH_API}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 60 * 60 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }
  return (await res.json()) as T;
}

export async function getGithubUser(username: string) {
  return gh<GithubUser>(`/users/${encodeURIComponent(username)}`);
}

export async function getGithubRepos(username: string) {
  const repos = await gh<GithubRepo[]>(
    `/users/${encodeURIComponent(username)}/repos?per_page=100&sort=pushed`,
  );

  return repos.filter((r) => !r.archived && !r.fork);
}

export function pickFeaturedRepos(repos: GithubRepo[], count = 6) {
  return [...repos]
    .sort((a, b) => {
      const starDelta = b.stargazers_count - a.stargazers_count;
      if (starDelta !== 0) return starDelta;
      return +new Date(b.pushed_at) - +new Date(a.pushed_at);
    })
    .slice(0, count);
}

