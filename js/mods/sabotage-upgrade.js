Vue.component("sabotage-upgrade", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="'sabotage points'"></resource-upgrade>`
});