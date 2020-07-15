<template>
	<view>
		<!-- <MenuItemInfo></MenuItemInfo> -->
		<!-- <uni-nav-bar @clickLeft="" leftIcon="back" leftText="返回" background-color="#f1eeee" title="懒饭菜谱" status-bar="true" fixed="fixed"></uni-nav-bar> -->
		<view class="info" 
		v-for="(item1,index) in itemInfo"  :key="index">
			<image :src="item1.src" mode="" class="img" >
			</image>
			<view class="title">
				<!-- <text>---香辣卤藕---</text> -->
				---{{item1.title}}---
			</view>
			<view class="materials">
				<view class="materials_steps_title">
					材料:
				</view>
				<view class="materials_list">
					<view class="materialsinfo1">
				<view class="materialsinfo" v-for="(item2,sindex) in item1.materialsinfo" :key="sindex">
					<p>{{item2}}</p>		
				</view>
				</view>
				<view class="materialsinfosize1">
					<view class="materialsinfosize" v-for="(item3,sindex) in item1.size" :key="sindex">
					<p>{{item3}}</p>
				</view>
				
				</view>
				
				</view>
			</view>
			
			<view class="stepBox" >				
			<view class="stepstitle" v-for="(item4,sindex) in item1.stepsimg" :key="sindex">
				<p>步骤{{item4.stepstitle}}:</p>
				<view class="stepImg">
					<image :src="item4.img" mode="" class="stepimg"></image>
				</view>
			<view class="stepinfo">{{item4.stepInfo}}</view>
			</view>
			
			</view>
			</view>
		
	</view>
</template>

<script>
	//import MenuItemInfo from "../../components/menu_item_info.vue"
	//import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				itemInfo:[],
				id:0
			}
		},
		
		onLoad(options) {
//			console.log(options.id+options.title)
			 this.getMenuItemInfo("menudataByTitle",options.id,options.title)
		
		},
		methods:{
		   getMenuItemInfo(url,id,title){
			   // this.id = id;
			//console.log(title);
			uni.request({
				url:this.serverUrl+url+"/"+id+"/"+title,
				success: (res) => {
					
					this.itemInfo = res.data.menuItemDataList;
//					console.log(this.itemInfo)
				}
			})
			},
			
		},
		 components:{
			 //uniNavBar
		// 	// MenuItemInfo
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

.materials_list{
		display: flex;
	    align-content: center;
		 flex-direction:row;
		 p{
		 	text-align: center;
			border-bottom: 1px solid #DDDDDD;
		 }
		
	}
	
	.materialsinfo1{
		width: 50%;
		/* flex: 0.5; */
		// border: 1px solid red;
		
	}
	.materialsinfosize1{
		width: 50%;
		/* flex: 0.5; */
		// border: 1px solid yellow;
	}
	.materials_steps_title{
		font-family:"黑体" ;
		height: 30rpx;
		width: 120rpx;
		line-height: 30rpx;
		font-size: 40rpx;
		margin-top: 45rpx;
		margin-bottom: 30rpx;
		}
		
		.stepBox{
			
			width: 100%;
			// border: 1px solid red;
			.stepstitle{
				margin-top: 30rpx;
				margin-bottom: 40rpx;
				// border: 1px solid red;
			}
			.stepImg{
				// border: 1px solid blue;
				width:100%;
				.stepimg{
					margin-left: 7%;
				}
			}
			.stepinfo{
				width: 80%;
				margin: auto;
				// border:  1px solid yellow;
			}
			
		}
		

</style>
