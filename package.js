Package.describe({
    summary: "Login service for Azure Active Directory",
    version: "1.0.0",
    name: "oratek:accounts-azure-active-directory",
    git: "https://github.com/oratekch/accounts-azure-active-directory"
});

Package.onUse(function(api) {
    api.use(['underscore@1.0.1', 'random@1.0.1']);
    api.use('accounts-base@1.1.3', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth@1.1.3', ['client', 'server']);
    api.use('oratek:azure-active-directory@1.0.0', ['client', 'server']);

    api.addFiles('azure_ad_login_buttons.css', 'client');

    api.addFiles("azure_ad.js");
});
