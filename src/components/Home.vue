<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Hero Section -->
    <section class="bg-blue-600 text-white py-16">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold mb-4">고객의 소리</h1>
        <p class="text-lg text-blue-100 mb-8">
          여러분의 의견은 더 나은 한국주택금융공사를 만드는 밑거름입니다.
        </p>

        <router-link
          to="/voc/register"
          class="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-blue-50 transition"
        >
          민원 신청하기 →
        </router-link>
      </div>
    </section>

    <!-- Quick Menu -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <h2 class="text-xl font-bold mb-6">빠른 서비스</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <router-link
          to="/voc/register"
          class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100"
        >
          <h3 class="text-lg font-semibold mb-2">민원 신청</h3>
          <p class="text-gray-500 text-sm">고객의 의견을 남겨주세요</p>
        </router-link>

        <router-link
          to="/voc/status"
          class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100"
        >
          <h3 class="text-lg font-semibold mb-2">민원 조회/수정</h3>
          <p class="text-gray-500 text-sm">신청한 민원 현황을 확인하세요</p>
        </router-link>

        <router-link
          to="/voc/faq"
          class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition border border-gray-100"
        >
          <h3 class="text-lg font-semibold mb-2">FAQ</h3>
          <p class="text-gray-500 text-sm">자주 묻는 질문 모음</p>
        </router-link>

      </div>
    </section>

    <!-- Notice Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">공지사항</h2>
        <router-link to="/notice" class="text-sm text-blue-600 hover:underline">더보기</router-link>
      </div>

      <ul class="bg-white rounded-xl shadow divide-y">
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">서비스 점검 안내 (11/20 ~ 11/21)</p>
          <span class="text-sm text-gray-400">2024-11-18</span>
        </li>
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">개인정보 처리방침 개정 안내</p>
          <span class="text-sm text-gray-400">2024-10-01</span>
        </li>
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">민원 접수 처리 지연 안내</p>
          <span class="text-sm text-gray-400">2024-09-10</span>
        </li>
      </ul>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-6xl mx-auto px-4 py-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">자주 묻는 질문</h2>
        <router-link to="/faq" class="text-sm text-blue-600 hover:underline">더보기</router-link>
      </div>

      <ul class="bg-white rounded-xl shadow divide-y">
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">민원 처리 기간은 얼마나 걸리나요?</p>
        </li>
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">휴대폰 본인인증 실패 시 어떻게 하나요?</p>
        </li>
        <li class="p-4 hover:bg-gray-50 cursor-pointer">
          <p class="font-medium">민원 처리 결과는 어디서 확인하나요?</p>
        </li>
      </ul>
    </section>

  </div>
</template>

<script setup>
// 현재는 별도 로직 없음, 필요 시 API 연결 예정
</script>

<style scoped>
/* Tailwind CSS가 이미 적용되어 있으므로 기본 스타일만으로 충분 */
</style>
