import { defineGkdApp } from '@gkd-kit/define';
          ],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
          activityIds: [
            '.bullet.ui.BulletContainerActivity',
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '抖音月付-挑战任务-得惊喜盲盒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@FrameLayout[clickable=true]  > FrameLayout > [id*="cj_plugin:id"] + FrameLayout',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '抖音月付-天天预约领金币-看视频20秒领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'swipe',
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
          actionDelay: 3000,
          matches: [
            'FrameLayout > ViewGroup[clickable=true] > View + FrameLayout > LinearLayout > [text~="00:[0-9][0-9]"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '我的钱包-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭"][clickable=true] + * >n @ImageView +3 [desc="开心收下"]',
          ],
          activityIds: ['.wallet.ui.WalletActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '支付成功-去升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
