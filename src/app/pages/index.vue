<script setup lang="ts">
	const source = ref("build.cloudevents.gdn")
	const type = ref("cmd.placeholder.v0")
	const wschannelid = ref("my-private-channel-name")
</script>

<template>
	<VMain>
		<article>
			<header>
				<h1>Cloudevent Builder</h1>
				<p>Easily build cloudevents to inject into AWS Lambda or your local develompent environment.</p>
			</header>
			<section>
				<VTextField label="Source" v-model="source"/>
				<VTextField label="Type" v-model="type"/>
				<VTextField label="WEbsockets Channel ID" v-model="wschannelid"/>
			</section>
		</article>
	</VMain>
</template>
