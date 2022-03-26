const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	name: 'MineSearch-setting',
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
				test: /\.jsx?$/, // js & jsx 파일을 룰에 적용
				loader: 'babel-loader', // js & jsx 에 바벨을 적용해서 예전 문법에도 적용돼 돌아갈수있도록 해준다
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: [`react-refresh/babel`],
				},
				exclude: path.join(__dirname, 'node_modules'),
			}
		]
	}, // modules - 엔트리에있는 파일을 읽고 거기에 모듈을 적용 후 아웃풋에 출력
	plugins: [new RefreshWebpackPlugin()],
	output: {
		path: path.join(__dirname, 'dist'), // dist 폴더 경로 설정
		filename: 'app.js', // 원하는 파일
		publicPath: './dist',
	},
	devServer: {
		devMiddleware: { publicPath: '/dist'}, // 버전 업 되면서 변경됨 (웹팩 명령어 실행할때 dist 폴더안에 생성해줌)
		static: { directory: path.resolve(__dirname)}, // 버전 업 되면서 변경됨 ( 실제로 존재하는 정적 파일의 경로를 적어주면 됨)
		hot: true // 소스코드의 변경점을 감지하여 dist폴더의 결과물을 수정을 해줌 ? (기존 데이터를 유지하며 리로딩)
	}
}