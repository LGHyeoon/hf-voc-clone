<template>
  <header class="bg-white shadow-sm fixed inset-x-0 top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style="height:72px;">
      <div class="h-full flex items-center justify-between">
        <!-- 헤더 로고 -->
        <RouterLink to="/" class="flex items-center gap-3">
          <img src="/HF_logo.jpg" alt="한국주택금융공사 로고" class="h-10 w-auto" />
          <span class="sr-only">한국주택금융공사 고객의 소리</span>
        </RouterLink>

        <!-- 메뉴 리스트 -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="주요">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative py-2 px-1 hover:text-[#004B9B]"
            :class="{ 'text-[#004B9B]': isActive(link.to) }"
          >
            {{ link.label }}
            <span
              v-if="isActive(link.to)"
              class="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#004B9B] rounded"
              aria-hidden="true"
            />
          </RouterLink>
        </nav>

        <!-- 오른쪽 부분 (검색 버튼, 로그인 버튼) -->
        <div class="flex items-center gap-3">
          <!-- Optional: quick search icon -->
          <button class="hidden md:inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100" aria-label="검색">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"/>
            </svg>
          </button>

          <!-- 로그인 여부에 따른 표시 -->
          <div v-if="!user" class="hidden md:block">
            <RouterLink to="/login" class="px-4 py-2 border border-[#004B9B] text-[#004B9B] rounded-md text-sm">로그인</RouterLink>
          </div>

          <div v-else class="hidden md:flex items-center gap-2 relative">
            <button @click="toggleUserMenu" ref="userBtn" class="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100" :aria-expanded="userMenuOpen.toString()" aria-haspopup="true">
              <span class="text-sm font-medium">{{ user.name }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- 로그인 되었을 경우에는 드롭다운 표시 -->
            <transition name="fade">
              <div v-if="userMenuOpen" class="absolute right-0 mt-10 w-48 bg-white border rounded-md shadow-lg py-1" role="menu" @keydown.tab="closeUserMenu">
                <RouterLink to="/my-vocs" class="block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">나의 신청내역</RouterLink>
                <RouterLink to="/profile" class="block px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">내 정보</RouterLink>
                <button @click="logout" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-100" role="menuitem">로그아웃</button>
              </div>
            </transition>
          </div>

          <!-- 모바일 햄버거 -->
          <button @click="mobileOpen = !mobileOpen" aria-label="모바일 메뉴" class="md:hidden p-2 rounded-md">
            <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 모바일 화면 -->
    <transition name="slide-fade">
      <div v-if="mobileOpen" class="md:hidden bg-white border-t shadow-sm">
        <div class="px-4 py-4 space-y-2">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="block px-3 py-2 rounded-md text-base font-medium" @click="mobileOpen = false">
            {{ link.label }}
          </RouterLink>
          <div class="pt-3 border-t mt-2">
            <RouterLink v-if="!user" to="/login" class="block px-3 py-2 rounded-md text-base font-medium">로그인</RouterLink>
            <div v-else class="space-y-1">
              <RouterLink to="/my-vocs" class="block px-3 py-2 rounded-md text-base font-medium" @click="mobileOpen = false">나의 신청내역</RouterLink>
              <button @click="logout" class="w-full text-left px-3 py-2 rounded-md text-base font-medium">로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'

// --- 샘플 상태: 실제로는 Pinia 또는 props로 대체 ---
const user = ref(null); // 예: { name: '홍길동' } or null
// 예시: logged in 상태로 테스트하려면 아래 주석 해제
// user.value = { name: '홍길동' }

const mobileOpen = ref(false);
const userMenuOpen = ref(false);

const router = useRouter();
const route = useRoute();

const navLinks = [
  { label: '홈', to: '/' },
  { label: '민원/의견 등록', to: '/register' },
  { label: '나의 신청내역', to: '/my-vocs' },
  { label: 'FAQ', to: '/faq' }
]

function isActive(path) {
  return route.path === path;
}

function toggleUserMenu() {
  userMenuOpen.value = !userMenuOpen.value;
}

// simple logout stub
function logout() {
  user.value = null;
  userMenuOpen.value = false;
  // 실제 구현: API 호출 + 상태관리 초기화 + 라우터 이동
  router.push('/');
}

// close menu on outside click or ESC
function onKeydown(e) {
  if (e.key === 'Escape') {
    mobileOpen.value = false;
    userMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* mobile slide */
.slide-fade-enter-active {
  transition: all .18s cubic-bezier(.2,.8,.2,1);
}
.slide-fade-enter-from {
  transform: translateY(-6px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-6px);
  opacity: 0;
}
</style>
