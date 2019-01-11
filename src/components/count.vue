<template>
    <div>
        <h2>{{msg}}</h2>
        <hr>
        <h3>{{$store.state.count}}--{{count}}</h3>
        <div>
            <button @click="$store.commit('add',10)">加</button>
            <button @click="reduce">减</button>
        </div>
        <br>
        <div>
            <button @click="addAction">加</button>
            <button @click="reduceAction">减</button>
        </div>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
    data(){
        return {
            msg:'Hello Vuex'
        }
    },
    computed:
        //第一种方法
        //{
        //  count(){
        //     return this.$store.state.count;
        //  }
        //}

        //第二种方法
        // mapState({
        //     count:state=>state.count
        // })

        //第三种方法        
    {
         ...mapState(["count"]),
        // count(){
        //     return this.$store.getters.count;
        // }
        ...mapGetters(["count"])
    }
    ,
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>