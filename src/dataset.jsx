const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "エンジニアやデザイナーのキャリアについて相談したい", nextId: "consultant"},
          {content: "学習方法について知りたい", nextId: "study"},
          {content: "直接質問したい！！", nextId: "contact"},
      ],
      question: "こんにちは！ご用件はなんでしょうか？",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "consultant": {
      answers: [
          {content: "学習コミュニティについて知りたい", nextId: "community_activity"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "僕が運営する学習コミュニティ内でも相談に乗っていますよ。",
  },
  "study": {
      answers: [
          {content: "エンジニアリングについて", nextId: "contact"},
          {content: "デザインについて", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "どのような学習のお悩みですか？",
  },
  "community_activity": {
      answers: [
          {content: "さらに詳細を知りたい", nextId: ""},
          {content: "コミュニティに参加したい", nextId: ""},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！"
  }
}

export default defaultDataset