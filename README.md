# 프로젝트 생성
- npx create-react-app 프로젝트명

# 라이브러리 설치
- 라우터 > npm i react-router-dom
- Emotion > npm i @emotion/react
- Recoil > npm i recoil
- React Icons > npm i react-icons
- Sweetalert2 > npm i sweetalert2

# JSX 자동완성
- Ctrl + Shift + p
- user Settings.json(vscode 사용자 설정) 선택
- 아래 설정 추가

```json
    "emmet.syntaxProfiles": {
        "javascript" : "jsx"
    },
    "emmet.includeLanguages": {
        "javascript": "html"
    }
```

# 확장기능(Extension)
- Reactjs code snippets
- vscode-color-picker
- vscode-styled-components
- Auto Rename Tag (편의기능)
- indent-rainbow (편의기능2)

# 터미널 선택
- Ctrl + Shift + p
- terminal: Select Default Profile 선택
- gitBash 선택

# 폴더 구조
- components
- pages
- constants
- styles
- hooks
- configs
- utils
- atoms
- assets
- apis(services)
- store

# 주요 Hook 함수
- useState(기본값)
- useEffect(() => {}, [])
- useRef(기본값)
- useMemo(() => return, [])
- useCallBack(() => {}, [])
- useRecoilState(atom)
- useNavigate()
- useLocation()
- useParams()
- useSearchParams()