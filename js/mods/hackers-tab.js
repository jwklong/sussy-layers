Vue.component("hackers-tab", {
    data: function()
    {
        return {
            hackers: game.hackers
        }
    },
    methods: {
        alephUnlocked: () => game.alephLayer.isUnlocked()
    },
    //    <hacker :hacker="hackers.autoKiller"></hacker>
    template: `<div class="hacker-tab">
<div class="hackers">
    <h1>HACKERS DISABLED</h1>
    <h3>this is a unfinished feature, check back in a later update. the finished version will have automators and upgrades so yeah its cool</h3>
</div>
</div>`
})