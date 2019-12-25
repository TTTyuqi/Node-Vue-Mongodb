module.exports = (app) => {
    const router = require('express').Router()
    const mongose = require('mongoose')
    const Caterory = mongose.model('Catrgory')
    const aritcle = mongose.model('Article')
    const heroes = mongose.model('Hero')
    //初始化文章数据
    router.get('/news/init',async (req,res) => {
        const partent = await Caterory.findOne({
            name:'新闻分类'
        })
        const cat = await Caterory.find().where({
            parent : partent
        }).lean()
        
        const newsTitle = ["新英雄爆料丨蒙犽：我的子弹会拐弯，我的想法不一般！", "玄雍资料片1月上线，嬴政形象升级抢先看", "峡谷交响乐幕后故事揭秘（交响音乐会倒计时2天）", "皮肤爆料 | S18赛季皮肤提前曝光，竟然是ta！", "星元上新丨英雄齐换装，圣诞头饰、武器抢先看", "12月13日体验服停机更新公告", "12月10日全服不停机更新公告", "【已修复】部分微信区服闪退及对局结算异常说明公告", "12月11日全服不停机更新公告", "【已修复】圣诞礼盒活动异常问题处理公告", "冰雪聚峡谷 轻松得好礼", "KPL限定皮肤【天狼征服者】全服购买开启公告", "【看KPL秋决，赢豪华大礼】活动公告", "【奇遇咕嗒的寻宝之旅】活动公告", "【已修复】圣诞礼盒活动异常修复公告", "2019年KPL秋季赛总决赛明日开启 线上观赛赢海量福利", "荣耀巅峰，该我上场！六福珠宝设计制作全新KPL冠军戒指揭秘", "C4D视觉打造的王者校园，慎点！你可能被炫到~", "高校海选赛报名最后一周，为校而战就等你来", "模拟战冬季冠军杯分组情况及正赛赛程公布"]
        const newList = newsTitle.map((el) => {
            const randcats = cat.slice(0).sort((a,b) => { Math.random() - 0.5 })
            return {
                categorys:randcats.slice(0,2),
                title: el
            }
        })
       
        await aritcle.deleteMany({})
        await aritcle.insertMany(newList)
        res.send(newList)
    })
    //初始化英雄数据
    router.get('/heros/init',async (req,res) => {
        await heroes.deleteMany({})
        const rowHeros = [{"name":"热门","heros":[{"name":"鲁班七号","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"},{"name":"孙悟空","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"},{"name":"铠","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{"name":"后羿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"},{"name":"亚瑟","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{"name":"韩信","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"},{"name":"孙尚香","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"},{"name":"妲己","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"},{"name":"甄姬","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"},{"name":"安琪拉","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"}]},{"name":"战士","heros":[{"name":"赵云","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"},{"name":"墨子","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"},{"name":"钟无艳","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"},{"name":"吕布","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"},{"name":"夏侯惇","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"},{"name":"曹操","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg"},{"name":"典韦","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg"},{"name":"宫本武藏","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg"},{"name":"达摩","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"},{"name":"老夫子","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg"},{"name":"关羽","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg"},{"name":"程咬金","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"},{"name":"露娜","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"},{"name":"花木兰","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"},{"name":"橘右京","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"},{"name":"亚瑟","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{"name":"孙悟空","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"},{"name":"刘备","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg"},{"name":"钟馗","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"},{"name":"杨戬","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg"},{"name":"雅典娜","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg"},{"name":"哪吒","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg"},{"name":"铠","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{"name":"苏烈","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"},{"name":"裴擒虎","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"},{"name":"狂铁","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg"},{"name":"孙策","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"},{"name":"李信","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg"},{"name":"盘古","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg"},{"name":"云中君","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"},{"name":"曜","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg"},{"name":"马超","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"}]},{"name":"法师","heros":[{"name":"小乔","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg"},{"name":"墨子","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg"},{"name":"妲己","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg"},{"name":"嬴政","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg"},{"name":"高渐离","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg"},{"name":"孙膑","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"},{"name":"扁鹊","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg"},{"name":"芈月","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"},{"name":"周瑜","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg"},{"name":"甄姬","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg"},{"name":"武则天","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg"},{"name":"貂蝉","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"},{"name":"安琪拉","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg"},{"name":"露娜","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg"},{"name":"姜子牙","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"},{"name":"王昭君","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg"},{"name":"张良","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg"},{"name":"不知火舞","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"},{"name":"钟馗","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg"},{"name":"诸葛亮","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg"},{"name":"干将莫邪","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg"},{"name":"女娲","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg"},{"name":"杨玉环","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"},{"name":"弈星","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg"},{"name":"米莱狄","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg"},{"name":"司马懿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"},{"name":"沈梦溪","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg"},{"name":"上官婉儿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"},{"name":"嫦娥","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"},{"name":"西施","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg"}]},{"name":"坦克","heros":[{"name":"廉颇","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"},{"name":"庄周","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"},{"name":"刘禅","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"},{"name":"钟无艳","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg"},{"name":"白起","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"},{"name":"芈月","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg"},{"name":"吕布","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg"},{"name":"夏侯惇","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"},{"name":"达摩","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg"},{"name":"项羽","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"},{"name":"程咬金","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"},{"name":"刘邦","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"},{"name":"亚瑟","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg"},{"name":"牛魔","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"},{"name":"张飞","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"},{"name":"太乙真人","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"},{"name":"东皇太一","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"},{"name":"铠","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"},{"name":"苏烈","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"},{"name":"梦奇","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"},{"name":"孙策","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"},{"name":"嫦娥","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg"},{"name":"猪八戒","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"}]},{"name":"刺客","heros":[{"name":"赵云","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg"},{"name":"阿轲","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"},{"name":"李白","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"},{"name":"貂蝉","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg"},{"name":"韩信","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"},{"name":"兰陵王","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"},{"name":"花木兰","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg"},{"name":"不知火舞","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg"},{"name":"娜可露露","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"},{"name":"橘右京","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"},{"name":"孙悟空","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"},{"name":"百里守约","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"},{"name":"百里玄策","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"},{"name":"裴擒虎","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"},{"name":"元歌","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"},{"name":"司马懿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"},{"name":"上官婉儿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg"},{"name":"云中君","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"},{"name":"马超","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg"}]},{"name":"射手","heros":[{"name":"孙尚香","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"},{"name":"鲁班七号","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"},{"name":"马可波罗","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"},{"name":"狄仁杰","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"},{"name":"后羿","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"},{"name":"李元芳","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"},{"name":"虞姬","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"},{"name":"成吉思汗","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"},{"name":"黄忠","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"},{"name":"百里守约","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"},{"name":"公孙离","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"},{"name":"伽罗","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"}]},{"name":"辅助","heros":[{"name":"庄周","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"},{"name":"刘禅","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"},{"name":"孙膑","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"},{"name":"姜子牙","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg"},{"name":"牛魔","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"},{"name":"张飞","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"},{"name":"蔡文姬","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"},{"name":"太乙真人","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"},{"name":"大乔","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"},{"name":"鬼谷子","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"},{"name":"明世隐","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"},{"name":"杨玉环","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg"},{"name":"盾山","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"},{"name":"瑶","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"},{"name":"鲁班大师","avatar":"http://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg"}]}]
        //第一步，拿到数据 处理数据
        for(let cat of rowHeros){
            //处理‘热门’中的英雄数据，这不属于英雄分类
            if(cat.name === '热门'){
                //跳过当前循环，进入下一级循环
                continue
            }
           
            //查询分类列表中的英雄分类
            const category = await Caterory.findOne({
                name : cat.name
            })
            // console.log('res',cat.name)
            //给英雄数据添加上响应的分类
            cat.heros = cat.heros.map((hero) => {
                hero.caterorus = [category]
                return hero
            })
        //开始录入数据
       
        await heroes.insertMany(cat.heros)
        }
       res.send(await heroes.find())
    })
    //web新闻资讯的api接口
    router.get('/news/list',async (req,res) => {
        //查询出分类列表(catrgory表)的父级分类
        const parent = await Caterory.findOne({ name : '新闻分类'})
        //关联查询出当前分类的子级分类，使用mongose的聚合查询 -- aggregate 
        const cats = await Caterory.aggregate([
            //使用$match 类似于where查询 
            { $match: { parent: parent._id} },
            // 使用$lockup 类似于左外链接 关联查询出当前对象的关联字段 查询关联表的信息
            { $lookup : {
                //关联的外表
                from :'articles',
                //定义当前对象的ID--本地键
                localField : '_id',
                //定义的关联外表对象的ID--外地键
                foreignField: 'categorys',
                as: 'newList'
            }},
            {
                //本意是添加一个字段，这里我们可以使用它来对数据进行处理
                $addFields: {
                    newList: { $slice : [ '$newList',5]}
                }
            }
        ])
        //使用数组的一个unshift方法向 cats这个数组对象最前面添加一个对象
        const subcats = cats.map((el) => { return el._id })
        // console.log("subcats",subcats)
        cats.unshift({
            name:'热门',
            newList: await aritcle.find().where({
                categorys:{ $in: subcats }
            }).populate('categorys').limit(5).lean()
        })
        //继续处理前端数据
        cats.map((cat) => {
            cat.newList.map((news) => {
                news.categoriesName = ( cat.name === '热门') ? news.categorys[1].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })
    //web 英雄资讯api接口
    router.get('/heroes/list',async (req,res) => {
        //查询分类列表中父级分类--‘英雄分类’
        const heroParent = await Caterory.findOne({
            name: '英雄分类'
        })
        //关联查询出当前分类的子级分类，使用mongose的聚合查询 -- aggregate 
        const heroCats = await Caterory.aggregate([
            { $match : {parent: heroParent._id }},
            // 使用$lockup 类似于左外链接 关联查询出当前对象的关联字段 查询关联表的信息
            { $lookup : {
                //关联的外表
                from :'heros',
                //定义当前对象的ID--本地键
                localField : '_id',
                //定义的关联外表对象的ID--外地键
                foreignField: 'caterorus',
                as: 'heroList'
            }},
        ])
         //使用数组的一个unshift方法向 cats这个数组对象最前面添加一个对象
         const subherocats = heroCats.map((el) => { return el._id })
         heroCats.unshift({
             name: '热门',
             heroList: await heroes.find().where({
                caterorus: {$in : subherocats}
             }).limit(10).lean()
         })

         res.send(heroCats)
    })
    //文章详情页
    router.get('/article/:id',async (req,res) => {
        const ArticleData = await aritcle.findById(req.params.id).lean() 
        //返回相关的文章资讯信息
        ArticleData.related = await aritcle.find().where({
            categorys:{$in: ArticleData.categorys}
        }).limit(2)
        // console.log('ArticleData',ArticleData)
        res.send(ArticleData)
    })
    //英雄详情页
    router.get('/hero/:id',async (req,res) => {
        const heroData = await heroes.findById(req.params.id).populate(['caterorus','itmes1','itmes2','partners.hero']).lean()
        res.send(heroData)
    })
    app.use('/web/api',router)
}