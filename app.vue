<template>
	<NuxtLayout />
</template>

<script setup></script>

<style lang="scss">
// :root {
// 	--animate-duration: 1000ms;
// }

* {
	box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
	width: 100%;
	height: 100%;
}

// animatecss的默认动画时长，:root中设置无效，原因不明
*[class^='animate__'] {
	animation-duration: 1s;
}
</style>
