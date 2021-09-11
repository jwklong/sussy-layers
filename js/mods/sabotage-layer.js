Vue.component("sabotage-layer", {
    data: function()
    {
        return {
            sabotage: game.sabotageLayer
        }
    },
    computed: {
        canProduceSabotage: function()
        {
            return this.sabotage.getSabotageBoostFromLayer().gt(0);
        },
        isSoftCapped: function()
        {
            return this.sabotage.sabotagePoints.gt(1e300);
        }
    },
    methods: {
        formatNumber: (n, prec, prec1000, lim) => functions.formatNumber(n, prec, prec1000, lim),
        highestLayer: () => functions.maxLayerUnlocked()
    },
    template: `<div class="sabotage-layer">
<div class="resource">
    <p>You have {{formatNumber(sabotage.sabotagePoints, 2, 2, 1e9)}} <span class="aleph">sabotage points</span></p>
    <p>You get {{formatNumber(sabotage.getSabotageGain(), 2, 2, 1e9)}} <span class="aleph">sabotages</span> every second</p>
</div>
<div class="boosts">
    <div v-if="canProduceSabotage">
        <p>Your layer boosts the gain of sabotage points, translated to a x{{formatNumber(sabotage.getSabotageBoostFromLayer(), 2, 2)}} Boost on <span class="aleph">sabotage</span> gain</p>
    </div>
    <div v-else>
        <p>You need to go <resource-name :layerid="new Decimal("1.8e308")"></resource-name> at least once to get <span class="aleph">sabotages</span></p>
    </div>
</div>
<div class="tabs">
    <button @click="sabotage.maxAll()">Max All (M)</button>
</div>
<div class="upgrades">
    <sabotage-upgrade :upgrade="sabotage.upgrades.sabotageGain"></sabotage-upgrade>
    <sabotage-upgrade :upgrade="sabotage.upgrades.sabotageGainBonus"></sabotage-upgrade>
</div>
<h3>Sabotages</h3>
<div class="upgrades">
    <sabotage-upgrade :upgrade="sabotage.upgrades.metaPowered"></sabotage-upgrade>
    <sabotage-upgrade :upgrade="sabotage.upgrades.sabotageBoost"></sabotage-upgrade>
    <sabotage-upgrade :upgrade="sabotage.upgrades.costDivider"></sabotage-upgrade>
    <sabotage-upgrade :upgrade="sabotage.upgrades.metaTet"></sabotage-upgrade>
</div>
<h3>ultimate upgrade!?!?!?!?</h3>
<div class="upgrades">
    <sabotage-upgrade :upgrade="sabotage.upgrades.winPercentage"></sabotage-upgrade>
</div>
</div>`
});