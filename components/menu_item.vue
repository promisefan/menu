<template>
	<view>
		<view class="itemBox" @click="navigatorToInfo(item)"
		 v-for="(item,index) in menu_item" :key="index">
			 <image :src="item.src" mode=""></image>
			 <view class="rightBox">
			 	<view class="toptitle">
			 		{{item.title}}
			 	</view>
			 	<view class="topinfo">
			 	食材：
			 	{{item.materialsinfo}}
			 	
			 	</view>
			 	
			 </view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// id:0,
				// menu_item:[]
			};
			
		},
		onLoad() {
		
		},
		props:["menu_item"],
		
		methods:{
			navigatorToInfo(data){
				console.log(data);
				this.$emit("menuItemClick", data)
				// uni.navigateTo({
				// 	// url:"../menu_item_info/menu_item_info"
				// 	url:"../menu_item_info/menu_item_info?id="+data.id+"&title="+data.title
				//})
			},
			
			 
		}
	}
</script>

<style lang="scss">
.itemBox{
	width: 100%;
	height: 150rpx;
	margin-top: 20rpx;
	//border: 1px solid red;
	display: flex;
	image{
		// width: 50rpx;
		height: 100%;
		flex: 25%;
		border-radius: 15rpx;
	}
	.rightBox{
		flex: 75%;
		margin-top: 5rpx;
		// border: 1px solid blue;
		.topinfo{
			width: 500rpx;
			height: 60rpx;
			// border: 1px solid red;
			font-size: 30rpx;
			padding-left: 15rpx;
			margin-top: 15rpx;
			color: #787878;
			overflow:hidden; 
			text-overflow:ellipsis;
			white-space:nowrap;
			}
			.bottomtitle{
				margin-top: 5rpx;
				// display: flex;
				// justify-content: space-between;
				text:nth-child(2){
					margin-left: 40rpx;
				}
				// border: 1px solid blue;
			}
	}
}
// .itemBox1{
// 	width: 100%;
// 	height: 150rpx;
// 	margin-top: 5rpx;
// 	border: 1px solid blue;
// }
</style>
