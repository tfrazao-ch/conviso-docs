module.exports = {
  schemaSidebar: [
    { type: "doc", id: "api/graphql/documentation/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "api/graphql/documentation/queries/allocated-analyses",
        "api/graphql/documentation/queries/allocated-projects",
        "api/graphql/documentation/queries/assets",
        "api/graphql/documentation/queries/attachment",
        "api/graphql/documentation/queries/attachments",
        "api/graphql/documentation/queries/chat-messages",
        "api/graphql/documentation/queries/chat-search",
        "api/graphql/documentation/queries/chats",
        "api/graphql/documentation/queries/clickup-folders",
        "api/graphql/documentation/queries/clickup-lists",
        "api/graphql/documentation/queries/clickup-spaces",
        "api/graphql/documentation/queries/clickup-statuses",
        "api/graphql/documentation/queries/companies",
        "api/graphql/documentation/queries/company",
        "api/graphql/documentation/queries/contact",
        "api/graphql/documentation/queries/contract",
        "api/graphql/documentation/queries/contracts",
        "api/graphql/documentation/queries/credentials",
        "api/graphql/documentation/queries/custom-field-integration",
        "api/graphql/documentation/queries/deploys-by-company-id",
        "api/graphql/documentation/queries/deploys-by-project-id",
        "api/graphql/documentation/queries/findings",
        "api/graphql/documentation/queries/findings-by-commit",
        "api/graphql/documentation/queries/imported-scan-by-integration",
        "api/graphql/documentation/queries/integration-alert",
        "api/graphql/documentation/queries/integration-external-association",
        "api/graphql/documentation/queries/integration-schedule-cycles",
        "api/graphql/documentation/queries/load-checkmarx-integration",
        "api/graphql/documentation/queries/load-integration",
        "api/graphql/documentation/queries/mapped-fields",
        "api/graphql/documentation/queries/notifications",
        "api/graphql/documentation/queries/pending-deploys",
        "api/graphql/documentation/queries/playbooks",
        "api/graphql/documentation/queries/portal-user-profile",
        "api/graphql/documentation/queries/project",
        "api/graphql/documentation/queries/project-statuses",
        "api/graphql/documentation/queries/project-types",
        "api/graphql/documentation/queries/projects",
        "api/graphql/documentation/queries/projects-queue",
        "api/graphql/documentation/queries/saml-integration",
        "api/graphql/documentation/queries/search-external-projects",
        "api/graphql/documentation/queries/service-type",
        "api/graphql/documentation/queries/service-types",
        "api/graphql/documentation/queries/tags",
        "api/graphql/documentation/queries/teams-by-scope",
        "api/graphql/documentation/queries/vulnerabilities",
        "api/graphql/documentation/queries/vulnerabilities-templates-by-company-id",
        "api/graphql/documentation/queries/vulnerabilities-waiting-validation",
        "api/graphql/documentation/queries/vulnerability",
        "api/graphql/documentation/queries/vulnerability-statuses",
        "api/graphql/documentation/queries/web-vulnerabilities",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "api/graphql/documentation/mutations/configure-integration-schedule",
        "api/graphql/documentation/mutations/create-analysis",
        "api/graphql/documentation/mutations/create-asset",
        "api/graphql/documentation/mutations/create-attachment",
        "api/graphql/documentation/mutations/create-chat-message",
        "api/graphql/documentation/mutations/create-code-review-vulnerability",
        "api/graphql/documentation/mutations/create-contract",
        "api/graphql/documentation/mutations/create-credential",
        "api/graphql/documentation/mutations/create-deploy",
        "api/graphql/documentation/mutations/create-estimate",
        "api/graphql/documentation/mutations/create-finding-dast",
        "api/graphql/documentation/mutations/create-finding-sast",
        "api/graphql/documentation/mutations/create-integration-mapped-fields",
        "api/graphql/documentation/mutations/create-integration-scan-checkmarx",
        "api/graphql/documentation/mutations/create-notification",
        "api/graphql/documentation/mutations/create-other-vulnerability",
        "api/graphql/documentation/mutations/create-project",
        "api/graphql/documentation/mutations/create-saml-integration",
        "api/graphql/documentation/mutations/create-web-vulnerability",
        "api/graphql/documentation/mutations/delete-chat",
        "api/graphql/documentation/mutations/delete-chat-message",
        "api/graphql/documentation/mutations/delete-contact",
        "api/graphql/documentation/mutations/delete-contract",
        "api/graphql/documentation/mutations/delete-deploy",
        "api/graphql/documentation/mutations/delete-mapped-field",
        "api/graphql/documentation/mutations/delete-saml-integration",
        "api/graphql/documentation/mutations/delete-vulnerabilities-by-id",
        "api/graphql/documentation/mutations/integrate-checkmarx-project",
        "api/graphql/documentation/mutations/readed-chat-messages-update",
        "api/graphql/documentation/mutations/update-activity-status-to-finish",
        "api/graphql/documentation/mutations/update-activity-status-to-not-apply",
        "api/graphql/documentation/mutations/update-activity-status-to-restart",
        "api/graphql/documentation/mutations/update-activity-status-to-start",
        "api/graphql/documentation/mutations/update-contract",
        "api/graphql/documentation/mutations/update-deploy",
        "api/graphql/documentation/mutations/update-imported-scan-status",
        "api/graphql/documentation/mutations/update-integration-mapped-fields",
        "api/graphql/documentation/mutations/update-integration-scan-checkmarx",
        "api/graphql/documentation/mutations/update-occurrence",
        "api/graphql/documentation/mutations/update-project",
        "api/graphql/documentation/mutations/update-saml-integration",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "api/graphql/documentation/directives/deprecated",
        "api/graphql/documentation/directives/include",
        "api/graphql/documentation/directives/skip",
        "api/graphql/documentation/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "api/graphql/documentation/objects/activity",
        "api/graphql/documentation/objects/allocated-projects",
        "api/graphql/documentation/objects/analysis-history",
        "api/graphql/documentation/objects/analysis-status-type",
        "api/graphql/documentation/objects/analysis-status-type-collection",
        "api/graphql/documentation/objects/analysis-vulnerabilities-count",
        "api/graphql/documentation/objects/analyst-allocations",
        "api/graphql/documentation/objects/asset",
        "api/graphql/documentation/objects/asset-collection",
        "api/graphql/documentation/objects/attachment",
        "api/graphql/documentation/objects/attachment-collection",
        "api/graphql/documentation/objects/chat",
        "api/graphql/documentation/objects/chat-archive",
        "api/graphql/documentation/objects/chat-connection",
        "api/graphql/documentation/objects/chat-edge",
        "api/graphql/documentation/objects/chat-message",
        "api/graphql/documentation/objects/chat-message-connection",
        "api/graphql/documentation/objects/chat-message-edge",
        "api/graphql/documentation/objects/check",
        "api/graphql/documentation/objects/clickup-folder",
        "api/graphql/documentation/objects/clickup-list",
        "api/graphql/documentation/objects/clickup-space",
        "api/graphql/documentation/objects/clickup-status",
        "api/graphql/documentation/objects/collection-metadata",
        "api/graphql/documentation/objects/company",
        "api/graphql/documentation/objects/company-collection",
        "api/graphql/documentation/objects/configure-integration-schedule-payload",
        "api/graphql/documentation/objects/contact",
        "api/graphql/documentation/objects/contract",
        "api/graphql/documentation/objects/contract-collection",
        "api/graphql/documentation/objects/contract-consume",
        "api/graphql/documentation/objects/contract-consumed-services",
        "api/graphql/documentation/objects/contract-meta",
        "api/graphql/documentation/objects/contract-service",
        "api/graphql/documentation/objects/create-asset-payload",
        "api/graphql/documentation/objects/create-attachment-payload",
        "api/graphql/documentation/objects/create-chat-message-payload",
        "api/graphql/documentation/objects/create-code-review-vulnerability-payload",
        "api/graphql/documentation/objects/create-contract-payload",
        "api/graphql/documentation/objects/create-credential-payload",
        "api/graphql/documentation/objects/create-deploy-payload",
        "api/graphql/documentation/objects/create-estimate-payload",
        "api/graphql/documentation/objects/create-finding-dast-payload",
        "api/graphql/documentation/objects/create-finding-sast-payload",
        "api/graphql/documentation/objects/create-integration-mapped-fields-payload",
        "api/graphql/documentation/objects/create-integration-payload",
        "api/graphql/documentation/objects/create-notification-payload",
        "api/graphql/documentation/objects/create-other-vulnerability-payload",
        "api/graphql/documentation/objects/create-project-payload",
        "api/graphql/documentation/objects/create-saml-integration-payload",
        "api/graphql/documentation/objects/create-web-vulnerability-payload",
        "api/graphql/documentation/objects/credential",
        "api/graphql/documentation/objects/credential-collection",
        "api/graphql/documentation/objects/custom-field-integration",
        "api/graphql/documentation/objects/custom-field-integration-collection",
        "api/graphql/documentation/objects/delete-chat-message-payload",
        "api/graphql/documentation/objects/delete-chat-payload",
        "api/graphql/documentation/objects/delete-contact-payload",
        "api/graphql/documentation/objects/delete-contract-payload",
        "api/graphql/documentation/objects/delete-deploy-payload",
        "api/graphql/documentation/objects/delete-mapped-field-payload",
        "api/graphql/documentation/objects/delete-saml-integration-payload",
        "api/graphql/documentation/objects/delete-vulnerabilities-by-id-payload",
        "api/graphql/documentation/objects/deploy",
        "api/graphql/documentation/objects/deploy-collection",
        "api/graphql/documentation/objects/evidence",
        "api/graphql/documentation/objects/finding",
        "api/graphql/documentation/objects/finding-collection",
        "api/graphql/documentation/objects/history",
        "api/graphql/documentation/objects/imported-scan",
        "api/graphql/documentation/objects/imported-scan-collection",
        "api/graphql/documentation/objects/integrate-checkmarx-project-payload",
        "api/graphql/documentation/objects/integration",
        "api/graphql/documentation/objects/integration-external-project",
        "api/graphql/documentation/objects/integration-external-project-collection",
        "api/graphql/documentation/objects/integration-external-project-meta",
        "api/graphql/documentation/objects/integration-schedule",
        "api/graphql/documentation/objects/integration-schedule-cycle",
        "api/graphql/documentation/objects/integration-schedule-cycle-collection",
        "api/graphql/documentation/objects/mapped-fields",
        "api/graphql/documentation/objects/mapped-fields-collection",
        "api/graphql/documentation/objects/notification",
        "api/graphql/documentation/objects/notification-collection",
        "api/graphql/documentation/objects/occurrence-meta",
        "api/graphql/documentation/objects/page-info",
        "api/graphql/documentation/objects/pending-deploy",
        "api/graphql/documentation/objects/portal-user",
        "api/graphql/documentation/objects/project",
        "api/graphql/documentation/objects/project-collection",
        "api/graphql/documentation/objects/project-comment",
        "api/graphql/documentation/objects/project-meta",
        "api/graphql/documentation/objects/project-type",
        "api/graphql/documentation/objects/project-type-collection",
        "api/graphql/documentation/objects/project-vulnerabilities-status-count",
        "api/graphql/documentation/objects/projects-in-estimate",
        "api/graphql/documentation/objects/projects-queue",
        "api/graphql/documentation/objects/projects-queue-collection",
        "api/graphql/documentation/objects/readed-chat-message",
        "api/graphql/documentation/objects/readed-chat-messages-update-payload",
        "api/graphql/documentation/objects/requirement",
        "api/graphql/documentation/objects/requirement-collection",
        "api/graphql/documentation/objects/result-files",
        "api/graphql/documentation/objects/saml-integration",
        "api/graphql/documentation/objects/scheduled-projects",
        "api/graphql/documentation/objects/scope-integration",
        "api/graphql/documentation/objects/service-type",
        "api/graphql/documentation/objects/service-type-collection",
        "api/graphql/documentation/objects/tag",
        "api/graphql/documentation/objects/tag-collection",
        "api/graphql/documentation/objects/team",
        "api/graphql/documentation/objects/team-collection",
        "api/graphql/documentation/objects/update-activity-status-to-finish-payload",
        "api/graphql/documentation/objects/update-activity-status-to-not-apply-payload",
        "api/graphql/documentation/objects/update-activity-status-to-restart-payload",
        "api/graphql/documentation/objects/update-activity-status-to-start-payload",
        "api/graphql/documentation/objects/update-contract-payload",
        "api/graphql/documentation/objects/update-deploy-payload",
        "api/graphql/documentation/objects/update-imported-scan-status-payload",
        "api/graphql/documentation/objects/update-integration-mapped-fields-payload",
        "api/graphql/documentation/objects/update-integration-payload",
        "api/graphql/documentation/objects/update-occurrence-payload",
        "api/graphql/documentation/objects/update-project-payload",
        "api/graphql/documentation/objects/update-saml-integration-payload",
        "api/graphql/documentation/objects/vulnerability",
        "api/graphql/documentation/objects/vulnerability-collection",
        "api/graphql/documentation/objects/vulnerability-statuses-type",
        "api/graphql/documentation/objects/vulnerability-template",
        "api/graphql/documentation/objects/vulnerability-template-collection",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "api/graphql/documentation/enums/asset-arch",
        "api/graphql/documentation/enums/asset-audience",
        "api/graphql/documentation/enums/asset-development-model",
        "api/graphql/documentation/enums/asset-development-team",
        "api/graphql/documentation/enums/asset-life-cycle",
        "api/graphql/documentation/enums/asset-scan",
        "api/graphql/documentation/enums/asset-severity",
        "api/graphql/documentation/enums/asset-type-list",
        "api/graphql/documentation/enums/cycle",
        "api/graphql/documentation/enums/order-occurrences-params",
        "api/graphql/documentation/enums/order-params",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "api/graphql/documentation/inputs/company-search",
        "api/graphql/documentation/inputs/configure-integration-schedule-input",
        "api/graphql/documentation/inputs/contact-type-input",
        "api/graphql/documentation/inputs/contract-search",
        "api/graphql/documentation/inputs/create-asset-input",
        "api/graphql/documentation/inputs/create-attachment-input",
        "api/graphql/documentation/inputs/create-chat-message-input",
        "api/graphql/documentation/inputs/create-code-review-vulnerability-input",
        "api/graphql/documentation/inputs/create-contract-input",
        "api/graphql/documentation/inputs/create-credential-input",
        "api/graphql/documentation/inputs/create-deploy-input",
        "api/graphql/documentation/inputs/create-estimate-input",
        "api/graphql/documentation/inputs/create-finding-dast-input",
        "api/graphql/documentation/inputs/create-finding-sast-input",
        "api/graphql/documentation/inputs/create-integration-input",
        "api/graphql/documentation/inputs/create-integration-mapped-fields-input",
        "api/graphql/documentation/inputs/create-notification-input",
        "api/graphql/documentation/inputs/create-other-vulnerability-input",
        "api/graphql/documentation/inputs/create-project-input",
        "api/graphql/documentation/inputs/create-saml-integration-input",
        "api/graphql/documentation/inputs/create-web-vulnerability-input",
        "api/graphql/documentation/inputs/delete-chat-input",
        "api/graphql/documentation/inputs/delete-chat-message-input",
        "api/graphql/documentation/inputs/delete-contact-input",
        "api/graphql/documentation/inputs/delete-contract-input",
        "api/graphql/documentation/inputs/delete-deploy-input",
        "api/graphql/documentation/inputs/delete-mapped-field-input",
        "api/graphql/documentation/inputs/delete-saml-integration-input",
        "api/graphql/documentation/inputs/delete-vulnerabilities-by-id-input",
        "api/graphql/documentation/inputs/external-project-type-input",
        "api/graphql/documentation/inputs/finding-search",
        "api/graphql/documentation/inputs/integrate-checkmarx-project-input",
        "api/graphql/documentation/inputs/integration-custom-fields-input",
        "api/graphql/documentation/inputs/integration-mapped-fields-input",
        "api/graphql/documentation/inputs/issue-type-dast-input",
        "api/graphql/documentation/inputs/issue-type-sast-input",
        "api/graphql/documentation/inputs/mapped-field-integration-type",
        "api/graphql/documentation/inputs/new-evidence",
        "api/graphql/documentation/inputs/project-external-key-search",
        "api/graphql/documentation/inputs/project-search",
        "api/graphql/documentation/inputs/project-type-search",
        "api/graphql/documentation/inputs/readed-chat-messages-update-input",
        "api/graphql/documentation/inputs/requirement-search",
        "api/graphql/documentation/inputs/service-type-input",
        "api/graphql/documentation/inputs/service-type-search",
        "api/graphql/documentation/inputs/team-search",
        "api/graphql/documentation/inputs/update-activity-status-to-finish-input",
        "api/graphql/documentation/inputs/update-activity-status-to-not-apply-input",
        "api/graphql/documentation/inputs/update-activity-status-to-restart-input",
        "api/graphql/documentation/inputs/update-activity-status-to-start-input",
        "api/graphql/documentation/inputs/update-contract-input",
        "api/graphql/documentation/inputs/update-deploy-input",
        "api/graphql/documentation/inputs/update-imported-scan-status-input",
        "api/graphql/documentation/inputs/update-integration-input",
        "api/graphql/documentation/inputs/update-integration-mapped-fields-input",
        "api/graphql/documentation/inputs/update-occurrence-input",
        "api/graphql/documentation/inputs/update-occurrence-status",
        "api/graphql/documentation/inputs/update-project-input",
        "api/graphql/documentation/inputs/update-saml-integration-input",
        "api/graphql/documentation/inputs/vulnerability-archive-type-input",
        "api/graphql/documentation/inputs/vulnerability-search",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "api/graphql/documentation/scalars/boolean",
        "api/graphql/documentation/scalars/id",
        "api/graphql/documentation/scalars/int",
        "api/graphql/documentation/scalars/iso-8601-date",
        "api/graphql/documentation/scalars/iso-8601-date-time",
        "api/graphql/documentation/scalars/string",
        "api/graphql/documentation/scalars/upload",
      ],
    },
  ],
};
