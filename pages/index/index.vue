<template>
	<view >
		<!-- <uni-nav-bar background-color="#f1eeee" title="懒饭菜谱" status-bar="true" fixed="fixed"></uni-nav-bar> -->
		<!-- 轮播图 -->
		<view class="swiperBox">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" 
			:duration="500" :indicator-color="indicatorColor" :circular="circular">			
				<swiper-item v-for="(item,index) in swiperData" :key="index">
					<image :src="item.src"></image>
				</swiper-item>
				
			</swiper>
		</view>
		
		
		<view class="topMenu">
			<view class="topMenuTitle">
				人气菜谱
			</view>
			<MenuItem @menuItemClick="goMenuItemInfoNav" :menu_item="menu_item"></MenuItem>
			<!-- <MenuItem @menuItemClick="goMenuItemInfoNav" ></MenuItem> -->
		</view>
		
	</view>
</template>

<script>
	// import Search  from "../../components/search.vue"
	// import  swiper from "../../data/swiper.js"
	import MenuItem from "../../components/menu_item.vue"
	//import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	
	export default {
		data() {
			return {
				swiperData:[],
				indicatorDots: true,
				indicatorColor:"rgba(241, 238, 238)",			
			    autoplay: true,
			    interval: 2000,
			    duration: 400,
				current:true,
				circular:true,
				menu_item:[],
				itemid:0
				
			}
		},
		onLoad(options) {
			this.getSwipers("looper/data",this.swiperData)
			this.getMenuItem("menuclass/hot")
			// console.log("运行到onLoad")
			
			
		},
		
		methods: {
			//获取轮播数据
			getSwipers(url,datas){
				uni.request({
					url:this.serverUrl+url,
					success:(res) =>{
						var arr = [];
						arr = res.data.swiper;
						for(let i=0;i<arr.length;i++){
							datas.push(arr[i]);
							
						}
					}
				}) 
				
			},
			//跳转到菜单详情页
			goMenuItemInfoNav(data){
				//可以传参  需要 id和title
				//console.log(data.id,data.title)
				uni.navigateTo({
					url:"../menu_item_info/menu_item_info?id="+data.id+"&title="+data.title
				})
			},
			getMenuItem(url){
				uni.request({
					url:this.serverUrl+url,
					success: (res) => {
						this.menu_item = res.data.menuItemDataList;
						//console.log(this.menu_item)
					}
				})
			
		},
		
	},
	components:{
		// Search,
		MenuItem,
		//uniNavBar
		//IsLikeItem
	}
}
</script>

<style lang="scss">
	.swiperBox{
		width: 100%;
		height: 400rpx;
		 // border: 1px solid red;
		swiper{
			width: 750rpx;
			height: 400rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
	.isLike{
		width: 100%;
		height: 310rpx;
		 border: 1rpx solid red;
		 margin-top: 15rpx;
		.likeTitle{
			 padding: 10rpx;
			 font-family: "华文中宋";
			 background-color: #f1eeee;
			 
			 
		}
	}
	
	.topMenu{
		width: 100%;
		.topMenuTitle{
			padding: 10rpx;
			font-family: "华文中宋";
			background-color: #f1eeee;
		}
	}
</style>
