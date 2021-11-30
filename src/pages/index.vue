<script>
import { Cloudevent } from '@1mill/cloudevents'

export default {
	head: () => ({
		link: [
			{ hid: 'canonical', rel: 'canonical', href: 'https://build.cloudevents.gdn' },
		],
	}),
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

			<h2>AWS Lambda Test Console</h2>
			<pre>{{ cloudevent }}</pre>

			<div class="mt-3"/>
			<h2>Local Development Console</h2>
			<div>'{{ JSON.stringify(cloudevent) }}'</div>
		</article>
	</main>
</template>
