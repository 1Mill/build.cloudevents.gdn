<script>
import VueJsonEditor from "vue-json-editor"
import { Cloudevent } from "@1mill/cloudevents"

export default {
	head: () => ({
		link: [
			{
				hid: "canonical",
				rel: "canonical",
				href: "https://build.cloudevents.gdn",
			},
		],
	}),
	components: {
		VueJsonEditor,
	},
	data: () => ({
		data: null,
		originactor: "user:admin#id=1234",
		source: "build.cloudevents.gdn",
		type: "cmd.placeholder.v0",
		wschannelid: "my-private-channel-name",
	}),
	computed: {
		cloudevent() {
			if (!this.source) return "Source is required"
			if (!this.type) return "Type is required"

			const attributes = {
				originactor: this.originactor || undefined,
				source: this.source,
				type: this.type,
				wschannelid: this.wschannelid || undefined,
			}
			if (this.data)
				attributes.data = JSON.stringify(this.data)

			const cloudevent = new Cloudevent(attributes)
			return cloudevent
		},
	},
}
</script>
<template>
	<main>
		<article class="d-flex flex-column" style="gap: 0.75rem">
			<header>
				<h1>Cloudevent Builder</h1>
				<p>
					Easily build cloudevents to inject into
					AWS Lambda or your local develompent
					environment
				</p>
			</header>

			<div>
				<v-text-field v-model="source" label="Source" />
				<v-text-field v-model="type" label="Type" />
				<v-text-field
					v-model="wschannelid"
					label="Websockets Channel Id"
				/>
				<v-text-field v-model="originactor" label="Origin Actor" />
			</div>

			<vue-json-editor
				expanded-on-start
				mode="code"
				v-model="data"
			/>

			<section>
				<header>
					<h2>AWS Lambda Test Console</h2>
				</header>
				<pre>{{ cloudevent }}</pre>
			</section>

			<section>
				<header>
					<h2>Local Development Console</h2>
				</header>
				<div>'{{ JSON.stringify(cloudevent) }}'</div>
			</section>
		</article>
	</main>
</template>
<style>
.jsoneditor-outer {
	min-height: 10rem;
}
</style>
