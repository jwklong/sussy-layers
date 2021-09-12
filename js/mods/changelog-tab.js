Vue.component("changelog-tab", {
    template: `<div class="changelog-tab">
    <guide-item>
        <template v-slot:title>α - v1.0.1</template>
        <template v-slot:text>i just fixed some issues, tweaked some text and added a few more achivements.
        </template>
        <template v-slot:title>α - v1.0.0</template>
        <template v-slot:text>uhm, prestige layer tweaks, a changelog, sabotage in meta layer, meta layer upgrades to 5 levels, 5 new themes and some other boring stuff. its how modding works lol.
        </template>
    </guide-item>
</div>`
})