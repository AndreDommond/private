http-request ^https?:\/\/api\.tidal\.com\/v1\/(pages\/album|(user|track|page)s\/(\d+)\/(state|subscription|lyrics|onboarding|playbackinfopostpaywall)) script-path=https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js, timeout=10, tag=Tidal HiFi

# Sunert
http-response https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) requires-body=1, script-path=https://raw.githubusercontent.com/Sunert/Script/master/Script/BiliHD.js, tag=Bilipj

# yichahucha
http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js, requires-body=true, timeout=10, tag=奈菲评分
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js, requires-body=true, timeout=10, tag=奈菲评分
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js, requires-body=true, timeout=10, tag=奈菲评分
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js, tag=比价
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js, tag=比价
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js, tag=微博去广告
http-response ^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js, tag=微博去广告

# Choler 
http-response ^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js, tag=微信公众号去广告

# 公众号墨鱼手记    https://github.com/ddgksf2013
http-response ^http:\/\/duoting\.tatatimes\.com\/tataeraapi\/api\.s\?h=QueryVipUser url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/englishread.js,tag=英语阅读
http-response https://cm.szsszykj.com/interface/GetVip.php requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qzz.js,tag=趣制作
http-response ^https:\/\/api\.flexibits\.com\/(v1\/auth\/device|v1\/account\/details) requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fantastical.js,tag=Fantastical
http-response https://avoscloud.com/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcz.js,tag=西窗烛
http-response https://d.syshhc.top/wp-json/wp/v2/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js,tag=老胡工具箱
http-response http://115.28.168.103:8080/yiyan/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js,tag=一言
http-response http://dbapi.ganbuguo.com/user/userinfo requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/done.js,tag=done
http-response http:\/\/api\.591master\.com\:8081\/(1.0|3.6.8)\/ui(forum|common)\/(downloadwallpaper|getuser) requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/phoneyjgj.js,tag=手机硬件管家
http-response https://www.mindmeister.com/api/v2/licenses/meistertask requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/meistertask.js,tag=meistertask
http-response ^https:\/\/sports\.lifesense\.com\/sport_service\/sport\/sport\/uploadMobileStepV2 requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lxhealth.js,tag=乐心
http-response ^https://api.pushover.net/1/messages.json requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/pushover.js,tag=pushover
http-response ^https:\/\/subs\.platforms\.team\/.+\/apple\/verify$ requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/productive.js,tag=PRODUCTIVE
http-response ^https:\/\/api\.hulusaas\.com\/api\/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/hulu.js,tag=葫芦时刻
http-response ^https:\/\/(snailsleep\.net\/|(music|community)\.snailsleep\.net\/)(snail\/v1\/profile\/get|snail-music\/music\/(sleeping|meditation)\/single\/list) requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wnsm.js,tag=蜗牛睡眠
http-response https?:\/\/api\.jiaonizuocai\.com requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/cpdq.js,tag=菜谱大全
http-response ^https?:\/\/nmeditation\.snailsleep\.net\/meditation-(audio|user|order|audio)\/(api|user)\/(audio\/master\/detail|get\/info|order/user\/vip\/info|ad\/get) requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/dxmx.js,tag=大象冥想
http-response ^https:\/\/(ticktick|dida365)\.com\/api\/v2\/user\/status requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ddqd.js,tag=滴答
http-response ^https:\/\/claritywallpaper\.com\/clarity\/api\/(userInfo|special\/queryByCatalogAll) requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/clarity.js,tag=克拉
http-response ^https?:\/\/subscription-service\.neuralprisma\.com\/subscription_get requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/lensa.js,tag=Lensa
http-response https://diary.7english.cn:2433//api/user/userInfo requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/moo.js,tag=moo日记
http-response https://bbb.ddly666.top/wp-json/wp/v2/posts/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js,tag=酸鸡汤
http-response ^https:\/\/hkj178.com/wp-json/mp/v2/posts/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js,tag=黑科技软件
http-response ^https:\/\/a.jxjt888.top/wp-json/wp/v2/posts/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js,tag=天泽后花园
http-response ^https:\/\/lysl2020.com/wp-json/wp/v2/posts/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js, tag=小野分享
http-response ^https:\/\/www.i3zh.com/wp-json/wp/v2/posts/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xcx.js, tag=搜罗好货
http-response ^https:\/\/api\.gotokeep\.com\/* requires-body=1,script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/keep.js, tag=Keep
http-response https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index) requires-body=1, script-path= https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/xxys.js, tag=小小影视

#  EMBY
http-response ^https?:\/\/mb3admin.com\/admin\/service\/registration\/validateDevice requires-body=1,  script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/Emby.js, tag=EMBY

# Wangsc1
http-response ^https?://m.client.10010.com/uniAdmsInterface/getHomePageAd script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/china_unicom.js, tag=联通轮播去广告

# Miao Miao
http-response ^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt requires-body=1, script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bear.js, tag=Bear熊掌记

# Alex0510
http-response https://api.revenuecat.com/v1/receipts script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/noto.js, requires-body=1, tag=noto笔记

# Liquor030
http-response ^https?://.*\.snssdk\.com/bds/(feed/stream|comment/cell_reply|cell/cell_comment|cell/detail|ward/list|user/favorite|user/cell_coment|user/cell_userfeed|user/publish_list) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/Liquor030/Sub_Ruleset/master/Script/Super.js, tag=皮皮虾去水印广告

# langkhach270389
http-response http:\/\/www\.google\..* requires-body=1, script-path=https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/endlessgoogle.js, tag=endlessgoogle

# Nobyda整理
http-request ^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ requires-body=1,max-size=0,script-path=https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js, tag=TF区域限制解除
http-response https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js, tag=百度云加速
http-response ^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/91.js, tag=91短视频
http-response ^https?:\/\/.*\.(lago|fuli|xiang(jiao|xiang))apps\.com\/(ucp\/index|getGlobalData|.+\/reqplay\/) requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js, tag=香蕉视频
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js, tag=酷我音乐
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js, tag=扫描全能王
http-response ^https?:\/\/account\.wps\.cn\/api\/users requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js, tag=WPS
http-response ^https:\/\/viva\.v21xy\.com\/api\/rest\/u\/vip requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/vivavideo.js, tag=小影
http-response ^https?:\/\/api.bjxkhc.com\/index\.php\/app\/ios\/(vod\/show|(user|vod|topic|type)\/index) requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/aimeiju.js, tag=爱美剧
http-response ^https?:\/\/api\.vnision\.com\/v1\/(users\/|banners) requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/dapian.js, tag=大片-视频编辑器
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js, tag=PicsArt美易
http-response https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js, tag=扫描全能王
http-response ^https://getuserinfo-globalapi.zymk.cn/app_api/v5/(getuserinfo|coin_account|getuserinfo_ticket|getcomicinfo)/ requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Zymh.js, tag=知音漫客
http-response ^https:\/\/api\.revenuecat\.com\/v\d\/subscribers\/\d+$ script-path=https://raw.githubusercontent.com/Tartarus2014/Script/master/vsco.js, requires-bpdy=true, tag=VSCO
http-response https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) requires-body=1, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js, tag=vue

# HotKids
http-response ^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi script-path=https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js,requires-body=1, tag=微信 App 内被屏蔽链接快捷跳转

# toulanboy
http-response https:\/\/api\.ithome\.com\/json\/newslist\/news script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/ithome_ad/ithome_ad.js,requires-body=true, tag=ithome_ad

# photonmang (*.xxjjappss.com,*.huaerdadi.com)
http-response https:\/\/.*\..*\.com\/(ssp-svr\/ssp\/list3|ucp/index|getGlobalData) requires-body=1,script-path= https://raw.githubusercontent.com/photonmang/quantumultX/master/xxys.js, tag=小小影视 旧版本去广告

hostname = *.xxjjappss.com,*.huaerdadi.com,tncj.hortorgames.com,api.weibo.cn,mapi.weibo.com,*.uve.weibo.com,trade-acs.m.taobao.com,ios.prod.ftl.netflix.com,duoting.tatatimes.com, cm.szsszykj.com, avoscloud.com, api.flexibits.com, d.syshhc.top, 115.28.168.103, dbapi.ganbuguo.com,api.591master.com, www.mindmeister.com, sports.lifesense.com, api.pushover.net, subs.platforms.team, api.hulusaas.com, snailsleep.net,music.snailsleep.net,community.snailsleep.net, api.jiaonizuocai.com, nmeditation.snailsleep.net, claritywallpaper.com, subscription-service.neuralprisma.com, mappsv5.caixin.com, diary.7english.cn, api.gotokeep.com, *.ddly666.top,hkj178.com, a.jxjt888.top,lysl2020.com, www.i3zh.com,mb3admin.com,api2.mubu.com,mp.weixin.qq.com,r.inews.qq.com,m.client.10010.com,api.revenuecat.com,vip1.kuwo.cn,api.gamer.com.tw,ap*.intsig.net,newdrugs.dxy.cn,account.wps.cn,viva.v21xy.com,api.bjxkhc.com,api.vnision.com,api.picsart.c*, api.meiease.c*,ap*.intsig.net,api.bilibili.com,getuserinfo.321mh.com,getuserinfo-globalapi.zymk.cn,www.google.*,ios.fuliapps.com,apple.fuliapps.com,ios.xiangjiaoapps.com,apple.xiangjiaoapps.com,*.xiangxiangapps.com,vsco.co,weixin110.qq.com,api.ithome.com, *.xxjjappss.com,*.huaerdadi.com, api.m.jd.com,pan.baidu.com,vsco.co,api.vuevideo.net,,api.m.jd.com,testflight.apple.com,api.tidal.com
