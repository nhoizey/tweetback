let data = {
  username: "nhoizey", // No leading @ here
  homeLabel: "nicolas-hoizey.com",
  homeUrl: "https://nicolas-hoizey.com/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
