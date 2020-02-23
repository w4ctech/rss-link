<template>
    <div class="container">
        <div class="fixed-box">
            <a class="action-github" href="https://github.com/w4ctech/rss-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAMAAAAOARRQAAAA4VBMVEUbFRUaFxcwMDAaFRX///8iHh79/f0dGBhUUFDT0tK4t7cwKyuysbHNy8syLS34+PhoZWUrJiYfGhrw8PDu7e3Z2Nivrq6npaVxbm5jYGDe3d3DwsKamJh7eHhtampXU1NCPj76+vr39vbg39/b29vR0NDBv7+Cf39aVlZNSUklICDy8vLq6enk5OTi4eHa2dnHxsa1s7NfW1s0Ly/o6OjV1NS8u7utq6ukoqKem5uSj491cnJdWVlXVFRRTU1IREQ+OTk4NDQuKionIiL09PS2tLSVkpKPjY2Kh4eHhISpp6evBPJsAAAAA3RSTlPmhwVTsZLPAAADoklEQVRo3u3aaVMaMRzHcWx+e7EHN+U+CoigghTv+6hV+/5fUOsITeIsm38WatuZ/T5TGT4SkrAEUp+2UuwPl9r6lNpiH9BWKsU+IJqyfgmTMCyshEmYv8t0WuczZ1LMZIoT5/G80mFs48y4Ut7Du4pe5WGjzE75C0LLeJcbY7IOIiq1rE0w7SkU1S7XZlwPhNLz9ZhqAaS+Zddg8g2QOzXiMuM6NPJz8RjXgVb9eRzGrUGz/bk+M3agXT+ny+TriJFvaDINxOqzHlPl/+Cw4ZuIyBw0hgdY1tJhXL4qv77++HKIFe09B4wxm6/TOw3G41vw22gbQw5nMli2+/L2Z2sXy47pTBu/G7BF9ydmzxtedQLjFxp02sNyzZwFbBEfNVTJzFTYFPlv5Vkk/+IEv5tYRCYLXpmROgWvQmQcaYaSOgOvZpGYHQjVaUwaQlUSU4bQIY3pQ+iYwozlq4tbihJArHtPYCoQ244xaGgSGHnMcjTmoSeNGoGRrvouGLEshHYtJdOBUM9i1I4gNFIyLQg9M3JN6clRMucQuqEztxA6UzIz8ApMo8PV8zMVvdOUdBgfvJ6SmSh2GtLSKSqZInhpHeYEvK6SychDTO8RQnkVI+5ovg6zDSFLxeyDt6/DTKUpqmIG4Jl5MiIPQ03FyI/dpis3EPKVzAmEvtOZZwillUwDQg6dOYDQqZLJQuyOqrhd6fVDybgQ86jMZ/mVXcmwGsRGNKVjShfWTM2cQmxgUBTjQB4DAtOC1DZh7VhpaF9y5L5AKj1WPpYypMyAwLDPkNu/ilbsHuRmTMnw9Vw49peT9NGOQDwT77JJDPOXF/b3Z1hUerLzIaPVPi+FHElpvfEovL4drPKXn8yRJ83uUXraRVgXRMYq8R0tC55vSbeqI7SeQWTY9WK4X+QJcROxJHmXjMbw+zZtxoz+yn10gJA8RmdyRf5sBst7a7B3PYUou64Gw1rCqYDRPDJhlr7Pw28k14x1mHKwmLm5sC1nh3yYory6izpcvMb76pYuYzhvhyPXGkz/Icax3dul1Jfh6n0Gcnt3cQ4hA2dxNfQ0mueN251AwUzvYh6ppiH2NZqpP8Q9ILbOIpm2NMesNY67K8WIw4srYVU21zu8z/3gzOp147lrfxRhLze17Cpmov4oglC+4kQN2tGFwZQMrVG5i4IbssGaM5tt8kMvt30f8sS1X9fSf/pJYcIkTMIkTMJsivlXvqCW+qAv9X3QVxR/AveXsgHzlAQ9AAAAAElFTkSuQmCC" /></a>
            <div class="action-top" @click="toTop"></div>
        </div>
        <div  class="search-modal" v-show="state.showCate">
            <div class="tag-group">
                <dl class="title-box">
                    <div class="group__title">
                        <dt>热门搜索</dt>
                    </div>
                    <dd
                        class="van-cell"
                        v-for="(item, index) in HotWords"
                        :key="index"
                        @click="handlerCate(item)"
                    >
                        {{item}}
                    </dd>
                </dl>
                <dl class="title-box">
                    <div class="group__title">
                        <dt>发布时间</dt>
                    </div>
                    <dd
                        class="van-cell"
                        v-for="(item, index) in Ranges"
                        :key="index"
                        @click="handlerCate(item)"
                    >
                        {{item.text}}
                    </dd>
                </dl>
                <dl class="title-box">
                    <div class="group__title">
                        <dt>文章来源</dt>
                    </div>
                    <dd
                            class="van-cell"
                            v-for="(item, index) in Rss"
                            :key="index"
                            @click="handlerCate(item)"
                    >
                        {{item.title}}
                    </dd>
                </dl>
                <dl class="title-box">
                    <div class="group__title">
                        <dt>文章分类</dt>
                    </div>
                    <dd
                            class="van-cell"
                            v-for="(item, index) in Tags"
                            :key="index"
                            @click="handlerCate(item)"
                    >
                        {{item.tag}}
                    </dd>
                </dl>
            </div>
        </div>
        <div class="search-box">
            <div slot="label" class="action-cate" @click="SetshowCate"><span class="lbl">筛选</span></div>
            <div slot="action" class="action-btn" @click="onSearch">搜索</div>
        </div>
        <div class="result-box">

            <div class="empty" v-if="isLoad && !results.length">
                <div class="title">没有搜索到文章，换个关键词试试<br />或者<span class="cate" @click="showCate = true">手动筛选</span></div>
            </div>
            <a
                    v-for="(item, index) in results"
                    :key="index"
                    target="_blank"
                    :title="item.title"
                    :href="item.link"
            >
                <p v-for="(details,index) in item.items" :key="index">
                    {{details.title}}
                <span is-link>
                    <div slot="icon" class="item-order" :class="{'time-active':isActive == details.date}">{{index+1}}、</div>
                    <div slot="label" :class="{'time-active':isActive == details.date}">{{details.date}}<span class="item-from" >{{details.rssTitle}}</span> </div>
                    <div slot="title" class="item-title"  :class="{'time-active':isActive == details.date}" v-html="details.sotitle || details.title"></div>
                </span>
                </p>
            </a>

            <p v-if="results.length && isBusy">没有更多了~</p>

        </div>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    import { defineComponent,ref ,reactive,computed,onMounted,watch} from 'vue';
    import RssHttp from '../axios/http.js'
    import RssApi from '../axios/api.js'
    export default defineComponent({
        setup(){
            const toTop = () => {
                window.scrollTo(0, 0)
                console.log('top')
            }
            const handlerCate = (item) => {
                console.log(item)
            }

            const state = reactive({
                showCate : false
            })

            const SetshowCate = () => {
                state.showCate = !state.showCate
                console.log(233)
            }
            const onSearch = () => {
                console.log('搜索')
            }

            const TODAY = dayjs().format('YYYY-MM-DD')
            const links = ref([])
            const Tags  = ref([])
            const Rss = ref([])
            const Ranges = ref([])
            const HotWords = ref([])
            const results = ref([])
            const isLoad = false
            const isActive = false
            const isBusy = false
            onMounted(() => {
                HotWords.value = ['React', 'Vue', 'JavaScript', 'Webpack', 'TypeScript', 'Node', 'CSS', 'Canvas', 'Flutter', 'ES6', '小程序', '浏览器']
                Ranges.value = [{
                    title: 'today',
                    dates: TODAY,
                    text: '一天'
                }, {
                    title: 'twoDay',
                    dates: [dayjs().subtract(2, 'days').format('YYYY-MM-DD'), TODAY],
                    text: '两天'
                }, {
                    title: 'week',
                    dates: [dayjs().subtract(7, 'days').format('YYYY-MM-DD'), TODAY],
                    text: '一周'
                }, {
                    title: 'month',
                    dates: [dayjs().subtract(31, 'days').format('YYYY-MM-DD'), TODAY],
                    text: '一月'
                }]
                RssHttp.get(RssApi.Rss.links,false).then((result) => {
                    links.value = JSON.parse(JSON.stringify(result.data))
                    results.value = JSON.parse(JSON.stringify(result.data))
                })
                RssHttp.get(RssApi.Rss.tags,false).then((result) => {
                    Tags.value = JSON.parse(JSON.stringify(result.data))
                })
                RssHttp.get(RssApi.Rss.rss,false).then((result) => {
                    Rss.value = JSON.parse(JSON.stringify(result.data))
                })
            })
            watch(() => {
                setInterval(()=>{
                    console.log(new Date())
                },10000)
            })
            return{
                links,
                Tags,
                Rss,
                Ranges,
                HotWords,
                state,
                searchValue:'',
                results,
                isLoad,
                isActive,
                isBusy,

                SetshowCate,
                toTop,
                handlerCate,
                onSearch
            }
        }
    })
