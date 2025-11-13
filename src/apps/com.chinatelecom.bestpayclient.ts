import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 0,
      name: '赚金币-开宝箱得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="开宝箱得金币"] <<n [text="赚金币"]'],
          snapshotUrls: ['https://i.gkd.li/i/23451354'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            '@[text^="我要" || text$="体验" || text="立即前往" || text="再试一次"][width=711 && height=183 || width=327 && height=72 || width=339 && height=114] <<n * -n * >n [text$="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23450800', //我要加速-右上[width=711 && height=183]
            'https://i.gkd.li/i/23454789', //我要加速-左上[width=711 && height=183]
            'https://i.gkd.li/i/23451395', //我要直接领奖-右上[width=711 && height=183]
            'https://i.gkd.li/i/23455257', //返回继续体验-左上[width=711 && height=183]
            'https://i.gkd.li/i/23471191', //返回继续体验-右上[width=711 && height=183]
            'https://i.gkd.li/i/23471258', //我要直接领奖-右上[width=711 && height=183]
            'https://i.gkd.li/i/23471460', //我要加速领奖-右上[width=327 && height=72]
            'https://i.gkd.li/i/23471469', //返回继续体验-右上[width=327 && height=72]
            'https://i.gkd.li/i/23492681', //立即前往-右上[width=339 && height=114]
            'https://i.gkd.li/i/23493652', //我要加速-左下[width=711 && height=183]
            'https://i.gkd.li/i/23496451', //再试一次-右上[width=711 && height=183]
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
      key: 2,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            '@[text^="我要" || text$="体验" || text="拿奖励" || text="再试一次" || text="去领奖励"][width=819&& height=177 || width=711 && height=183 || width=732 && height=162 || width=180 && height=66] <<n * +n * >n [text$="跳过" || text$="拿奖励"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23471487', //我要免看本次广告[width=819&& height=177]
            'https://i.gkd.li/i/23493737', //去体验[width=711 && height=183]
            'https://i.gkd.li/i/23493789', //再试一次[width=711 && height=183]
            'https://i.gkd.li/i/23518146', //去体验[width=711 && height=183]
            'https://i.gkd.li/i/23518156', //返回继续体验[width=711 && height=183]
            'https://i.gkd.li/i/23475883', //拿奖励-拿奖励[width=732 && height=162]
            'https://i.gkd.li/i/23494451', //拿奖励[width=732 && height=162]
            'https://i.gkd.li/i/23518467', //再试一次[width=732 && height=162]
            'https://i.gkd.li/i/23520300', //去领奖励[width=180 && height=66]
          ],
          activityIds: [
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '看视频-礼包-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@[text="跳过" || desc="close_button"] <<n * -n * >n [desc="gift_box"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23476056', //跳过-
            'https://i.gkd.li/i/23476161', //跳过-继续体验
            'https://i.gkd.li/i/23476430', //×
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '看视频-跳过-立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23455109'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23451963',
            'https://i.gkd.li/i/23471408',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '看视频-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="去领奖"] <<n * -n * >n [text="svg%3e"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23494021',
            'https://i.gkd.li/i/23494040',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '看视频-去领奖-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23494046'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '看视频-恭喜您获得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '[text="赚金币"] >n [text^="+"] - Image +3 @[text^="看视频再得"]',
            '[text="赚金币"] >n [text^="+"] - Image',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23453300',
            'https://i.gkd.li/i/23471446',
            'https://i.gkd.li/i/23496647',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@LinearLayout <<n * -n * >n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23493264'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 500,
          matches: ['ImageView + @ImageView +n [text="反馈"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23496919',
            'https://i.gkd.li/i/23496926',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity',
            'null',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '玩游戏-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@ImageView[vid="cll_back"] - WebView > WebView'],
          snapshotUrls: [
            'https://i.gkd.li/i/23497142',
            'https://i.gkd.li/i/23497241',
          ],
          activityIds: ['com.cqyh.cqadsdk.activity.GameWebActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-跳过-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@[text="继续观看"] <<n * +n * >n [text="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/i/23497387'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-跳过-长按加速',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'longClickCenter',
          actionDelay: 2000,
          matches: [
            '[text="长按加速视频 获取奖励"] <n * - @ImageView <<n * + * >n [text="跳过"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23497570',
            'https://i.gkd.li/i/23498065',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-广告-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: ['@RelativeLayout <<n * +n * >n TextView[text=null]'],
          snapshotUrls: ['https://i.gkd.li/i/23497953'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '看视频-广告-<+×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[id$="/ksad_kwad_web_navi_back"] + [id$="/ksad_kwad_web_navi_close"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23498284'],
        },
        {
          preKeys: 0,
          key: 1,
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@[id$="/ksad_web_exit_intercept_negative_btn"] <n * -n [id$="/ksad_exit_intercept_content"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23498460'],
        },
      ],
    },
  ],
});
