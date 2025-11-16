import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 0,
      name: '网商财神-开红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 5000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
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
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
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
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          matches: ['@[text="Smallfish App"] >n [text="任务完成"]'],
          snapshotUrls: ['https://i.gkd.li/i/23566578'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
  ],
});
