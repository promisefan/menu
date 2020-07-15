<template>
	<view>
		<MenuItem @menuItemClick="goMenuItemInfoNav" :menu_item="menu_item"></MenuItem>
	</view>
</template>

<script>
	import MenuItem from "../../components/menu_item.vue"
	export default {
		data() {
			return {
				menu_item:[],
			}
		},
		methods: {
			goMenuItemInfoNav(data){
				console.log(data);
				uni.navigateTo({
					url:'../menu_item_info/menu_item_info?id='+data.id+'&title='+data.title
				})
			},
			getMenuItem(url){
				uni.request({
					url:this.serverUrl+url,
					success: (res) => {
						this.menu_item = res.data.menuItemDataList;
					}
				})
		},
		
	},
	components:{
		MenuItem
	},
	onLoad(options) {
	
			this.getMenuItem("/menuclass/"+options.id);
		
		// console.log(options);
		// this.getMenuItem("/menuclass/"+options.id);
		//console.log("title->"+options.title+"||id->"+options.id)
	},
	
}
</script>

<style>

</style>