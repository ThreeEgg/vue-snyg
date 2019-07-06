export default {
    path: "/gooddetail/:id",
    component:()=>import("@/views/Enjoy/GoodDetail"),
    children:[
        {path:"",redirect:"info_img"},
        {name:"info_img",path:"info_img",component:()=>import("@/views/Enjoy/InfoImg")},
        {name:"info_param",path:"info_param",component:()=>import("@/views/Enjoy/InfoParam")},
        {name:"info_after",path:"info_after",component:()=>import("@/views/Enjoy/InfoAfter")}
    ]
}