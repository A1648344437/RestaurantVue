import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}

const getters={//getters计算过滤操作
    count:function(state){
        return state.count+=10;
    }
}

const actions={//actions异步修改状态
    addAction(context){//context上下文对象
        context.commit('add',10);
        console.log("context:"+context);
        setTimeout(() => {
            context.commint(reduce)
        }, 3000);//定时3秒执行，查看异步测试结果
        console.log("我比reduce提前执行");
    },
    reduceAction({commint}){
        commint('reduce');
        console.log("commint:"+commint);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})