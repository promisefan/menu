//二次封装接口，便于以后一键改所有
const Base_Url="http://http://localhost:8080/"
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:Base_Url+options.url,
			method:options.method ||"GET",
			data:options.data||{},
			success:(res)=>{
				
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
			
		})
	})
}
//后期调用此方法
// myRequest({
// 	url:"/5ec662af90383b4a4427010b/menu_list/",
// 	method:"POST",
// 	data:{
		
// 	}
// })
