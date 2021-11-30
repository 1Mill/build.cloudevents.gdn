<script>
import VueJsonEditor from 'vue-json-editor'
import { Cloudevent } from '@1mill/cloudevents'

export default {
	head: () => ({
		link: [
			{ hid: 'canonical', rel: 'canonical', href: 'https://build.cloudevents.gdn' },
		],
	}),
	components: {
		VueJsonEditor,
	},
	data: () => ({
		data: null,
		source: 'build.cloudevents.gdn',
		type: 'cmd.placeholder.v0',
	}),
	computed: {
		cloudevent() {
			if (!this.source) return "Source is required"
			if (!this.type) return "Type is required"

			const attributes = {
				source: this.source,
				type: this.type,
			}
			if (this.data) attributes.data = JSON.stringify(this.data)

			const cloudevent = new Cloudevent(attributes)
			return cloudevent
		},
	},
}
</script>
<template>
	<main>
		<article>
			<header>
				<h1>Cloudevent Builder</h1>
				<p>Easily build cloudevents to inject into AWS Lambda or your local develompent environment</p>
			</header>

			<div class="mt-3"/>
			<v-text-field v-model="source" label="Source"/>
			<v-text-field v-model="type" label="Type"/>

			<div class="mt-3"/>
			<vue-json-editor
			expanded-on-start
			mode="code"
			v-model="data"
			/>

			<div class="mt-3"/>
			<h2>AWS Lambda Test Console</h2>
			<pre>{{ cloudevent }}</pre>

			<div class="mt-3"/>
			<h2>Local Development Console</h2>
			<div>'{{ JSON.stringify(cloudevent) }}'</div>
		</article>
	</main>
</template>
<style>
.jsoneditor-outer {
	min-height: 10rem;
}
</style>
