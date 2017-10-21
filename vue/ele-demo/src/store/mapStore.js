/**
 * Created by jieyao on 2017/9/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        num:0
    },
    getters:{
        reNum:(state)=>{   //第一个参数必须是state
            return state.num+10
        }
    },
    mutations:{
        addSync:function (state,a) {
            state.num+=a;
        },
        addAsync:function (state,a) {
            alert(state.num+a.max)
        }
    },
    actions:{
        addAsync:function (context,param) {
            setTimeout(function () {
                context.commit('addAsync',{max:param.a})
            },1000)
        }
    }
})
export default store