import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '浏览好物-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="文档扫描"] <<n * [text="拍摄纸质资料，生成高清电子版"]'],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 20,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < FrameLayout + * > * [text="进入微信小游戏自由畅玩"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '游戏中心-好礼通行证-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['@[text="关闭"] -2 [text="point"] <<n [text="游戏中心"]'],
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
  ],
});
