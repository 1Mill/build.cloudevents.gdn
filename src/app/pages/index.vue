<script setup lang="ts">
	import JsonEditorVue from "json-editor-vue"
	import { Cloudevent } from "@1mill/cloudevents"

	const data = ref({ todo: "placeholder" })
	const source = ref("build.cloudevents.gdn")
	const type = ref("cmd.placeholder.v0")
	const wschannelid = ref("my-private-channel-name")

	const cloudevent = computed(() => {
		return new Cloudevent({
			data: data.value,
			source: source.value,
			type: type.value,
			wschannelid: wschannelid.value,
		})
	})
</script>

<template>
	<VMain>
		<article>
			<header>
				<h1>Cloudevent Builder</h1>
				<p>Easily build cloudevents to inject into AWS Lambda or your local develompent environment.</p>
			</header>
			<section>
				<header><h2>Fields</h2></header>
				<VTextField label="Source" v-model="source"/>
				<VTextField label="Type" v-model="type"/>
				<VTextField label="Websockets Channel ID" v-model="wschannelid"/>
			</section>
			<section>
				<header><h2>Data</h2></header>
				<JsonEditorVue
				:askToFormat="false"
				:mainMenu-bar="false"
				:navigation-bar="false"
				v-model="data"
				/>
			</section>
			<section>
				<header><h2>AWS Lambda Test Console</h2></header>
				<pre>{{ JSON.stringify(cloudevent, null, 4) }}</pre>
			</section>
			<section>
				<header><h2>Local Development Console</h2></header>
				<div>'{{ JSON.stringify(cloudevent) }}'</div>
			</section>
		</article>
	</VMain>
</template>
