const path = require('path')

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스 사용할땐 : production 으로 변경
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  entry: {
    app: ['./client'] // 입력 할 파일 설정 ( WordRelay.jsx 파일을 client.jsx 에서 불러오고있기때문에 적어줄 필요없다), resolve 에서 확장자를 설정해줬기에 따로 확장자를 안붙여줘도된다
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/, // js & jsx 파일을 룰에 적용
        loader: 'babel-loader', // js & jsx 에 바벨을 적용해서 예전 문법에도 적용돼 돌아갈수있도록 해준다
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  }, // modules - 엔트리에있는 파일을 읽고 거기에 모듈을 적용 후 아웃풋에 출력

  output: {
    path: path.join(__dirname, 'dist'), // dist 폴더 경로 설정
    filename: 'app.js' // 원하는 파일
  }
}
