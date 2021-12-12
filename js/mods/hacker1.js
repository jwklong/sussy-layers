Vue.component("hacker", {
    props: ["hacker"],
    computed: {
        isResourceUpgrade: function()
        {
            return this.hacker.upgrade instanceof ResourceUpgrade;
        }
    },
    template: `<div class="hacker">
<div>
    <h4>{{hacker.name}}</h4>
    <p>{{hacker.description}}</p>
    <label>Desired Interval: <input type="number" v-model.number.lazy="hacker.desiredInterval" step="0.1"/> Seconds</label>
    <label><input type="checkbox" v-model="hacker.active"/> Active</label>
</div>
<sabotage-upgrade :upgrade="hacker.upgrade" v-if="!isResourceUpgrade"></sabotage-upgrade>
</div>`
});