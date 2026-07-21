import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    //任务中心-.ui.cloudp2p.RichMediaActivity
    {
      key: 0,
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
    {
      key: 1,
      name: '百度网盘超级会员日-已完成任务',
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
    //游戏中心
    {
      key: 3,
      name: '游戏中心-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="lingqujiangli"] <<n [text="游戏中心"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '游戏中心-好礼通行证-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[desc="关闭"] -2 [text="point"] <<n [text="游戏中心"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@TextView -2 [text="好礼通行证"] <<n [text="游戏中心"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //任务中心
    {
      key: 6,
      name: '任务中心-加载中…-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="left_button"] +2 [text="加载中…"][vid="middle_title_text"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '任务中心-百度云升级/福利来袭-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          anyMatches: [
            '@[vid="left_button"] +2 [text="百度云升级"][vid="middle_title_text"]',
            '@[vid="left_button"] +2 [text^="福利来袭"][vid="middle_title_text"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //
    {
      key: 10,
      name: '任务中心-选择照片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="imageview_checkbox"] <<n [vid="grid_item_layout"][index=1] <<n * [text="已选：0/99"][vid="select_count_text"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="完成"][vid="done_button"] <<n * [text="已选：1/99"][vid="select_count_text"]',
          ],
          activityIds: ['.ui.localfile.selectfile.LocalImageSelectActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '任务中心-题目框选',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['View + ImageView + @ImageView + ImageView'],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[desc="录入错题"] -n [desc="已选择 1 道题目"]'],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '任务中心-录入错题本',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="全部保存"] <<n [text="学习服务页"]'],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="任务完成"][vid="tv_title"] -2 [vid="iv_close"]'],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
      ],
    },
    //看视频-com.byazt.gd.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要加速领奖"] <<n * [text$="跳过"]',
            '@[text="我要直接拿奖励"] <<n * [text$="跳过"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 16000,
          matches: ['@[id="floatingBuyBar"] - [id="web"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-我要直接领奖-奖励已领取-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="我要直接领奖"] <<n * [text="跳过"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          matches: ['@[text="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-我要直接领奖-奖励已领取-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@RelativeLayout <<n FrameLayout + FrameLayout + FrameLayout'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 30,
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
            '@[text="跳过"] <<n [desc="skip_button"] <n ViewGroup - ViewGroup > [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 50,
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
      key: 51,
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
      key: 52,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[width=48&&height=48] <<n * [text="恭喜获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-完成App安装',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击下载或打开第三方应用"] <<n * [text="完成App安装，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text*="微信"] <<n * [text="提前拿奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView < FrameLayout + FrameLayout >2 ImageView'],
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
            '@[text^="跳过"][vid="tv_skip"]',
            '@[text^="跳过"][vid="countdown"]',
            '@[text^="跳过"][vid="vilon_close_text"]',
            '@[text="跳过"] <<n * [text="上滑或点击"]',
          ],
          activityIds: ['.advertise.ui.SplashAdActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[vid="iv_close"] + [vid="cl_content"]',
            '@[text^="跳过"] - FrameLayout > [text="反馈"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
  ],
});
