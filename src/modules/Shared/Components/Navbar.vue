<template>
<nav class="bg-gray-200 shadow shadow-gray-300 w-100 px-8 px-auto">
	<div class="md:h-16 h-28 mx-auto px-4 container flex items-center justify-between flex-nowrap md:flex-wrap">
		<div class="text-indigo-500 md:order-1">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
				stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
			</svg>
		</div>
		<div class="text-gray-500 order-2 w-full w-auto">
			<ul class="flex font-semibold justify-between">
				<li class="px-4 py-2 text-indigo-500"><a href="#">Dashboard</a></li>
				<li class="px-4 py-2 hover:text-indigo-400"><a href="#">About</a></li>
				<li class="px-4 py-2 hover:text-indigo-400"><a href="#">Contact</a></li>
				<li class="px-4 py-2 hover:text-indigo-400"><a href="#">Explore</a></li>
			</ul>
		</div>
		<div class="order-2 order-3">
			<!-- <button class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Login</span>
            </button> -->
		</div>
	</div>
</nav>
</template>

<script type="text/javascript">

export default {
    name: "Navbar",
    components: {

    }
}
</script>
