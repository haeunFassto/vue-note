# 블로그를 직접 만들다 보니까

고려할 게 한두가지가 아니다. 디자인부터 어떤 라이브러리를 사용할지 등등 고민할 게 엄청 많다! 그래서 아예 한 카테고리를 할애해서 내가 블로그를 만들면서 한 고민과 생각을 정리하려 한다.

## 처음 지킬 블로그를 만들었을 땐

mobile first로 레이아웃을 만들어야한다는 걸 몰랐다. 그래서 기본을 데스크탑 뷰로 했었는데 Next.js로 다시 만들땐 mobile-first로 CSS를 바꿔야했다. 기존에 모바일 뷰를 위해 적용했던 미디어 쿼리들을 기본값으로 설정하고, 화면이 넓어질 때의 스타일값들을 미디어 쿼리로 적용했다.

## style 관련 라이브러리들

Next.js로 개발을 하면서는 tailwind, module.scss, styled components를 사용했다.

- Tailwind는 간단하게 클래스이름만으로 스타일 주고 싶을 때 (주로 padding, margin 값 주려고 사용)
- Module.scss: 그 컴포넌트에만 CSS 적용하고 싶을 때, 애니메이션이나 transformation 등 효과를 미디어 쿼리를 사용해야할 때 주로 사용했다.
- Styled Components: Tailwind로 하기엔 할 게 많고 module.scss를 쓰기엔 적은 양이었을때 사용했다. 또 일회성인 스타일이 필요할 때 사용했다.

근데 이렇게 그때그때 유용한 놈들을 섞어 사용하니까... 관리하기가 너무 힘들었다. ㅜㅜ 

## 조금이라도 유지보수하기 쉽게 !

### 그래서 일단은 tailwind를 걷어냈다. 

tailwind는 부트스트랩처럼 html 요소의 클래스명만 바꿔주면 되고, 미디어 쿼리도 적용할 수 있어서 참 편했지만.... tailwind를 임포트할때 웹팩 에러가 몇번 나기도 했고, styled-component로 대체할 수 있을 것 같아서 큰맘먹고 걷어냈다.

### module.scss도 최소화

Next.js가 내세운 module.scss의 장점은 그 컴포넌트에만 스타일을 적용할 수 있다는 거였다. 하지만 이건 styled-component의 장점이기도 해서, module.scss도 애니메이션이 많은 내비게이션 바만 남겨두고 다 styled-component로 바꿨다.