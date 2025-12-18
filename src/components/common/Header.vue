<template>
	<header class="bg-white border-b">
		<div class="max-w-5xl mx-auto px-4 py-4 flex items-center jsutify-between">
			<!-- 날짜 부분 -->
			<div class="flex items-center gap-4">
				<button class="px-2 px-1 text-gray-500 hover:text-gray-800">◀</button>
				<span class="text-lg font-semibold">{{ year }}.{{ month }}</span>
				<button class="px-2 px-1 text-gray-500 hover:text-gray-800">▶</button>
			</div>

			<div class="flex items-center gap-3">
				<!-- 지출 추가하는 버튼 -->
				<button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">+ 지출 추가</button>

				<!-- 로그인, 로그아웃 버튼 -->
				<button v-if="!auth.isLoggedIn" @click="doLogin" class="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">로그인</button>
				<button v-else @click="doLogout" class="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-600">로그아웃</button>
			</div>
		</div>
	</header>
</template>

<script setup>
import { useUserStore } from '@/stores/auth';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const currentDate = ref(new Date());

const year = currentDate.value.getFullYear();
const month = currentDate.value.getMonth() + 1;

const router = useRouter();
const auth = useUserStore();

const doLogin = () => {
	router.push("/login");
}

const doLogout = () => {
	auth.logout();
	router.push("/");
}
</script>