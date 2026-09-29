import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '提现-提现至支付宝-20元',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点明日开抢"&&getChild(1).text="08:00:00"] -n * > @[text="我的红包(元)"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥20"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥20"] +n @TextView[clickable=true] + [text="推荐商品"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n * @[text="获取验证码"][clickable=true]',
          ],
        },
        {
          key: 4,
          matches: ['[text="可提现金额"] + @[text="立即提现"][clickable=true]'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: ['[text="已提交申请"] +n @[text="完成"][clickable=true]'],
        },
      ],
    },
    {
      key: 1,
      name: '提现-提现至支付宝-10元',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点明日开抢"&&getChild(1).text="08:00:00"] -n * > @[text="我的红包(元)"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥10"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥10"] +n @TextView[clickable=true] + [text="推荐商品"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n * @[text="获取验证码"][clickable=true]',
          ],
        },
        {
          key: 4,
          matches: ['[text="可提现金额"] + @[text="立即提现"][clickable=true]'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: ['[text="已提交申请"] +n @[text="完成"][clickable=true]'],
        },
      ],
    },
    {
      key: 2,
      name: '提现-提现至支付宝-3元',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点明日开抢"&&getChild(1).text="08:00:00"] -n * > @[text="我的红包(元)"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥3"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n @[text="¥3"] +n @TextView[clickable=true] + [text="推荐商品"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[getChild(1).getChild(1).text="提现"] +n * @[text="获取验证码"][clickable=true]',
          ],
        },
        {
          key: 4,
          matches: ['[text="可提现金额"] + @[text="立即提现"][clickable=true]'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: ['[text="已提交申请"] +n @[text="完成"][clickable=true]'],
        },
      ],
    },
    {
      key: 3,
      name: '兑换商城-兑换-10元现金红包',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点即将开抢"&&getChild(1).text="00:00:00"] +n * @View[clickable=true] > [text="10元现金红包"] +n [text=" 兑换"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(0).text="2000金币"] + [text="立即兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="10元现金红包"] + @View[clickable=true] > [text="兑换并使用"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="确认兑换"] +n View >n @View[clickable=true] > [text="发送验证码"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '兑换商城-兑换-1元现金红包',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点即将开抢"&&getChild(1).text="00:00:00"] +n * @View[clickable=true] > [text="1元现金红包"] +n [text=" 兑换"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(0).text="200金币"] + [text="立即兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="1元现金红包"] + @View[clickable=true] > [text="兑换并使用"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="确认兑换"] +n View >n @View[clickable=true] > [text="发送验证码"]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '兑换商城-兑换-5元京东卡-999金币',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="08点即将开抢"&&getChild(1).text="00:00:00"] +n * @[id="recoItem1721908159"][clickable=true] > [text="8点开抢"] + [text="5元京东卡"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(0).text="999金币"] + [text="立即兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="5元京东卡"] + @View[clickable=true] > [text="兑换并使用"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="确认兑换"] +n View >n @View[clickable=true] > [text="发送验证码"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '兑换商城-兑换-5元京东卡-99金币',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[getChild(0).text="08点即将开抢"&&getChild(1).text="00:00:00"] +n * @View[clickable=true] > [text="5元京东卡"] +n [text=" 兑换"]',
            '[getChild(0).text="08点即将开抢"&&getChild(1).text="00:00:00"] +n * @[id="recoItem1785406918"][clickable=true] > [text="会员可兑"] + [text="5元京东卡"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(0).text="99金币"] + [text="立即兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="5元京东卡"] + @View[clickable=true] > [text="兑换并使用"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="确认兑换"] +n View >n @View[clickable=true] > [text="发送验证码"]',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '兑换商城-兑换-5元京东卡-10金币',
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[getChild(0).text="18点即将开抢"&&getChild(1).text="00:00:00"] +n * @View[clickable=true] > [text="5元京东卡"] +n [text=" 兑换"]',
            '[getChild(0).text="18点即将开抢"&&getChild(1).text="00:00:00"] +n * @[id="recoItem1721907899"][clickable=true] > [text="18点秒杀"] + [text="5元京东卡"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(0).text="10金币"] + [text="立即兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="5元京东卡"] + @View[clickable=true] > [text="兑换并使用"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="确认兑换"] +n View >n @View[clickable=true] > [text="发送验证码"]',
          ],
        },
      ],
    },
    //看视频-com.baidu.mobads.sdk.api.MobRewardVideoActivity
    {
      key: 19,
      name: '看视频-跳过-去体验*秒可立即领奖bms',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="跳过"] +n * @RelativeLayout[clickable=true] > [text="我要加速领奖"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="跳过"][clickable=true] - RelativeLayout > RelativeLayout > [text="已领取奖励"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@ImageView[clickable=true] - RelativeLayout > RelativeLayout > [text="已领取奖励"]',
          ],
        },
      ],
    },
    //看视频-com.byazt.gd.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.byazt.gd.Stub_Standard_Portrait_Activity',
        'com.byazt.gd.Stub_Standard_Activity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text~="去体验|立即前往|立即前往加速|我要加速|我要立即领奖|我要直接拿奖励"] <<n * [text~="去体验[0-9]+秒可立即领奖"] +n [text="$跳过"]',
            '@[text~="点击查看|立即领奖|我要加速领奖|我要直接拿奖励|恭喜获得神秘惊喜"] <<n * [text~="[0-9]+s"] + [text="｜跳过"]',
            '@[text~="去体验[0-9]+秒立即领奖"] <<n * [text~="[0-9]s"] + [text="｜跳过"]',
            '@[text~="我要立即领奖|我要减广告时长"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          anyMatches: [
            '[text="已领取"] >n @[text="svg+xml;base64"]',
            '@ImageView[clickable=true] < [getChild(1).text="应用详情"] +n [text="立即下载"]',
            'LinearLayout > FrameLayout - RelativeLayout > @TextView[clickable=true] + [text="应用权限"]',
            'LinearLayout > FrameLayout + FrameLayout > FrameLayout > WebView - FrameLayout > TextView + @ImageView[clickable=true] + View',
            'LinearLayout > FrameLayout - LinearLayout > RelativeLayout > ImageView + @ImageView[clickable=true] + TextView + [text="反馈"]', //二级广告页
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 15000,
          matches: ['View - View - LinearLayout >n WebView > WebView > View'],
        },
        {
          key: 3,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[getChild(0).text="3ca6ab446dec1c57"] + [getChild(0).text="恭喜获得优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
            '@[getChild(0).text="恭喜获得奖励"] + [getChild(1).getChild(1).text="以实际活动为准"]', //惊喜福利-限时优惠权益
            '@TextView - [text="恭喜获得限时奖励"] < * + [getChild(1).getChild(1).text="以实际活动为准"]', //限时优惠权益
          ],
        },
        {
          key: 4,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > @[id="_scrollView"][childCount>1]',
          ],
        },
        {
          key: 5,
          matches: [
            '[getChild(0).text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > [id="app"] > [id="_scrollView"][childCount=1] >n @TextView',
          ],
        },
        {
          key: 6,
          anyMatches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
        },
        {
          key: 7,
          excludeMatches: [
            '[text~="再逛[0-9]+秒后可领奖"] - [text="svg%3e"]',
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          actionDelay: 1000,
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-下滑-已发放-*秒',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="icon-close.e3e3211b"] -n [getChild(0).text="限时领取"]', //恭喜获得优惠券
            '@[getChild(0).text="1301a2d542c5e480"] < * + [text="倒计时后将放弃优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励-恭喜获得*元红包
          ],
        },
        {
          key: 1,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > @[id="app"]',
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@[text="svg%3e"] <<n * +n * [text="已发放"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="已发放"]',
            '[id="root"] > [id="app"] >n @[text="svg%3e"] +n [text="搜索"]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-礼包-跳过-*s后可领取奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即体"] <<n * - * [text="跳过"] < * -n * ImageView + [text~="[0-9]+s后可领取奖励"]',
            //'@[text="立即体验"] <<n * - * [text="跳过"] < * -n * ImageView + [text~="[0-9]+s后可领取奖励"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            'ImageView < @LinearLayout[clickable=true] -n LinearLayout > [text="领取成功"]',
            'TextView[text="跳过"] < @LinearLayout[clickable=true] -n LinearLayout > [text="领取成功"]',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-跳过-*秒',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text~="试玩[0-9]+秒获得奖励|看[0-9]+秒/安装应用立即领奖"] +n @[text="跳过"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[desc="button_container"] > [text="继续试玩"] + @[text="残忍离开"][clickable=true]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 40,
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
      key: 50,
      name: '看视频-礼包-跳过',
      matchRoot: true,
      matchDelay: 1000,
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
    //看视频-com.qq.e.ads.PortraitADActivity-微信
    {
      key: 60,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text~=".*[0-9]+ 秒.*"] + [text="提前拿奖励"] + * @[text*="微信"][index=parent.childCount.minus(1)]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: ['@ImageView < FrameLayout + FrameLayout >2 ImageView'], //二级广告页
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            'ImageView < @FrameLayout + * [text*="微信"][index=parent.childCount.minus(1)]', //恭喜获得奖励
          ],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-微信-阅读小说 可获得奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="上滑继续阅读"] <n * -n * [text="阅读小说"] + [text="可获得奖励"]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: [
            'LinearLayout > FrameLayout + FrameLayout > FrameLayout > WebView - FrameLayout > TextView + @ImageView[clickable=true] + View', //二级广告页
          ],
        },
        {
          key: 2,
          matches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜已经获得奖励！"]',
          ],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="放弃福利" || text="我要更快拿奖"] < @FrameLayout <n * +n * [text^="奖励将于"]',
          ],
        },
        {
          key: 1,
          actionDelay: 11000,
          matches: [
            '@ImageView - TextView <<n * [id="BlockApp_unique"]',
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]', //二级广告页
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            'ImageView < FrameLayout < @FrameLayout - [text="恭喜获得奖励"]',
            'ImageView < FrameLayout < @FrameLayout - * [text="恭喜获得奖励"]',
            'ImageView < FrameLayout < @FrameLayout < LinearLayout <n * -n * > [text*="已完成浏览"]',
          ],
        },
        {
          key: 3,
          matches: [
            'ImageView < FrameLayout < @FrameLayout + LinearLayout > FrameLayout > [text="查看详情"]',
          ],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-浏览页面*秒后|点击广告，即可获得奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="点击广告拿奖励"] <<n * - * [text="点击广告，即可获得奖励"]',
          ],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            'RelativeLayout > LinearLayout > @ImageView[clickable=true] - * [text="恭喜获得奖励！"]',
          ],
        },
      ],
    },
    {
      key: 64,
      name: '看视频-打开/完成App，即可获得奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(0).text$="即可获得奖励"] - * @[text*="第三方应用"][index=parent.childCount.minus(1)]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@ImageView < FrameLayout <n * < * + * [text="恭喜获得奖励"]',
            '@ImageView < FrameLayout < * + * > FrameLayout > [text="恭喜获得奖励"]', //免
            '@ImageView < FrameLayout - FrameLayout - FrameLayout > [text="恭喜获得奖励"]', //免
            '@ImageView < FrameLayout < FrameLayout < LinearLayout <n * -n * [text="已完成浏览15秒，提前获得奖励"]',
          ],
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
          matches: ['@TextView[clickable=true] -2 [text="会员等级体系新升级"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //任务中心-.ui.cloudp2p.RichMediaActivity
    //25.09.28-25.12.26 任务中心 90天/轮
    //每日签到
    {
      key: 200,
      name: '任务中心-每日签到',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.ui.cloudp2p.RichMediaActivity',
        '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
      ],
      rules: [
        {
          key: 0,
          name: '看视频积分翻倍',
          matches: [
            'ImageButton[text="c"][clickable=true] < View + Image +n @ImageButton[clickable=true]',
          ],
        },
        {
          key: 1,
          name: '今日积分已翻倍',
          matches: [
            '@ImageButton[text="c"][clickable=true] < View + Image +n ImageButton[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 201,
      name: '任务中心-开宝箱',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.ui.cloudp2p.RichMediaActivity',
        '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
          ],
        },
        {
          key: 1,
          actionDelay: 1000,
          excludeMatches: [
            'ImageButton[text="c"][clickable=true] < View + Image +n ImageButton[clickable=true]',
          ],
          matches: [
            '[id="task-system-main"] >n @View[clickable=true] > [text~="[0-9]+:[0-9]+后开启点我减[0-9]+分钟"]',
          ],
        },
      ],
    },
    //积分领好礼
    {
      key: 207,
      name: '积分领好礼-领取',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.ui.cloudp2p.RichMediaActivity',
        '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(1).text="金币兑换 "] +n * @[text="领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="reward-pop-title"] + @TextView[clickable=true] +n TextView[index=parent.childCount.minus(1)]', //恭喜获得
          ],
        },
      ],
    },
    //做任务赚积分
    //每日打卡领好礼
    {
      key: 208,
      name: '每日打卡领好礼-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="每日打卡领好礼"] +n View >n TextView + @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    //成长值任务
    {
      key: 209,
      name: '成长值任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > TextView[clickable=true] +n [text="否"] + @[text="是"][clickable=true]', //每日答题
            'View > TextView[clickable=true] +n @[text~="我知道了|开心收下"][clickable=true]',
            '[getChild(0).getChild(0).text="任务中心"] +n TextView +8 @[text="领取"][clickable=true]',
          ],
          matches: [
            '[getChild(0).getChild(0).text="任务中心"] +n [text~="去看看.*|每日答题|做广告任务"] +8 @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View > View[clickable=true] > TextView + @ImageButton[clickable=true]', //领取奖励-去看看会员福利日-去看看开学季特惠
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            'View > TextView +n [text="否"] + @[text="是"][clickable=true]', //每日答题
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            'View > @TextView[clickable=true][clickable=true] +n [text~="我知道了|开心收下"]',
          ],
        },
        {
          key: 4,
          excludeMatches: [
            'View > @TextView[clickable=true][clickable=true] +n [text~="我知道了|开心收下"]',
          ],
          matches: [
            '[getChild(0).getChild(0).text="任务中心"] + TextView +8 @[text="领取"][clickable=true]',
          ],
        },
        {
          key: 5,
          excludeMatches: [
            '[getChild(0).getChild(0).text="任务中心"] +n TextView +8 @[text~="领取|去完成"][clickable=true]',
          ],
          matches: [
            '[text~="领取[0-9]+天累计签到奖励"] + View > View > View > @[text="点击领取"][clickable=true]',
          ],
        },
      ],
    },
    //日常任务
    {
      key: 210,
      name: '日常任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.ui.cloudp2p.RichMediaActivity',
        '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
            '[id="task-system-main"] >n @View[clickable=true] > [text~="[0-9]+:[0-9]+后开启点我减[0-9]+分钟"]',
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="日常任务"] +n TextView[text!~="观看.*|邀请.*"] +5 @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            'View > View[getChild(0).text="task-close"] + @[text="lingqujiangli"][clickable=true]', //集勋章抽金条手机-去翻故事卡领大奖
            'View > View[clickable=true] > TextView + @ImageButton[clickable=true]', //领取奖励-去看看会员福利日-去看看开学季特惠-参与活动送万元相机-领取徐涛独家资料
            'View > View > @[text="lingqujiangli"][clickable=true] + TextView + ImageButton', //领取奖励-免费领取网盘SVIP
            'View > View > @[text="done"][clickable=true] + [text=" "] + [text="2bd7c5199a3f9703e3ae80849"]', //会员日-任务已完成 点击去领奖
            'View > View[clickable=true] > @View[getChild(0).text="wenzihou"][clickable=true] + [desc="close"]', //去寻道砍树3次
            'View > [getChild(0).text="task-close"] + @[getChild(0).text="lingqujiangli"][clickable=true]', //奇妙赏
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '体验一刻相册',
          matches: [
            '@[vid="left_button"][clickable=true] +2 [text="福利来袭X-永久无限空间限时抢"][vid="middle_title_text"]',
          ],
        },
        {
          key: 3,
          matches: [
            '@[vid="left_button"] <<n * +n * [text="恭喜获得"]', //小程序点图文领奖-小程序点图文-小程序浏览图文-点2次图文领奖-小程序点2次图文
          ],
        },
        {
          key: 4,
          actionDelay: 2000,
          matches: [
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [210],
      key: 211,
      name: '日常任务-去玩游戏合成3次',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          name: '允许授权',
          matches: [
            '@[text="允许授权"][clickable=true] -n TextView < * <n * <n * < * < [vid="content_webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '已完成去领奖',
          actionDelay: 30000,
          position: {
            left: 'width * 0.91',
            top: 'height * 0.86',
          },
          matches: [
            'TextView[clickable=true] - TextView <n View - @[id="game"] < * < * < * < [vid="content_webview"]',
          ],
        },
      ],
    },
    {
      key: 212,
      name: '日常任务-观看广告视频',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          excludeMatches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
            '[id="task-system-main"] >n @View[clickable=true] > [text~="[0-9]+:[0-9]+后开启点我减[0-9]+分钟"]',
            'TextView + TextView +5 @[text="领取"][clickable=true]',
            '[text="日常任务"] +n TextView[text!~="观看.*|邀请.*"] +5 @[text="去完成"][clickable=true]',
            '[text="最新AI功能"] +n TextView[text!~="去领取AI修图券"] +5 @[text="去完成"][clickable=true]',
            '[text="功能任务"] + TextView +5 @[text="去完成"][clickable=true]',
          ],
          actionDelay: 1000,
          matches: [
            '[text="日常任务"] + [text~="观看.*"] +5 @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    //最新AI功能
    {
      key: 220,
      name: '最新AI功能-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
            '[text="日常任务"] +n TextView[text!~="观看.*|邀请.*"] +5 @[text="去完成"][clickable=true]',
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
          matches: [
            '[text="最新AI功能"] +n TextView[text!~="去领取AI修图券"] +5 @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 221,
      name: '最新AI功能-体验AI学习服务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          name: '领取奖励',
          matches: [
            '@[vid="layout_drag"][clickable=true] > [vid="layout_content"] > [vid="iv_close"] + [vid="gif_lottie_view"] + [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 222,
      name: '最新AI功能-云一朵文件智能整理',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@[vid="view_anchor"] -n [text="点击勾选文件"][vid="tv_tip"] - [vid="iv_close"] < ViewGroup < FrameLayout - [vid="fl_main_container"] < [id="android:id/content"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'clickCenter',
          matches: [
            '@[vid="view_anchor"] - [vid="iv_close"] -n [text="点击智能整理"][vid="tv_tip"] < ViewGroup < FrameLayout - [vid="fl_main_container"] < [id="android:id/content"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 223,
      name: '最新AI功能-体验AI笔记',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[vid="recent_pager"] <<n * +n * [text="选视频生成ai笔记"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] -n * @RelativeLayout[clickable=true] > [vid="cover"]',
          ],
          activityIds: ['.servicepage.video.ui.VideoServiceActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(2).text="选视频生成ai笔记"] - ImageView -n * @LinearLayout[clickable=true] > RelativeLayout > [text="笔记"][vid="view_video_content_child_tab_item_layout_text"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 224,
      name: '最新AI功能-浏览试卷中心',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="点击查看试卷"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * [text="搜索试卷"] +n [index=parent.childCount.minus(1)] > @View[index=0][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '任务已完成      点击领奖',
          matches: [
            '@[vid="layout_drag"][clickable=true] > [vid="layout_content"] > [vid="iv_close"] + [vid="gif_lottie_view"] + [text="任务已完成      点击领奖"][vid="tv_title"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 225,
      name: '最新AI功能-体验AI拍一拍|去水印|变清晰|消除|去手写',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.ocr.OCRTakePhotoActivity',
        '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
      ],
      rules: [
        {
          preKeys: [0, 1],
          key: 1,
          anyMatches: [
            '[text="立即拍摄"][vid="button_online_large_sample_take_shot"][focusable=true]',
            '[vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * @[vid="take_ai_photo_button"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          excludeMatches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          actionDelay: 2000,
          matches: [
            '@ImageView[clickable=true] + [desc="自动消除"] + [desc="手动消除"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '@[desc="确认退出"][clickable=true] - [desc="再考虑下"] < * - [desc="提示"]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          matches: ['@ImageView[clickable=true] +2 [desc="保存"]'],
        },
        {
          preKeys: [5, 6],
          key: 7,
          action: 'back',
          matches: [
            '@[vid="ocr_bottom_image"] < [vid="bottom_image_container"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 226,
      name: '最新AI功能-体验AI照相馆',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="点击写真模板"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * @View[text=""][clickable=true] > [text="dyr-dt"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 227,
      name: '最新AI功能-去体验错题收集',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="拍摄错题并录入"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * @[text="相册导入"][vid="question_collect_gallery"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          anyMatches: [
            '[text="4月25日"][vid="text_view_date"] < LinearLayout + @ViewGroup[clickable=true] <<n * + * [text="确定（0/99）"][vid="btn_confirm"]',
            '[text="2025年12月27日"][vid="text_view_date"] < LinearLayout + @ViewGroup[clickable=true] <<n * + * [text="确定（0/99）"][vid="btn_confirm"]',
            '[text="已选：0/99"][vid="select_count_text"] < [vid="bottom_bar"] - [vid="fragment_container"] >n [vid="grid_item_layout"][index=1] >n @[vid="imageview_checkbox"]',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          anyMatches: [
            '@[text="确定（1/99）"][vid="btn_confirm"][clickable=true]',
            '@[text="完成"][vid="done_button"] - [text="已选：1/99"][vid="select_count_text"]',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 2000,
          matches: [
            '[text="拍摄错题并录入"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * View + ImageView + @ImageView[clickable=true] + ImageView',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '[text="拍摄错题并录入"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * [desc="已选择 1 道题目"] +n @[desc="录入错题"][clickable=true]',
          ],
          activityIds: [
            '.ui.localfile.selectfile.LocalImageSelectActivity',
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          matches: [
            '[text="拍摄错题并录入"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * @[text="全部保存"][clickable=true]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
        {
          preKeys: [5, 6],
          key: 7,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
      ],
    },
    {
      scopeKeys: [220],
      key: 228,
      name: '最新AI功能-去体验拍题解题',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="拍摄题目并解题"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * @[vid="take_photo_button"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="拍摄题目并解题"][vid="tv_title"] <n [vid="layout_content"] <n [vid="layout_drag"] - * [desc="每次只框一题，识别更准确"] +2 @ImageView[clickable=true]',
          ],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
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
      name: '功能任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
            '[text="最新AI功能"] +n TextView[text!~="去领取AI修图券"] +5 @[text="去完成"][clickable=true]',
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="功能任务"] + TextView +5 @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '浏览书城小说30s',
          matches: [
            'ViewGroup > [vid="iv_close"] + ViewGroup > @[vid="gif_lottie_view"][clickable=true] +n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.bdreader.ui.view.NovelMainActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          name: '去逛逛游戏频道',
          matches: [
            '@TextView[text=""][clickable=true] - TextView[clickable=true] < View -n * [text="游戏中心"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          name: '浏览短剧30s',
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.playerlet.ui.ShortPlayServiceActivity'],
        },
        {
          key: 4,
          actionDelay: 2000,
          matches: [
            'TextView + TextView +5 @[text="领取"][clickable=true]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      scopeKeys: [230],
      key: 231,
      name: '功能任务-去刷一刷首页',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.ui.MainActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionDelay: 2000,
          matches: [
            '[text="浏览15s feed"] <n ViewGroup - [vid="iv_close"] < ViewGroup <n FrameLayout - * @[vid="home25ai_content"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [230],
      key: 232,
      name: '功能任务-去体验云打印',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.ui.cloudp2p.RichMediaActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['@[text="上传中..."] - View < View < View'],
          matches: [
            '[text="上传任意文件"] - TextView < View -n * @View[clickable=true] > View > [text="上传照片"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="上传任意文件"] - TextView < View -n * @View[clickable=true] > [text="网盘相册"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="上传任意文件"] - TextView < View -n * [text="normal.e47ec071"] < View < @View[clickable=true] - * [text="2026年06月28日 星期六"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="上传任意文件"] - TextView < View -n * @[text="立即上传(1/99)"][clickable=true]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          actionDelay: 2000,
          matches: [
            '[text="上传任意文件"] - TextView < View -n * @[text="确定"][clickable=true]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          matches: [
            '@View[text=""][clickable=true] > TextView[clickable=true] + [text="任务完成领奖"]',
          ],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '温馨提示-同意',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="温馨提示"][vid="txt_confirmdialog_title"] < * +n [vid="dialog_footer"] > [text="不同意并退出"][vid="dialog_button_cancel"] + @[text="同意"][vid="dialog_button_confirm"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 401,
      name: '开启通知-暂不开启',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="dialog_close"] +n [vid="dialog_footer"] > @[text="暂不开启"][vid="dialog_button_cancel"][clickable=true] + [text="去开启"][vid="dialog_button_confirm"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 402,
      name: '开启备份-暂不开启',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.ui.MainActivity', '.ui.NewQuickSettingsActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="暂不开启"][vid="not_open"][clickable=true] - [text="开启安全备份"][vid="btn_text"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="暂不开启"][vid="dialog_button_cancel"][clickable=true] -n [text="是否开启照片自动备份？"][vid="content_info"]',
          ],
        },
      ],
    },
    {
      key: 403,
      name: '百度网盘更新啦-下次再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="下次再说"][vid="left_btn"][clickable=true] < [vid="bottom_layout"] -n [text="百度网盘更新啦"][vid="title_tv"]',
          ],
          activityIds: [
            '.ui.MainActivity',
            '.ui.cloudp2p.RichMediaActivity',
            '.aigc.ui.activity.AigcChatActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      key: 404,
      name: '喜欢“百度网盘”吗？-以后再说',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="以后再说"][vid="tv_left_btn"][clickable=true] -n [text="喜欢“百度网盘”吗？"][vid="tv_title"]',
          ],
          activityIds: [
            '.ui.MainActivity',
            '.ui.cloudp2p.RichMediaActivity',
            '.aigc.ui.activity.AigcChatActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
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
            '@[text="跳过"] + [text~="[0-9]+"]',
            '@FrameLayout > View + [text="跳过"]',
            '@[text~="跳过 [0-9]+"][clickable=true]',
            '@[text~="跳过 [0-9]+"][vid="countdown"]',
            '@[text~="[0-9]+ \\\\| 跳过"][clickable=true]',
            '[vid="fl_ad_container"] >n @View[clickable=true]',
            '@[vid="ms_skipView"] < [vid="ms_skipView_container"]',
            '@[text~="跳过 [0-9]+"][vid="tv_skip"][clickable=true]',
            '@[text="跳过"] <n FrameLayout < [vid="content"] < FrameLayout < LinearLayout + View',
          ],
          activityIds: ['.ui.MainActivity', '.advertise.ui.SplashAdActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="iv_close"] + [vid="cl_content"]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
  ],
});
