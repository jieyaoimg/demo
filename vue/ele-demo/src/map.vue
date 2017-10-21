<template>
    <div id="">
        <h2 @click="addSync(999)"> mapState、mapMutations、mapGetters 、mapActions使用方法</h2>
        <<h3>{{reA}}和{{num}}和{{reNum}}</h3>
        <button @click="reAddAsync({a:15})">加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'  //注意此处要调用vuex的mapMutations、mapState等
    export default {
        data:function () {
            return{
                a:111
            }
        },
        computed: {
            ...mapState([  //把要引入的state放到这里
                'num'
                // ...
            ]),
            ...mapGetters([  //把要引入的getter放到这里
                'reNum'
            ]),
            reA:function () {  //组件局部计算属性
                {return this.a+1.5}
            }
        },
        methods:{
            ...mapMutations([  //为了让mapMutations、mapActions等与组件局部方法一起使用，这里使用了对象展开运算符
                'addSync'
            ]),
            ...mapActions({   // mapMutations()、mapGetters() 、mapActions()的内容可以是数组形式也可以是对象形式，这里采用了对象形式对'addasync'进行重命名
                reAddAsync:'addAsync'
            }),
            ft:()=>{alert(111)} //组件局部方法
        }
    }
</script>
