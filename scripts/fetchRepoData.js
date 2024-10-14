async function fetchRepoData(repoOwner, repoName) {
  // Fetch repository information
  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("description").innerText = `${
        data.description || "..."
      }`;
      document.getElementById("stars").innerText =
        data.stargazers_count || "...";
      document.getElementById("forks").innerText = data.forks_count || "...";
    })
    .catch((error) => {
      console.error("Error fetching repository data:", error);
    });

  // Fetch user profile data
  fetch(`https://api.github.com/users/${repoOwner}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Profile not found");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("profile-pic").src = data.avatar_url;
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
      document.getElementById("profile-pic").src =
        "assets/icons/warning-icon.png";
    });

  // Fetch total commits
  async function fetchTotalCommits() {
    let totalCommits = 0;
    let page = 1;
    const perPage = 100;

    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=${perPage}&page=${page}`
      );

      if (!response.ok) {
        console.error("Error fetching commits data:", response.statusText);
        document.getElementById("commits").innerText = "...";
        return;
      }

      const data = await response.json();
      totalCommits += data.length;

      if (data.length < perPage) {
        break;
      }

      page++;
    }

    document.getElementById("commits").innerText = totalCommits;
  }

  fetchTotalCommits();

  // Fetch languages used in the repository
  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Repo cannot be reached");
      }
      return response.json();
    })
    .then((data) => {
      // Convert the object to an array of entries and sort it by usage
      const sortedLanguages = Object.entries(data)
        .sort((a, b) => b[1] - a[1]) // Sort by usage
        .slice(0, 3); // Get the top 3

      // Map to a string format
      const languages = sortedLanguages.map((lang) => lang[0]).join(", ");
      document.getElementById("languages").innerText =
        languages || "No languages found";
    })
    .catch((error) => {
      console.error("Error fetching languages data:", error);
      document.getElementById("languages").innerText = "...";
    });
}
