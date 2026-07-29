import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    //看视频-com.byazt.gd.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速领奖"] <<n * +n * [text$="跳过"] -n [text~="[0-9]+s"]',
            '@[text="立即前往"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-跳过-试玩*秒获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="跳过小游戏立即前往"] < @[id="bottom-cta"] <<n * +n * [text="跳过"] -n [text~="试玩[0-9]+秒获得奖励"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-跳过-限时领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="7b144c81c2cb181f"] < * -n * [text="限时领取"]', //恭喜获得奖励
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-礼包-再逛*秒后可领奖',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-礼包-限时领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="7b144c81c2cb181f"] < * -n * [text="限时领取"]', //恭喜获得奖励
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 26,
      name: '看视频-礼包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: ['[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]'],
          matches: [
            '@RelativeLayout[clickable=true] <<n FrameLayout + FrameLayout + FrameLayout',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 27,
      name: '看视频-礼包-奖励已领取-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-已发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="svg%3e"] <<n * +n * [text="已发放"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 29,
      name: '看视频-领取成功-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'ImageView < @LinearLayout -n LinearLayout > [text="领取成功"]',
            'TextView[text="跳过"] < @LinearLayout -n LinearLayout > [text="领取成功"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 30,
      name: '看视频-限时领取-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="icon-close.e3e3211b"] -n * [text="限时领取"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.gd.Stub_Standard_Activity
    {
      key: 37,
      name: '看视频-跳过-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[id="floatingBuyBar"] - [id="web"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Activity'],
        },
      ],
    },
    {
      key: 38,
      name: '看视频-广告二级页',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@View < WebView < WebView <<n LinearLayout + View + View'],
          activityIds: ['com.byazt.gd.Stub_Standard_Activity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 39,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < [id="694d63"] < [id="ef6da1"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 40,
      name: '看视频-礼包-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"] <<n [desc="skip_button"] <n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 50,
      name: '看视频-完成App.*，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击下载或打开第三方应用"] <<n * +n * [text~="完成App.*，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '看视频-打开App体验*秒，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击打开或下载第三方应用"] <<n * +n * [text~="打开App体验[0-9]+秒，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[width=48&&height=48] < * -n * [text="恭喜获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-恭喜获得奖励！-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[width=132&&height=132] - * [text="恭喜获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-点击广告拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击广告拿奖励"] <<n * [text="点击广告，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 55,
      name: '看视频-新人专享福利-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - [text="新人专享福利"]'],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    {
      key: 56,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] <<n * +n * [text="奖励将于"] + [text~="[0-9]+"] + [text="秒后发放"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 57,
      name: '看视频-已完成浏览10秒，提前获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[width=48&&height=48] <<n * -n * [text="已完成浏览10秒，提前获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity-微信
    {
      key: 60,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text*="微信"] <n * - [text="提前拿奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-微信-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageView < @FrameLayout + FrameLayout >2 ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-微信-阅读小说 可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击去微信看全文"] <<n * - * [text="阅读小说"] + [text="可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-微信-恭喜已经获得奖励！',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜已经获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-.platform.business.incentive.advertise.ui.AdvertiseActivity
    {
      key: 100,
      name: '看视频-关闭广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="关闭广告"][vid="btn_close"]'],
          activityIds: [
            '.platform.business.incentive.advertise.ui.AdvertiseActivity',
          ],
        },
      ],
    },
    {
      key: 199,
      name: '会员频道-会员等级体系新升级-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView -2 [text="会员等级体系新升级"] <<n [text="会员频道"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //任务中心
    //第一轮：25.09.28-25.12.26
    //第二轮：25.12.27-26.03.26
    //第三轮：26.03.27-26.06.24
    //第四轮：26.06.25-26.09.22
    //任务中心-.ui.cloudp2p.RichMediaActivity
    //每日签到
    {
      key: 200,
      name: '每日签到-签到成功-今日积分已翻倍',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton[text="c"][clickable=true] < View + [text="qiandao"] +n [text="yifanbei"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    //做任务赚积分
    //日常任务
    {
      key: 210,
      name: '日常任务-百度网盘超级会员日',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="done"] +2 [text="2bd7c5199a3f9703e3ae80849"] <<n [text="百度网盘超级会员日"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 211,
      name: '日常任务-集勋章抽金条手机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="lingqujiangli"][clickable=true] - View > [text="task-close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 212,
      name: '日常任务-小程序点图文',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="left_button"] <<n * +n * [text="恭喜获得"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 213,
      name: '日常任务-体验一刻相册',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="left_button"][clickable=true] +2 [text="福利来袭X-永久无限空间限时抢"][vid="middle_title_text"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 214,
      name: '日常任务-去玩游戏合成3次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.9091',
            top: 'width * 1.8286',
          },
          actionDelay: 30000,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 215,
      name: '日常任务-去寻道砍树3次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="lingqujiangli"] < @View[text=""][clickable=true] + [desc="close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 219,
      name: '日常任务-奇妙赏',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="lingqujiangli"] < @View[text=""][clickable=true] <<n [text="奇妙赏"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //最新AI功能
    {
      key: 220,
      name: '最新AI功能-云一朵文件智能整理',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[id="android:id/button1"] <<n * -n [text="Z 侏罗纪：重生"][vid="text1"] <<n * + * [text="点击勾选文件"][vid="tv_tip"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="智能整理"][vid="ui_id_menu_text"] <n @RelativeLayout[clickable=true] <<n * + * [text="点击智能整理"][vid="tv_tip"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    {
      key: 221,
      name: '最新AI功能-体验AI笔记',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[vid="cover"] < @RelativeLayout[clickable=true] < [vid="recent_pager"] <<n * +n * [text="选视频生成ai笔记"][vid="tv_title"]',
          ],
          activityIds: ['.servicepage.video.ui.VideoServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="笔记"][vid="view_video_content_child_tab_item_layout_text"] < RelativeLayout < @LinearLayout[clickable=true] <<n * +n * [text="选视频生成ai笔记"][vid="tv_title"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
      ],
    },
    {
      key: 222,
      name: '最新AI功能-体验AI拍一拍',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI拍一拍"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 223,
      name: '最新AI功能-体验AI去水印',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI去水印"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 224,
      name: '最新AI功能-体验AI变清晰',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI变清晰"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 225,
      name: '最新AI功能-体验AI照相馆',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="dyr-dt"] < @View[text=""][clickable=true] <<n * + * [text="点击写真模板"][vid="tv_title"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    {
      key: 226,
      name: '最新AI功能-体验AI消除',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI消除"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    {
      key: 227,
      name: '最新AI功能-体验AI去手写',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI去手写"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    {
      key: 228,
      name: '最新AI功能-去体验错题收集',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="相册导入"][vid="question_collect_gallery"] <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          key: 1,
          preKeys: [0],
          matches: [
            '@[vid="imageview_checkbox"] <<n [vid="grid_item_layout"][index=1] <<n [vid="fragment_container"] + [vid="bottom_bar"] > [text="已选：0/99"][vid="select_count_text"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="完成"][vid="done_button"] - [text="已选：1/99"][vid="select_count_text"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            'ImageView - @ImageView[clickable=true] - ImageView - View <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          matches: [
            '@[desc="录入错题"][clickable=true] -n [desc="已选择 1 道题目"] <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 5,
          matches: ['@[text="全部保存"] <<n [text="学习服务页"]'],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 6,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
      ],
    },
    {
      key: 229,
      name: '最新AI功能-去体验拍题解题',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_photo_button"] <<n * + * [text="拍摄题目并解题"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] -2 [desc="每次只框一题，识别更准确"] <<n * + * [text="拍摄题目并解题"][vid="tv_title"]',
          ],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
      ],
    },
    //功能任务
    {
      key: 230,
      name: '功能任务-去刷一刷首页',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 231,
      name: '功能任务-浏览书城小说30s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="任务完成"][vid="tv_title"] -n [vid="gif_lottie_view"][clickable=true]',
          ],
          activityIds: ['.bdreader.ui.view.NovelMainActivity'],
        },
      ],
    },
    {
      key: 232,
      name: '功能任务-去逛逛游戏频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[text=""][clickable=true] - TextView[clickable=true] < View <n [text="游戏中心"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 233,
      name: '功能任务-浏览短剧30s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="任务完成"][vid="tv_title"] <<n @[vid="layout_drag"][clickable=true]',
          ],
          activityIds: ['.playerlet.ui.ShortPlayServiceActivity'],
        },
      ],
    },
    {
      key: 234,
      name: '功能任务-去体验云打印',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: ['@ImageButton +n [text="立即使用"] <<n [text="简单打印"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[text=""][clickable=true] + [id="noticeSwiper"] <<n * + * [text="上传任意文件"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="手机相册"] < @View[clickable=true] <<n * + * [text="上传任意文件"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[text="确定"][clickable=true] - [text="预览"] <<n * + * [text="上传任意文件"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          matches: [
            '[text="任务完成领奖"] - TextView < @View[text=""][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 235,
      name: '功能任务-去体验云打印-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageButton +n [text="立即使用"] <<n [text="简单打印"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //26.07.09-29.07.31 集勋章 赢大奖
    //做任务赢勋章抽大奖
    {
      key: 300,
      name: '好运签日历',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * [text="sign-shop"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //工作星球-一键生成PPT
    {
      key: 301,
      name: '工作星球-一键生成PPT',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="send_msg_icon"] <n [vid="genflow_input_container"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    //工作星球-模拟面试练习
    {
      key: 302,
      name: '工作星球-模拟面试练习',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="view_anchor"] + [vid="ll_tip"] > [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //工作星球-智能剪辑出片
    {
      key: 303,
      name: '工作星球-智能剪辑出片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="transBtn"] < View + View >n [desc="关闭按钮"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="send_msg_icon"] <n [vid="genflow_input_container"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[vid="title_quit"][clickable=true] <<n * +n * [text="任务处理中…"][vid="genflow_sub_desc"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    //学习星球-一键生成笔记
    {
      key: 304,
      name: '学习星球-一键生成笔记',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[vid="cover"] <<n [vid="recent_pager"]'],
          activityIds: ['.servicepage.video.ui.VideoServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="笔记"][vid="view_video_content_child_tab_item_layout_text"] < RelativeLayout < @LinearLayout[clickable=true] <<n * + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.video.VideoPlayerActivity'],
        },
      ],
    },
    //学习星球-纸质资料扫描
    {
      key: 305,
      name: '学习星球-纸质资料扫描',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: ['@[vid="rb_camera"] -n * [vid="tv_no_records"]'],
          activityIds: ['.scan.ui.ScanActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] <<n [vid="ocr_title_bar_container"] +n [text="拍摄纸质资料，生成高清电子版"][vid="take_photo_tip"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[vid="iv_back"] + [vid="iv_title"] + [vid="iv_search"]'],
          activityIds: ['.scan.ui.ScanActivity'],
        },
      ],
    },
    //学习星球-
    {
      key: 306,
      name: '学习星球-录音',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[vid="bottom_btn"] < [vid="container_bottom_btn"]'],
          activityIds: ['.listen.notes.ui.activity.ListenNoteMainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.listen.notes.ui.activity.ListenNotesPlayActivity'],
        },
      ],
    },
    //生活星球-记录成长轨迹
    {
      key: 307,
      name: '生活星球-记录成长轨迹',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@View[clickable=true] + [text="成长轨迹"] <<n * + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.cloudimage.ui.view.AlbumServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text="做同款"] < @View'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="手动选图"] < @View[clickable=true] -n [text="为你智能匹配相关照片"]',
          ],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['[text="确定"] < @View[clickable=true] - [text="已选5张"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
      ],
    },
    //生活星球-生成写真照片
    {
      key: 308,
      name: '生活星球-生成写真照片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="dyr-dt"] < @View <<n [vid="rl_red_bag_root"] + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    //生活星球-新建我的相簿
    {
      key: 309,
      name: '生活星球-新建我的相簿',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView[clickable=true] - View <<n * + * [vid="photo_books_album"]',
          ],
          activityIds: ['.cloudimage.ui.view.AlbumServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@View[clickable=true] >n [text="新建自定义相簿"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="立即创建"][clickable=true][focusable=true] -n [text="新建相簿"]',
          ],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
      ],
    },
    //
    {
      key: 310,
      name: '任务完成获得时光',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * View[clickable=true] [text="btn"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 311,
      name: '恭喜你获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * View[clickable=true] [text="prize-btn"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '开启安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="暂不开启"] - [text="开启安全备份"]'],
          activityIds: ['.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '开启照片自动备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="dialog_button_cancel"] -n [text="是否开启照片自动备份？"][vid="content_info"]',
          ],
          activityIds: ['.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 402,
      name: '百度网盘更新啦',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="下次再说"][vid="left_btn"] < [vid="bottom_layout"] -n [text="百度网盘更新啦"][vid="title_tv"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 403,
      name: '喜欢“百度网盘”吗？',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="以后再说"][vid="tv_left_btn"] -n [text="喜欢“百度网盘”吗？"][vid="tv_title"] < [vid="view_score_style"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"] + [text~="[0-9]"]',
            '@[text~="跳过 [0-9]"][vid="countdown"]',
            '@[text="跳过"][vid="tv_skip"]',
            '@[text="跳过"] <n FrameLayout < [vid="content"] < FrameLayout < LinearLayout + View',
          ],
          activityIds: ['.advertise.ui.SplashAdActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-跳过 *',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text~="跳过 [0-9]"][vid="countdown"]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 510,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"] + [vid="cl_content"]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
  ],
});
