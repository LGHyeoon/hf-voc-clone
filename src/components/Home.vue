<template>
	<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
		<!-- 수입 -->
		<div class="bg-white rounded-xl shadow-sm p-4">
			<p class="text-sm text-gray-500">수입</p>
			<p class="text-2xl font-bold text-blue-600 mt-1">
				2,500,000원
			</p>
		</div>

		<!-- 지출 -->
		<div class="bg-white rounded-xl shadow-sm p-4">
			<p class="text-sm text-gray-500">지출</p>
			<p class="text-2xl font-bold text-red-500 mt-1">
				1,420,000원
			</p>
		</div>

		<!-- 잔액 -->
		<div class="bg-white rounded-xl shadow-sm p-4">
			<p class="text-sm text-gray-500">잔액</p>
			<p class="text-2xl font-bold text-gray-800 mt-1">
				1,080,000원
			</p>
		</div>
	</div>

	<div class="bg-white rounded-xl shadow-sm p-4">
		<h2 class="font-semibold mb-4">카테고리별 지출</h2>

		<ul class="space-y-3">
			<li class="flex items-center justify-between">
				<span class="text-sm">식비</span>
				<span class="text-sm font-medium">420,000원</span>
			</li>
			<li class="flex items-center justify-between">
				<span class="text-sm">교통</span>
				<span class="text-sm font-medium">120,000원</span>
			</li>
			<li class="flex items-center justify-between">
				<span class="text-sm">쇼핑</span>
				<span class="text-sm font-medium">300,000원</span>
			</li>
		</ul>
	</div>	

	<div class="bg-white rounded-xl shadow-sm p-4">
		<h2 class="font-semibold mb-4">최근 지출</h2>

		<table class="w-full text-sm">
			<tbody class="divide-y">
			<tr class="h-10">
				<td class="text-gray-500">09/12</td>
				<td>식비</td>
				<td class="text-gray-600">점심</td>
				<td class="text-right text-red-500 font-medium">
					-12,000원
				</td>
			</tr>
			<tr class="h-10">
				<td class="text-gray-500">09/12</td>
				<td>교통</td>
				<td class="text-gray-600">버스</td>
				<td class="text-right text-red-500 font-medium">
					-1,500원
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>