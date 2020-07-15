<template>
	<view>
		<view class="info" >
			<image src="../static/menulistImgs/luou.jpg" mode="" class="img"></image>
			<view class="title">
				<!-- <text>---香辣卤藕---</text> -->
				---香辣卤藕---
			</view>
			<view class="materials">
				<view class="materials_steps_title">
					材料:
				</view>
				<view class="materialsinfo">
					<text>辣椒</text>
					<text>2个</text>
				</view>
				
				<view class="materialsinfo">
					<text>辣椒</text>
					<text>2个</text>
				</view><view class="materialsinfo">
					<text>辣椒</text>
					<text>2个</text>
				</view><view class="materialsinfo">
					<text>辣椒</text>
					<text>2个</text>
				</view>
			</view>
			<view class="steps">
				<view class="materials_steps_title">
					步骤一
				</view>
				<view class="stepimgbox">
					<image src="../static/menulistImgs/qiokui.jpg" mode="" class="stepimg"></image>
				</view>
				<view class="stepinfo">
					获得积分不够坚持下各地军阀的解放军的部分的
				</view>
			</view>
			
			<view class="steps">
				<view class="materials_steps_title">
					步骤一
				</view>
				<view class="stepimgbox">
					<image src="../static/menulistImgs/qiokui.jpg" mode="" class="stepimg"></image>
				</view>
				<view class="stepinfo">
					获得积分不够坚持下各地军阀的解放军的部分的
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		created() {
			
		},
		onLoad(options) {
			this.getMenuItemInfo()
			console.log(options)
		},
		methods:{
		 //   async getMenuItemInfo(){
			// 	const res = await this.$myRequest({
			// 		url:"/5ec662af90383b4a4427010b/menu_list/menu_item_info"
			// 	})
			// 	console.log(res)
			// 	console.log(555)
			// }
			getMenuItemInfo(){
				uni.request({
					url:"http://localhost:7300/mock/5ec662af90383b4a4427010b/menu_list/menu_item_info",
					success: (res) => {
						console.log(res)
					}
					
				})
			}
		}
	}
</script>

<style lang="scss">
.info{
	width: 100%;
	height: 100%;
}
.img{
	width: 100%;
	height: 330rpx;
}
.title{
	height: 80rpx;
	line-height: 80rpx;
	// border: 1px solid green;
	font-size: 45rpx;
	text-align: center;	
	font-family: "黑体";
	
}
.materials{
	height: 300rpx;
	// border: 1px solid red;
	// display: flex;
	
		.materialsinfo{
			width: 80%;
			height: 40rpx;
			line-height: 40rpx;
			margin: auto;
			// border: 1px solid pink;
			border-bottom: 1px solid #c6c6c6 ;
			display: flex;
			text-align: center;
			text{
				flex:1
				
			}
			}
	}
	.materials_steps_title{
		font-family:"黑体" ;
		height: 30rpx;
		width: 120rpx;
		line-height: 30rpx;
		font-size: 40rpx;
		margin-top: 35rpx;
		margin-bottom: 30rpx;
		}
.steps{
	// height: 610rpx;
	// border: 1px solid blue;
	.stepimgbox{
		width: 80%;
		height: 480rpx;
		margin: auto;
		// border: 1px solid green;
		.stepimg{	
			width: 100%;
			height: 480rpx;			
		    border-radius: 15rpx;
	}
	}
	.stepinfo{
		width: 80%;
		margin: auto;
		padding-top: 30rpx;
		padding-bottom: 20rpx;
		border-bottom: 1px solid #c6c6c6 ;
	}
	
	
}	
</style>
