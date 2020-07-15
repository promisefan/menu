<template>
	<view class="outBox">
		
		<view class="menuListBox">
			<scroll-view scroll-y="true" class="boxLeft" id="viewController">
				<view :class="active===index?'active':''" 
				v-for="(item,index) in menu_list" :key="index" 
				@click="leftHandle(index,item.id)":id=item.id >
					{{item.title}}
				</view>
				
			</scroll-view>
			<scroll-view scroll-y="true" class="boxRight">
				<view class="rightItem" >
					<view class="itemBox"  v-for="(menuitem1,index in menu_item.children" :key="index">
						<view class="rightText">
							
							------{{menuitem1.childrentitle}}------
							<!-- {{menuitem1.lastchild}} -->
						</view>
						<view class="rightChoose" >
							<view class="choose" v-for="(menuitem2,sindex) in menuitem1.lastchild" :key="sindex" 
							 @click="handleToInfo(menuitem2.id)">
							 
								{{menuitem2.lastchildtitle}}
								<!-- {{menuitem2[index].id}} -->
								<!-- {{menuitem2.id}} -->
							</view>
						</view>
					</view>
					
				</view>
			</scroll-view>
		</view>		
	</view>
</template>

<script>
	 //  import Search  from "../../components/search.vue" 
	export default {
		data() {
			return {
				menu_list:[],
				active:0,
				menu_item:[],
				dataList:[],
				secondData:[],
				menuchoose:[]
			}
		},
		onLoad() {
			this.getMenuList()
		},
		methods: {
			getMenuList(){
				uni.request({
				url:this.serverUrl+"menu",
				success:(res) =>{
					var arr = [];
					arr = res.data.choose;
					this.menu_list = arr;
					// console.log(this.menu_list);
					this.menu_item = this.menu_list[0];
					
				},
			})
			
			},

			leftHandle(index,id){
				this.active = index;
				this.menu_item = this.menu_list[index];
							
			},
			//点击之后跳转到对应大类的菜谱列表
			handleToInfo(id){
				// this.key = index
				// console.log(this.key)
				console.log(id)
				uni.navigateTo({
					url:"../menu_item/menu_item?id="+id
				})
			}

		}
		
		// components:{
		// 	Search
		// }
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.outBox{
		height: 100%;
	
	.menuListBox{
		width: 100%;
		 height: 100%;
		 display: flex;
		.boxLeft{
			font-size: 0.6em;
			width: 150rpx;
			height: 100%;
			// border: 1px solid red;
			height: 100%;
			
			background-color:#f1eeee ;
			view{
				height:90rpx;
				line-height: 90rpx;
				text-align: center;
				color: #333;
				border-top: 1px solid #eee;
				border-bottom: 1px solid #eee;
				border-right: 1px solid #eee;
			}
			.active{
				background-color: #ffffff;
				border-bottom: 2px solid #d81e06;
			}
		}
		.boxRight{
			
			width: 600rpx;
			height: 100%;
			// border: 1px solid red;
			.rightItem{
				height: 100%;
				.itemBox{
					margin-top: 10rpx;
				}
			}
			
			.rightText{
				margin-top: 20rpx;
				height: 40rpx;
				line-height: 40rpx;
				text-align: center;
				font-size: 13px;			
				// border: 1px solid blue;
			}
			.rightChoose{
				width: 490rpx;
				// height: 100%;
				display: flex;
				margin: 0 auto;			
				flex-wrap: wrap;				
				align-content: flex-start;
				// border: 1px solid red;
			}
			.choose{
				flex: 0 0 110rpx;
				width: 20rpx;
				height: 60rpx;
				line-height: 60rpx;
				text-align: center;
				border:1rpx solid #f1eeee;
				color:	#A0A0A0;
				font-size: 26rpx;
				border-radius: 30rpx;
				margin-top: 10rpx;
				margin-left: 10rpx;
				
				
			}
		}
	}
	}

</style>