</script>

<style scoped lang="less">
    .container{
        width: 80%;
        margin: 0 auto;
        position: relative;
        .fixed-box{
            position: fixed;
            bottom: 100px;
            right: 25%;
            z-index: 9;
            .action-github, .action-top{
                width: 40px;
                height: 40px;
                line-height: 40px;
                display: block;
                cursor: pointer;
                margin-top: 12px;
                border-radius: 2px;
                overflow: hidden;
                position: relative;
                left: 50px;
            }
            .action-github{
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .action-top{
                background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3738126263,1350098659&fm=26&gp=0.jpg");
                background-size: 40px;

            }
        }
        .search-modal{
            left: 0;
            width: 24%;
            height: 100%;
            position: fixed;
            max-height: 100%;
            overflow-y: auto;
            background-color: #fff;
            -webkit-transition: -webkit-transform .3s ease-out;
            transition: -webkit-transform .3s ease-out;
            transition: transform .3s ease-out;
            -webkit-overflow-scrolling: touch;
            .title-box{
                margin: 0;
                .group__title{
                    font-size: .9375rem;
                    color: #333;
                    background: #f5f5f5;
                        margin: 0;
                        dt{
                            padding: 1rem 1rem .5rem;
                            color: #969799;
                            line-height: 1rem;
                            font-size: 1.125rem;
                            vertical-align: middle;
                            margin-right: .375rem;
                            position: relative;
                            top: -.125rem;
                        }

                }
            }
            .van-tag{
                background: #bbb;
                margin: 4px;
                cursor: pointer;
                padding: 4px 8px;
                font-size: 14px;
                &:hover{
                    background: #666;
                }
            }
            .van-cell-group__title{
                font-size: 15px;
                color: #333;
                background: #f5f5f5;
            }
            .van-cell{
                font-size: 13px;
                color: #262626;
                text-align: center;
                cursor: pointer;
                height: 25px;
                line-height: 25px;
                margin: 0;
                &:hover,
                &:active{
                    background: #f7f8fa;
                }
            }
            .van-cell:not(:last-child)::after{
                border-bottom-color: #f7f8fa;
            }
            .van-cell__label{
                font-size: 12px;
                color: #999;
                word-break: break-all;
            }

        }
    }
</style>
