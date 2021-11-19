module.exports = ({ env }) => ({
  // upload: {
  //   providerOptions: {
  //     bucket: 'project4-leaderboard',
  //     region: 'us-east-1',
  //     accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
  //     secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',


  //   }
  // },

  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRIDAPI'),
    },
    settings: {
      defaultFrom: env('SENDGRID_DEFAULT_EMAIL', 'hunter007nz@gmail.com'),
      defaultReplyTo: env('SENDGRID_DEFAULT_REPLY_EMAIL', 'hunter007nz@gmail.com')
    }
  }
});

