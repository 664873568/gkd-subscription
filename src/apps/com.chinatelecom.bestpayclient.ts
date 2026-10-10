import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    //赚金币
    {
      key: 0,
      name: '赚金币-开宝箱得金币',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="开宝箱得金币"] <<n [text="赚金币"]'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '赚金币-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['[text="赚金币"] >n [text^="+"] - Image'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '赚金币-看视频再得',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="赚金币"] >n [text^="+"] - Image +3 [text^="看视频再得"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
        },
      ],
    },
    //玩游戏
    {
      key: 3,
      name: '玩游戏-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView[vid="cll_back"] - WebView > WebView'],
          activityIds: ['com.cqyh.cqadsdk.activity.GameWebActivity'],
        },
      ],
    },
    //看视频
    {
      key: 10,
      name: '看视频-跳过↑',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          anyMatches: [
            '@[text^="我要"] <<n * -n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * -n * >n [text$="跳过"]',
            '@[text="立即前往"] <<n * -n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * -n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-跳过↓',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 2000,
          anyMatches: [
            '@[text^="我要"] <<n * +n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * +n * >n [text$="跳过"]',
            '@[text="去领奖励"] <<n * +n * >n [text$="跳过"]',
            '@[text="拿奖励"] <<n * +n * >n [text$="拿奖励"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过↓-体验',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[text="可提前20秒领奖"] -n @[text$="体验"] <<n * +n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-跳过-×-应用详情+立即下载',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-跳过-继续观看',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] <<n * +n * >n [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '看视频-长按-×', //长按无法实现
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView <<n * -n * >n [text="长按加速视频 获取奖励"]', //@[desc^="reward-playback-speed_playSpeed"] >n [text="长按加速视频 获取奖励"]
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '看视频-去领奖',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="去领奖"] <<n * -n * >n [text="svg%3e"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 17,
      name: '看视频-去领奖-奖励已领取',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '看视频-跳过-奖励已领取',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '看视频-礼包-领取奖励',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '@[text="跳过" || desc="close_button"] <<n * -n * >n [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 20,
      name: '看视频-跳过-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * -n * >n [text="反馈"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-继续观看',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] + [text="坚持退出"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '查看-反馈-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageView +n * >n [text="反馈"] +n * >n View',
            '@ImageView -n [text="反馈"] +n View',
          ],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '反馈-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Image <n * <n * -n * >n [text="反馈"] <<n [text="穿山甲"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '摇一摇或点击查看详情-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[id$="/ms_activity_sdk_interstitial_cacel"] +n * >n [text="摇一摇或点击查看详情"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //看视频-二级
    {
      key: 30,
      name: '看视频-跳转快应用-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@ImageView + ImageView +n [text="反馈"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-广告-<',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@RelativeLayout <<n * +n * >n TextView[text=null]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-广告-<+×1',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@[id$="/ksad_kwad_web_navi_back"] + [id$="/ksad_kwad_web_navi_close"]',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches: ['@[text="残忍离开"] +n [text="留下看看"]'],
        },
      ],
    },
    {
      key: 33,
      name: '看视频-广告-<+×2',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@ImageView[width=42 && height=42] <<n [id$="/ksad_js_reward_card"]',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          matches: ['@[text="残忍离开"] <n * +n [text="留下看看"]'],
        },
      ],
    },
    {
      key: 34,
      name: '看视频-网页无法打开',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: ['@[text="网页无法打开"] - [text="x+AAAAAElFTkSuQmCC"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //系统应用类
    {
      key: 40,
      name: '新版本上线啦！-下次再说',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="新版本上线啦！"][vid="bupdate_tv_title"] <n * + * >n [text="立即体验"][vid="bupdate_btn_confirm_update"] + @[text="下次再说"][vid="bupdate_tv_bottom_tip"][clickable=true]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '温馨提示-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="温馨提示"] +n * [text="取消"][clickable=true] + [text="去开启"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '开启消息通知-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="开启消息通知"][vid="msg_notification_open_title"] +n @[text="跳过"][vid="msg_notification_skip_btn"][clickable=true] + [text="立即开启"][vid="msg_notification_open_btn"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text~="跳过 [0-9]"][vid="tv_ad_skip"][clickable=true]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页-广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="iv_sky_close"][clickable=true]',
            '@[vid="iv_dialog_close_one"][clickable=true]',
            'AlertDialog >n @TextView[clickable=true] - View > TextView + Image',
          ],
          activityIds: [
            '.ui.MainActivity',
            'com.mpaas.mriver.integration.MriverActivityBase$Main',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[getChild(1).name$="Image"] + @TextView[clickable=true]'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 53,
      name: '广告-×-开启系统通知',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.094',
            top: 'height * 0.302',
          },
          matches: [
            'View > @View > View > [text="开启系统通知，优惠券活动不错过"] + [text="立即开启"]',
          ],
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$Main'],
        },
      ],
    },
    {
      key: 54,
      name: '广告-×-9.9元抢',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.5',
            top: 'height * 0.96',
          },
          matches: ['View > TextView + View > @View > View > Image + TextView'],
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$Main'],
        },
      ],
    },
    {
      key: 55,
      name: '广告-×-支付成功',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="ivVerticalClose"][clickable=true]',
            '@[vid="ivLandscapeClose"][clickable=true]',
          ],
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$Main'],
        },
      ],
    },
    {
      key: 56,
      name: '广告-×-手机充值-立即查看',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          position: {
            left: 'width * 0.5',
            top: 'height * 0.96',
          },
          matches: ['@[vid="ivLandscapeClose"][clickable=true]'],
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$Main'],
        },
      ],
    },
  ],
});
