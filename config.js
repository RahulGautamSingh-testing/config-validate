module.exports = {
  platform: "gitlab",
  endpoint: "https://gitlab.example.com/api/v4/",
  token: "gitlab-token",
  autodiscover: true,
  gitAuthor: "Renovate Bot <name.name@example.com>",
  labels: ["label1", "label2", "label3"],
  onboarding: true,
  logLevel: "debug",
  onboardingConfig: {
    extends: ["config:base", ":dependencyDashboardApproval"]
  },
  autodiscoverFilter: "one/specific/repo/for/testing",
  hostRules: [
    {
      hostType: "maven",
      matchHost: "https://artifactory.example.com",
      username: "artifactory-username",
      password: "artifactory-password"
    },
  ],
  packageRules: [
    {
      matchManagers: ["maven"],
      registryUrls: [
        "https://artifactory.example.com/first-repo",
        "https://artifactory.example.com/second-repo"
      ],
      automerge: false,
      matchUpdateTypes: ["minor", "patch", "pin", "digest"]
    }
  ]
};
