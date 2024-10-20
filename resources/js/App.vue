<script setup>
import Header from './Components/Header.vue'
import {ref} from "vue";

const drawer = ref(true)
const menuList = [
	{icon: 'notifications', label: 'Powiadomienia'},
	{separator: true},
	{icon: 'drafts', label: 'Wiadomości'},
	{icon: 'logout', label: 'Wyloguj się'}
]
</script>

<template>
	<q-layout container class="min-h-screen">
		<Header/>

		<q-drawer
			v-model="drawer"
			:width="200"
			:breakpoint="500"
			bordered
			:class="[($q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'), 'pt-4']"
		>
			<q-scroll-area class="fit">
				<q-list>
					<template v-for="(menuItem, index) in menuList" :key="index">
						<q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
							<q-item-section avatar>
								<q-icon :name="menuItem.icon"/>
							</q-item-section>
							<q-item-section>
								{{ menuItem.label }}
							</q-item-section>
						</q-item>
						<q-separator :key="'sep' + index" v-if="menuItem.separator"/>
					</template>

				</q-list>
			</q-scroll-area>
		</q-drawer>

		<q-page-container>
			<q-page padding>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam, consequuntur culpa enim
				eum eveniet expedita facere inventore ipsum iste nihil, nulla odit perferendis provident quis quisquam
				ratione rerum, sint voluptas voluptatem! Corporis cum delectus dolore eaque in incidunt ipsam itaque
				laboriosam magni natus officia quidem quos ratione rerum, vel!
			</q-page>
		</q-page-container>
	</q-layout>
</template>
