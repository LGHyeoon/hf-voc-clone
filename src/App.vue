<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <Header></Header>
    <main class="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <router-view />   <!-- 여기 확인 -->
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/common/Header.vue";
</script>
