import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //21.12.22开始 抖音月付·月付金
    {
      key: 10,
      name: '月付金-签到可得',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="签到可得"] <n @View[clickable=true] < View < View <n View < [id="with-scroll-content"] < [id="JS_PageScroller"] <n [id="Page_layout_scroll"] < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text="签到成功 月付金"] +n @ImageButton[clickable=true]'],
        },
      ],
    },
    {
      key: 11,
      name: '月付金-赚月付金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] <n View <n View < View < View <n View <n View < [id="with-scroll-content"] < [id="JS_PageScroller"] <n [id="Page_layout_scroll"] < [id="root"]',
          ],
          excludeMatches: [
            '[text="签到可得"] <n @View[clickable=true] < View < View <n View < [id="with-scroll-content"] < [id="JS_PageScroller"] <n [id="Page_layout_scroll"] < [id="root"]',
            '[text="签到成功 月付金"] +n @ImageButton[clickable=true]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          name: '浏览难不倒你吧小游戏得月付金',
          actionDelay: 15000,
          matches: [
            '@[desc="关闭"] <n ViewGroup - FrameLayout > [desc="游戏中心"]',
          ],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '退出游戏',
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '浏览钱包页面',
          action: 'back',
          actionDelay: 15000,
          matches: [
            '[id*="plugin"] <n FrameLayout < FrameLayout - * @ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 4,
          name: '浏览天天开宝箱活动',
          actionDelay: 5000,
          action: 'back',
          matches: [
            'FrameLayout > FrameLayout > ViewGroup > FrameLayout > ImageView + TextView',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          name: '月付金-浏览好物竞拍得月付金',
          action: 'back',
          actionDelay: 15000,
          matches: [
            'FrameLayout < [id*="plugin"] - FrameLayout < FrameLayout < FrameLayout',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    //26.07.20-26.08.20 理财-发财金
    {
      key: 20,
      name: '理财-弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[width=height] - ImageView < ViewGroup - ScrollView < ViewGroup <n FrameLayout < FrameLayout',
          ],
          activityIds: [
            '.bullet.ui.BulletContainerActivity',
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity',
            'com.bytedance.kmp.open_platform.kmp_miniapp_business_impl.process.container.MiniAppHostStackActivity',
            'com.bytedance.kmp.open_platform.kmp_miniapp_business_impl.process.container.MiniAppChildProcessMultiInsActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '理财-发财金-立即签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        'com.tt.miniapphost.placeholder.MiniAppHostStackActivity',
        'com.bytedance.kmp.open_platform.kmp_miniapp_business_impl.process.container.MiniAppHostStackActivity',
        'com.bytedance.kmp.open_platform.kmp_miniapp_business_impl.process.container.MiniAppChildProcessMultiInsActivity',
      ],
      rules: [
        {
          key: 0,
          name: '立即签到00',
          position: {
            left: 'width * 0.85',
            top: 'height * 0.25',
          },
          actionMaximum: 1,
          matches: [
            'ImageView[width=height] < @ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView <n ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView',
          ],
          excludeMatches: [
            'ViewGroup < @ViewGroup < ViewGroup <n ViewGroup < ViewGroup - ScrollView',
            'ImageView[width=height] -n ImageView < @ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView',
            'ImageView[height<0] <n @ViewGroup < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout',
            '[id*="cj_plugin"] <n FrameLayout < FrameLayout - * [id="android:id/content"]', //*秒后获得*发财金
          ],
        },
        {
          key: 1,
          name: '立即签到01',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ViewGroup < @ViewGroup < ViewGroup <n ViewGroup < ViewGroup - ScrollView',
          ],
        },
        {
          key: 2,
          name: '签到领00',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          actionDelay: 2000,
          matches: [
            'ImageView[width=height] -n ImageView < @ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView',
          ],
          excludeMatches: [
            '@ImageView[width=height] - ImageView < ViewGroup - ScrollView < ViewGroup - ScrollView < FrameLayout < FrameLayout',
          ],
        },
        {
          key: 3,
          name: '签到领01',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ImageView[height<0] <n @ViewGroup < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout',
          ],
        },
        {
          key: 4,
          name: '立即签到',
          position: {
            left: 'width * 0',
            top: 'height * 0',
          },
          actionMaximum: 1,
          matches: [
            '@ImageView[width=height] -n ImageView - ViewGroup < LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'ViewGroup <n @ViewGroup < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
            'ImageView[width<=0] < @ViewGroup -n ImageView - ViewGroup < LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
        {
          key: 5,
          name: '签到成功 恭喜获得-开心收下',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          actionDelay: 2000,
          matches: [
            'ViewGroup <n @ViewGroup < ViewGroup <n ViewGroup - ScrollView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '理财-*发财金已到账',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '逛商城福利-×',
          matches: [
            '@ImageView[width=height] < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          key: 1,
          name: '逛商城福利/浏览行情信息',
          action: 'back',
          matches: [
            'ImageView < FrameLayout - [id*="cj_plugin"] < FrameLayout < FrameLayout - LinearLayout >n [id="android:id/content"]',
          ],
          excludeMatches: [
            '@ImageView < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            '.live.LiveDummyActivity',
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity',
            'com.bytedance.kmp.open_platform.kmp_miniapp_business_impl.process.container.MiniAppHostStackActivity',
          ],
        },
        {
          key: 2,
          name: '浏览投资日历',
          matches: [
            'ImageView < FrameLayout - [id*="cj_plugin"] < FrameLayout < FrameLayout - * @[desc="返回按钮"] <n View < View < [id="app"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 3,
          name: '浏览投资日历-一键添加自选-×',
          matches: [
            '[text="一键添加自选"] <n View -n @[desc="关闭"][clickable=true] < View <n View -n [id="app"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 4,
          name: '任务完成 恭喜获得-开心收下',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ImageView[height>0] < @ViewGroup < ViewGroup - ViewGroup < ViewGroup - ScrollView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '理财-抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          name: '抽发财金',
          matches: [
            '@ViewGroup[childCount=0] - ImageView <n LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '恭喜抽中奖品',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ImageView[height>0] < @ViewGroup < ViewGroup - ViewGroup < ViewGroup - ScrollView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //车主服务-车主省钱-领省钱豆兑现金
    {
      key: 30,
      name: '省钱豆-每日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(1).text="连续签到领好礼"] + View > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          key: 1,
          name: '弹窗广告-×',
          anyMatches: [
            '@Button[desc="关闭弹窗"][clickable=true] <n View < View <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
            '@Button[desc="关闭弹窗"][clickable=true] <n View < View <n View <n View < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '省钱豆-新手引导任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
        '.search.activity.SearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text="搜索「车险」进入频道"] < View <n View <n View <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ViewGroup - ViewGroup - @ViewGroup - ViewGroup - [desc="12期免息按钮"] < FrameLayout - FrameLayout[width=height] < FrameLayout < LinearLayout < LinearLayout < RecyclerView',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="关闭页面"][clickable=true] <n View <n [id="nav-bar"] < [id="root"] < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] < FrameLayout <n RelativeLayout <n RelativeLayout < LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          matches: [
            '@[text="领取奖励"][clickable=true] -n [text="完成"] < View <n View <n View <n View < View < [id="root"]',
          ],
        },
      ],
    },
    //浏览赚*省钱豆
    {
      scopeKeys: [501],
      key: 32,
      name: '省钱豆-查看账单',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="查看账单"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View < [id="root"]',
            '[text="查看账单"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          matches: [
            '@[desc="关闭"][clickable=true] <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 501],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回 按钮"] < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[desc="残忍离开"] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="残忍离开"] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '省钱豆-查电费/看电费账单',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="查电费"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
            '[text="看电费账单"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View < [id="root"]',
            '[text="看电费账单"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          anyMatches: [
            '@[desc="关闭"][clickable=true] <n View < View < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
            '@[desc="关闭"][clickable=true] <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] < View < [id="root"] < View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '省钱豆-逛理财福利',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.live.LiveDummyActivity',
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="逛理财福利"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View < [id="root"]',
            '[text="逛理财福利"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            'Image < @View[clickable=true] < View < [id="JS_PageHeader"] < [id="JS_PageLayout"] < [id="root"] < View < WebView < WebView < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="我知道了"][clickable=true] <n View <n View <n View < WebView < WebView < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          matches: [
            '@[text="离开"][clickable=true] <n View < AlertDialog < View <n View < WebView < WebView < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '省钱豆-逛充值中心',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="逛充值中心"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View < [id="root"]',
            '[text="逛充值中心"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@ImageView <n ViewGroup < ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="我"][desc="我，按钮"] < RelativeLayout < RelativeLayout < RelativeLayout <n FrameLayout < @FrameLayout[clickable=true] <n [vid="root_view"]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="我的钱包"][clickable=true] <n View < View < ComposeView < HorizontalScrollView < ViewGroup <n LinearLayout <n ViewGroup < [vid="scroll_layout"]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '@[desc="保险  按钮"] <n ViewGroup < ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          anyMatches: [
            '@[text^="省钱豆"][clickable=true] <n View < [id="root"] < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
            '@[text^="省钱豆"][clickable=true] <n View < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 36,
      name: '省钱豆-保险商城',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="保险商城"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).text="开心收下"] -n View > View > @View[clickable=true] > Image',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭页面"][clickable=true] <n View <n [id="nav-bar"] < View < [id="root"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          action: 'back',
          matches: [
            '@ViewGroup < ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 4,
          action: 'back',
          matches: [
            '@ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 37,
      name: '省钱豆-信用卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="信用卡"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          anyMatches: [
            '@[desc="关闭"][clickable=true] <n View < View < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
            '@[desc="关闭"][clickable=true] <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回 按钮"] < ViewGroup <n ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="残忍离开"] < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 38,
      name: '省钱豆-食安保',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="食安保"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          anyMatches: [
            '@[desc="关闭"][clickable=true] <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
            '@[desc="关闭"][clickable=true] <n View <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          actionDelay: 5000,
          matches: [
            'Image < @View[clickable=true] < [id="nav-bar"] < [id="root"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="立即收下"] - @[text="仍要退出"][clickable=true] < View < View < View - [id="root"]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 4,
          action: 'back',
          matches: [
            '@ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 39,
      name: '省钱豆-月付金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="月付金"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          matches: [
            'Image < @View[clickable=true] < View <n View < View <n [id="with-scroll-content"] < [id="JS_PageScroller"] <n [id="Page_layout_scroll"] < [id="root"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@Button[clickable=true] < View < View <n [id="Page_layout_scroll"] < [id="root"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] < [id="headerLeftBar"] < [id="full-header"] <n [id="Page_layout_scroll"] < [id="root"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="恭喜完成任务"] < View <n View < View - @ImageButton[clickable=true] < View < View < View <n View < View <n [id="root"]',
          ],
        },
      ],
    },
    {
      key: 40,
      name: '省钱豆-运费险',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="运费险"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
          excludeMatches: [
            '[text="恭喜完成任务"] < View <n View < View - @ImageButton[clickable=true] < View < View < View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '@Button[desc="关闭"][clickable=true] <n View -n [id="root"]',
            'Image < @View[clickable=true] < [id="nav-bar"] < [id="root"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="立即收下"] - @[text="仍要退出"][clickable=true] < View < View < View - [id="root"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          action: 'back',
          matches: [
            '@ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '省钱豆-抽免单',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="抽免单"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            'Image < @View[clickable=true] < View <n View < [id="root"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '省钱豆-去懂车帝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text~="去懂车帝|浏览懂车帝"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View < View <n [id="root"]',
            '[text="浏览懂车帝"] <n @View[clickable=true] - [text~="浏览赚.*省钱豆"] <n View <n View <n View < View <n [id="root"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@ImageView[clickable=true] < LinearLayout + [text="懂车帝"] <n FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
      ],
    },
    //更多任务
    {
      key: 43,
      name: '省钱豆-从「钱包」访问车主服务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text="从「钱包」访问车主服务"] < View -n [text="今日已完成 明日继续"] <n View <n View < View <n [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '@ViewGroup < ViewGroup < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@ViewGroup < ViewGroup + ViewGroup[height=0] <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '省钱豆-搜索「车险」进入频道',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
        'com.bytedance.android.anniex.container.AnnieXHostActivity',
        '.search.activity.SearchResultActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text="搜索「车险」进入频道"] < View -n [text="今日已完成 明日继续"] <n View <n View < View < [id="root"]',
            '@[text="去完成"][clickable=true] -n [text="搜索「车险」进入频道"] < View -n [text="今日已完成 明日继续"] <n View <n View <n View < View < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ViewGroup - ViewGroup - @ViewGroup - ViewGroup - [desc="12期免息按钮"] < FrameLayout - FrameLayout[width=height] < FrameLayout < LinearLayout < LinearLayout <n RecyclerView',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@Image - Image < View < View <n View <n View < View <n [id="root"] < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          anyMatches: [
            '@[desc="关闭页面"][clickable=true] <n View <n [id="nav-bar"] < [id="root"] < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            '@[desc="关闭页面"][clickable=true] <n View <n [id="nav-bar"] < View < [id="root"] < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
            '@[desc="关闭页面"][clickable=true] <n View <n [id="nav-bar"] < [id="root"] < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < LinearLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3, 4],
          key: 4,
          matches: [
            '@[desc="返回"][clickable=true] < FrameLayout <n RelativeLayout <n RelativeLayout < LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          matches: [
            '@[text="领取奖励"][clickable=true] -n [text="完成"] < View <n View <n View <n View < View < [id="root"]',
          ],
        },
      ],
    },
    //充值中心-攒充值金兑优惠券
    {
      key: 50,
      name: '充值中心-广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'FrameLayout[childCount=4] > ViewGroup[index=parent.childCount.minus(1)] > ViewGroup > ViewGroup + ViewGroup',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '充值中心-攒充值金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
      ],
      rules: [
        {
          key: 0,
          name: '攒充值金',
          action: 'clickCenter',
          actionDelay: 5000,
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + ViewGroup > ViewGroup > @ViewGroup[getChild(0).name$="ImageView"] + ViewGroup + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '天天收集充值金-签到得',
          action: 'clickCenter',
          matches: [
            'ScrollView > HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > ViewGroup > ScrollView > HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '签到成功',
          action: 'clickCenter',
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '充值中心-攒充值金-赚充值金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
      ],
      rules: [
        {
          key: 0,
          name: '去访问|去预约|去浏览|去看看',
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            'ViewGroup[getChild(1).getChild(0).name$="ScrollView"] + ViewGroup > ViewGroup[index=parent.childCount.minus(1)]',
          ],
          excludeMatches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
            'ViewGroup[getChild(1).getChild(0).name$="ScrollView"] + @ViewGroup[getChild(0).name$="ViewGroup"] + ViewGroup[getChild(0).getChild(0).name$="ViewGroup"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '从商城访问充值中心',
          action: 'clickCenter',
          matches: [
            'FrameLayout > LinearLayout > ViewGroup[childCount=5] > @ViewGroup[index=2][childCount=5]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          name: '预约下月收集活动',
          action: 'clickCenter',
          matches: [
            '@[desc~="bilibili|芒果TV|腾讯视频"] - ImageView < ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '预约影音娱乐1元秒杀',
          action: 'back',
          actionDelay: 5000,
          matches: [
            'FrameLayout > @ViewGroup + ViewGroup > ViewGroup > LinearLayout + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 4,
          name: '浏览精选好物',
          matches: [
            '@[desc="返回"][clickable=true] <<n [id="mix-navbar"] +n * [text="浏览好物"] + [text="返回领取"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 6,
          name: '看1次短视频*3',
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@ImageView < [desc="任务完成 返回领取,关闭,按钮"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
        {
          preKeys: [1, 2, 3, 4, 5, 6],
          key: 7,
          name: '访问成功|任务完成|看视频完成',
          action: 'clickCenter',
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
          ],
        },
      ],
    },
    //任务中心
    {
      key: 60,
      name: '任务中心-天天预约领金币-看视频*秒领',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          name: '看视频*秒领',
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > @[desc="看视频"] + [desc~="[0-9]+"] + [desc="秒"] + [desc="领"] + [desc="直接领"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          name: '看*秒领预约奖励',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          actionMaximum: 10,
          actionCd: 5000,
          anyMatches: [
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="看00:[0-9][0-9]领预约奖励"]',
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="00:[0-9][0-9]"]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击领预约奖励',
          action: 'clickCenter',
          anyMatches: [
            '@[text="点击领预约奖励"]',
            'FrameLayout > @ViewGroup[clickable=true] > View + FrameLayout > LinearLayout > ImageView',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          name: '领取金币',
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > @[desc="领取金币"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '开心收下',
          matches: [
            '[getChild(0).desc="金币领取成功"] +n ViewGroup > @[desc="开心收下"]',
          ],
        },
        {
          key: 5,
          name: '立即预约领金币',
          matches: [
            'ViewGroup - @ViewGroup - ViewGroup - ImageView - ViewGroup < ViewGroup - ViewGroup < LinearLayout < HorizontalScrollView < ScrollView - ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          key: 6,
          name: '立即预约领取',
          matches: [
            '@[desc="立即预约领取"] < ViewGroup <n ViewGroup < LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
          excludeMatches: [
            'ViewGroup - @ViewGroup - ViewGroup - ImageView - ViewGroup < ViewGroup - ViewGroup < LinearLayout < HorizontalScrollView < ScrollView - ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [5, 6],
          key: 7,
          name: '恭喜预约成功',
          matches: [
            'ImageView - @ImageView[width=height] < ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [5, 6],
          key: 8,
          name: '恭喜预约成功-×',
          position: {
            left: 'width * 0.91',
            top: 'height * 0.13',
          },
          actionDelay: 2000,
          matches: [
            'ViewGroup < ViewGroup < @ViewGroup - ViewGroup < LinearLayout < HorizontalScrollView < ScrollView - ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [7, 8],
          key: 9,
          name: '恭喜获得惊喜奖励',
          matches: [
            'ViewGroup - @ImageView[width=height] < ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [9],
          key: 10,
          name: '返回',
          action: 'back',
          matches: [
            '[desc="直接领"] -n [getChild(0).desc="看视频"] - @ViewGroup < ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
      ],
    },
    {
      key: 61,
      name: '任务中心-天天预约领金币-立即领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          name: '立即领取',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            '@HorizontalScrollView > LinearLayout > ViewGroup[childCount=6][index=1 || index=3]',
          ],
          excludeMatches: [
            'HorizontalScrollView > LinearLayout[childCount=2] > ViewGroup > ViewGroup > ViewGroup + @ViewGroup + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '金币领取成功',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.555',
          },
          matches: [
            'HorizontalScrollView > LinearLayout[childCount=2] > ViewGroup > ViewGroup > ViewGroup + @ViewGroup + ViewGroup',
          ],
        },
        {
          key: 2,
          name: '选择你的惊喜奖励-选我',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ViewGroup[childCount>3] - ViewGroup[childCount>3] < @ViewGroup  + ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 3,
          name: '金币预约成功-我知道了-×',
          matches: [
            '@ImageView[width=height] <n ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [3, 5],
          key: 4,
          name: '明天*点可领-返回',
          action: 'back',
          matches: [
            '@[desc~="明天[0-9]+点可领"] <n ViewGroup <n ViewGroup < ViewGroup < LinearLayout < HorizontalScrollView < ScrollView < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [vid="root_layout"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '提醒我来领-返回',
          action: 'back',
          matches: [
            'ScrollView > HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > ViewGroup + ImageView',
          ],
        },
      ],
    },
    //手机充值
    {
      key: 70,
      name: '手机充值-广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="190521fc43254cb0b96fe55e90fa4dfa~tplv-20ashz96qn-1"]', //放心借
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          key: 1,
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="2ec70291e3984ad789797699237a21b8~tplv-20ashz96qn-1"]', //恭喜获得
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //26.09.01-26.12.31 我的钱包-支付积分
    {
      key: 80,
      name: '我的钱包-今日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          name: '立即签到',
          matches: [
            '[desc="返回 按钮"] - @ViewGroup[childCount=1] -n ViewGroup[childCount=1] < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 71,
          name: '×',
          position: {
            left: 'width*0.5',
            top: 'height*1.1',
          },
          actionDelay: 3000,
          matches: [
            '[desc="返回 按钮"] - ViewGroup[childCount=0] -n @ViewGroup[childCount=1] < ViewGroup <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 90,
      name: '哈啰-支付成功',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.live.LiveDummyHybridTransparentActivity'],
      rules: [
        {
          key: 0,
          name: '弹窗广告-×',
          matches: [
            '@[name*="Image"] < View < [id="root"] < View < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < LinearLayout < FrameLayout < [id="android:id/content"] < View < [id="root"] < View < WebView < WebView < FrameLayout < FrameLayout < FrameLayout < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '返回商户',
          actionDelay: 5000,
          matches: [
            'ViewGroup < @[desc="返回商户"] <n LinearLayout < HorizontalScrollView < ScrollView <n FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '个人信息保护指引-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="同意"][clickable=true] <n LinearLayout - * [text="个人信息保护指引"] < LinearLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 401,
      name: '未成年人模式-不再提醒',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[desc="关闭"] - LinearLayout > [text="未成年人模式"] +n LinearLayout > @[text="不再提醒"][clickable=true]',
          ],
          activityIds: ['.main.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 501,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        '.wallet.ui.WalletActivity',
        '.live.LiveDummyHybridTransparentActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 501,
          matches: [
            '@[desc="关闭"][clickable=true] <n View <n View < WebView < WebView < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 11,
          matches: [
            '[desc="开心收下"] -n @ImageView <n ViewGroup <n LinearLayout < HorizontalScrollView < ScrollView < ViewGroup < FrameLayout < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout <n ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
