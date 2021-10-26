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
    template: `<div class="hacker-tab">
<div class="hackers">
    <hacker :hacker="hackers.autoKiller"></hacker>
</div>
</div>`
})