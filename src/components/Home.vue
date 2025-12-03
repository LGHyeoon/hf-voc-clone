<template>
  <div class="min-h-screen bg-gray-50">

    <section class="py-28">
      <div class="flex items-center justify-center">
        <img src="/VOC_logo.png" alt="VOC 로고" />
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6">빠른 서비스</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <router-link to="/voc/question" class="p-8 block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
          <img src="/voc-question.png" alt="상담 문의" class="w-full h-50 object-cover" />
          <h3 class="text-lg font-semibold mb-2 mt-4">상담 문의</h3>
          <p class="text-gray-500 text-sm">문의 사항이 있으시면 신속하게 답변드리겠습니다.</p>
        </router-link>

        <router-link to="/voc/complain" class="p-8 block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
          <img src="/voc-complain.png" alt="민원 신청" class="w-full h-50 object-cover" />
          <h3 class="text-lg font-semibold mb-2 mt-4">민원 신청</h3>
          <p class="text-gray-500 text-sm">주택금융공사와 관련하여 고충, 진정, 이의신청 등 민원사항을 접수하실 수 있습니다.</p>
        </router-link>

        <router-link to="/voc/praise" class="p-8 block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
          <img src="/voc-praise.png" alt="FAQ" class="w-full h-50 object-cover" />
          <h3 class="text-lg font-semibold mb-2 mt-4">칭찬/불친절</h3>
          <p class="text-gray-500 text-sm">고객님의 칭찬과 격려가 주택금융공사에 큰 힘이 됩니다.</p>
        </router-link>
      </div>
    </section>

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
