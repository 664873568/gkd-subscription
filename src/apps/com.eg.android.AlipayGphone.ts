import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    //网商财神
    {
      key: 0,
      name: '网商财神-开红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View -n * <<3 [id="ant-render-id-CPT_67f7a08a088a0168e4b61c05"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23561800'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '网商财神-开红包-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView -n * < * -n * <<n [id="ant-render-id-CPT_67f7a08a088a0168e4b61c05"]',
            '@TextView -n * < * -n * < * < * -n * <<n [id="ant-render-id-CPT_67f7a204088a0168e4b61c07"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23561801',
            'https://i.gkd.li/i/23561802',
            'https://i.gkd.li/i/23561803',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '网商财神-开红包-完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="Smallfish App"] >n [text="任务完成"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23566578',
            'https://i.gkd.li/i/23566664',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '网商财神-开红包-继续迎财神',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView <n * <n * -n * <<n [id="ant-render-id-CPT_67f7a204088a0168e4b61c07"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566626'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //木兰日
    {
      key: 4,
      name: '木兰日-加机会',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@Image -n * <n * <<n [id="ant-render-id-CPT_66014f3a846db8bae059d7b9"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566713'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@Image -n * <n * <<n [id="ant-render-id-CPT_66014f3a846db8bae059d7b9"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566732'],
        },
      ],
    },
    {
      key: 5,
      name: '木兰日-拳击抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@View -n Image <<n [id="ant-render-id-CPT_66014f3a846db8bae059d7b9"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566736'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="A*owxzR4JLWG8AAAAAAAAAAABkARQnAQ"] -n [text="恭喜获得网商福利金"] <<n [id="ant-render-id-CPT_66014f3a846db8bae059d7b9"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566732'],
        },
      ],
    },
    //看视频
    {
      key: 6,
      name: '看视频-做任务领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领取"] <<n [id^="scroll_to"] <<n [text="红包"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23566793',
          ],
          activityIds: [
            '.AlipayLogin',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '看视频-任务完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View >n [text="任务完成"] + [text="返回领奖"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/23566792',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
  ],
});
