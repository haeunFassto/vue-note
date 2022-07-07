(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{444:function(v,_,e){"use strict";e.r(_);var t=e(56),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"설로인-인터뷰-질문에-답해보기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#설로인-인터뷰-질문에-답해보기"}},[v._v("#")]),v._v(" 설로인 인터뷰 질문에 답해보기")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/sirloin-dev/meatplatform/blob/master/job-description/interview-questions.adoc",target:"_blank",rel:"noopener noreferrer"}},[v._v("원글 보러가기"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"운영체제-논리회로-일반"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#운영체제-논리회로-일반"}},[v._v("#")]),v._v(" 운영체제 / 논리회로 일반")]),v._v(" "),e("p",[v._v("Q. 컴퓨터는 10진수를 2진수로 바꿔서 계산합니다. 10진수를 2진수로 바꾸는 방법과, 그 반대 방법에 대해 설명해 주시기 바랍니다.")]),v._v(" "),e("p",[v._v("Q. 컴퓨터는 소숫점 계산을 잘 못합니다. 그 이유가 무엇일까요? 어떻게 문제를 해결할 수 있을까요? 직접 구현한다면 어떻게 하시겠습니까?")]),v._v(" "),e("p",[e("strong",[v._v("이유")]),v._v(": 컴퓨터 내부에서는 모든 정보를 2진수로 처리한다. 그렇기 때문에 10진수에 대응되는 0.5, 0.25, 0.125 등의 소수로 표현할 수 없는 0.1과 같은 소수는 정확하게 2진수로 바꿀 수 없어 정확한 계산이 어렵다.\n"),e("strong",[v._v("구현")]),v._v(":")]),v._v(" "),e("p",[v._v("Q. Thread 간의 데이터 공유와 Process 간의 데이터 공유의 공통점과 차이점을 설명해주세요.")]),v._v(" "),e("p",[v._v("공통점:\n차이점: 쓰레드간 데이터 공유의 경우, 한 프로세스에 있는 쓰레드간 자원을 공유함으로써 절약할 수 있다.")]),v._v(" "),e("p",[v._v("Q. 컴퓨터가 기계어를 읽고, 실행하는 과정에 대해 설명해 주실 수 있나요?")]),v._v(" "),e("p",[v._v("Q. 운영체제가 여러 프로그램을 동시에 실행하는 원리에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("정해진 CPU 스케줄링 알고리즘대로 프로세스에 CPU를 배정한다. 그 시간이 끝나거나 인터럽트가 들어오면 PCB에 프로세스의 상태와 정보를 저장하고, 컨텍스트 스위칭으로 CPU를 다른 프로세스로 넘겨 여러 프로그램을 동시에 실행하는 것처럼 보이게 한다.")]),v._v(" "),e("p",[v._v("Q. 컴파일러와 인터프리터는 어떤 차이가 있을까요?")]),v._v(" "),e("p",[v._v("Q. Garbage Collection 이란 무엇일까요? Garbage Collection 방식 중 제일 잘 알고 계시는 GC를 아무거나 하나만 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. Garbage collection 이 있는 언어를 원자력 발전소, 자동차 동력 제어, 인공위성, 국가 전력망 제어시스템 같은 곳에 쓸 수 있을까요? 후보자님의 생각을 말씀해 주세요.")]),v._v(" "),e("p",[v._v("Q. 지금 이용하시는 기술/언어에서 제일 마음에 드는점과 불만인 점 한가지를 말씀해주세요.")]),v._v(" "),e("p",[v._v("Q. System call 이 뭔가요?  System call 에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("시스템 콜이란 사용자 프로그램이 OS의 서비스를 받고자 운영체제를 호출하는 것. 소프트웨어 인터럽트의 일종으로, 할일을 다 했다고 알려주는 인터럽트다. 그러면 CPU 제어권이 운영체제로 넘어간다.")]),v._v(" "),e("p",[v._v("Q. 바이트코드와 기계어의 차이에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. Thread safety 란 뭔가요? 어떻게 구현해야 Thread safe 한 코드를 만들 수 있나요?")]),v._v(" "),e("p",[v._v("Q. bytecode 기반 언어는 디컴파일에 특히 취약하다는 문제가 있는데, 언어를 바꾸지 않고 이를 해결할 방법이 없을까요?")]),v._v(" "),e("p",[v._v("Q. 파이프("),e("code",[v._v("|")]),v._v(") 란 무엇이고, 어떻게 동작하는지 설명해주세요.")]),v._v(" "),e("h2",{attrs:{id:"네트워크"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#네트워크"}},[v._v("#")]),v._v(" 네트워크")]),v._v(" "),e("p",[v._v("Q. Socket 으로 바로 통신하는 것 대비 HTTP 는 비효율적인데도 왜 많은 앱들은 HTTP 를 쓰는 걸까요?")]),v._v(" "),e("p",[v._v("Q. OSI Layer 7 또는 TCP Model 에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 차세대 프로토콜로 논의중인 HTTP/3 은 UDP 기반의 QUIC 이라는 기술로 구현되어 있습니다. UDP 는 TCP 대비 안정성이 떨어지는 프로토콜이라고 하는데, 그럼에도 왜 UDP 를 채택한 걸까요?")]),v._v(" "),e("p",[v._v("Q. SSL (또는 TLS) 가 어떻게 동작하는지 말씀해주세요.")]),v._v(" "),e("p",[v._v("Q. HTTP 는 Stateless (상태가 없는) 통신 프로토콜이라고 합니다. 따라서, 상태가 없다면 가령 HTTP 를 쓰는 서비스는 매번 로그인을 해 줘야 하거나 사용자 정보를 저장하는 일이 불가능합니다. 그런데 실제론 그렇지 않죠. 어떻게 이런 불편함을 해소했을까요?")]),v._v(" "),e("p",[v._v("Q. 웹 브라우저에 "),e("code",[v._v("https://www.google.com")]),v._v(" URL 을 입력 후 enter 를 쳤을 때 일어나는 과정을 최대한 상세하게 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. HTTP(s) 프로토콜에서 바이너리 데이터를 전송하는 방식에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. Socket 으로 웹 페이지를 크롤링하는 HTTP 클라이언트를 직접 구현해야 한다면, 어떻게 하시겠습니까?")]),v._v(" "),e("h2",{attrs:{id:"데이터베이스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#데이터베이스"}},[v._v("#")]),v._v(" 데이터베이스")]),v._v(" "),e("p",[v._v("Q. noSQL 과 RDB 의 특징, 차이에 대해 말씀해주세요. 어느 상황에 어떤 데이터베이스를 쓰는게 좋겠습니까?")]),v._v(" "),e("p",[v._v("Q. 데이터베이스가 자료를 빠르게 검색하기 위해 어떤 일을 할까요? 최대한 상세하게 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. RDBMS 의 여러 JOIN 중 아무거나 하나 골라서, 그림으로 설명해 주실 수 있습니까?")]),v._v(" "),e("p",[v._v("Q. 데이터베이스 샤딩 / 파티셔닝에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 데이터베이스가 Index 를 이용해 자료를 빠르게 검색하는 과정을, 우리 할머니도 알아들을 수 있도록 설명해 주시겠어요?")]),v._v(" "),e("p",[v._v("Q. Stored procedure 를 이용한 시스템을 어떻게 유지보수 할 수 있습니까? Stored procedure 의 장점과 단점에 대해 말씀해 주세요.")]),v._v(" "),e("p",[v._v("Q. Optimistic Locking(낙관적 락) 과 Pessimistic Locking(비관적 락) 에 대해 설명해주세요. 각각의 락을 사용할 상황 또는 제품 사례를 말씀해주세요.")]),v._v(" "),e("p",[v._v("Q. 어떤 서비스의 이용자 테이블이 있다고 가정합시다. 이용자 id 를 여러 테이블에서 FK 로 참조하고 있습니다. 그런데 이용자 테이블에 환경설정, 개인정보 등 정보를 한데 저장하다보니 Column 이 40개가 넘게 있는 상태입니다. 문제를 진단해 주시고, 해결 방안도 제시해 주시기 바랍니다.")]),v._v(" "),e("p",[v._v("Q. Slow query 를 발견하고, 수정한 경험에 대해 말씀해 주세요.")]),v._v(" "),e("p",[v._v("Q. 저희는 도축장에서 전달받은 원육을 소매점에 도매하는 서비스를 운영하고 있습니다. 여기서, 원육과 소매점을 어떻게 테이블로 모델링 하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 어플리케이션의 문자열(String) 을 데이터베이스에 저장하기 위해 고려해야 할 사항에는 어떤 점이 있을까요?")]),v._v(" "),e("p",[v._v("Q. Big data 를 다루려면 RDBMS 보다 NoSQL 이 더 좋다는 말이 많습니다. 그렇다면 large data set 에는 항상 NoSQL 만 써야 할까요? 반드시 RDBMS 만을 이용해 large data set 을 다루려면 어떻게 해야 할까요?")]),v._v(" "),e("p",[v._v("Q. 실 서비스의 데이터를 조작하고, 또 조회해야 하는 Admin app 을 만들어야 한다면, 어떻게 구현하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 데이터 마이그레이션 기간 동안 서비스 순단을 최소한으로 하고 싶습니다. 이런 요구사항에 맞는 테이블을 어떻게 설계하시겠습니까?")]),v._v(" "),e("h2",{attrs:{id:"자료-구조-및-알고리즘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자료-구조-및-알고리즘"}},[v._v("#")]),v._v(" 자료 구조 및 알고리즘")]),v._v(" "),e("p",[v._v("Q. 지금 사용하시는 스마트폰의 화면을 캡쳐하는 프로그램을 만들어야 한다면 어떻게 하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 전화번호와 같은 민감한 정보를 어떻게 저장하는게 좋을까요? 관리자조차 모르게 저장하고 싶다면?")]),v._v(" "),e("p",[v._v("Q. 암호화란 무엇일까요? 알고 계신 암호화 방식 아무거나 하나만 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 어떤 알고리즘을 도입하기 전에, 성능을 판별해 보고자 합니다. 어떤 방법을 활용해, 어떤 기준으로 알고리즘의 효율을 판단하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 공개 키 암호화와 비밀 키 암호화에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 캡슐화에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 캐시란 뭐고, 어떤 목적으로 쓰는 건가요?")]),v._v(" "),e("p",[v._v("Q. List 와 Set 의 차이에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 이진 탐색의 최선 / 최악의 경우에 대해 말씀해주세요.")]),v._v(" "),e("p",[v._v("Q. 손실 압축과 무손실 압축의 차이에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. RSA 로 공개 키를 만들 때, 키 길이를 정하는 기준이 있습니까? 키 길이를 길게 하면 암호화 문제를 완벽 해결할 수 있나요?")]),v._v(" "),e("p",[v._v("Q. 순환 Queue 를 만드려면 어떻게 하시겠습니까? 그리고 어떤 Queue 또는 Graph 가 무한 순환 구조라는 것을 어떻게 판단하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 압축 알고리즘을 설계하라는 요구사항이 들어왔다면, 어떻게 구현하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 전화번호부 앱을 만든다고 가정하겠습니다. 1명당 1KiB의 정보를 갖도록 모델을 설계했습니다. 앱이 온전히 사용할 수 있는 메모리가 4메가인 기기에서, 10000명(총 10메가)의 이용자 정보를 검색할 수 있도록 구현해야 합니다. 어떻게 하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. (JVM 경험자 한정) 배열과 "),e("code",[v._v("ArrayList")]),v._v(", "),e("code",[v._v("LinkedList")]),v._v(" 의 차이점은 무엇인가요?")]),v._v(" "),e("h2",{attrs:{id:"디자인-및-테스트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#디자인-및-테스트"}},[v._v("#")]),v._v(" 디자인 및 테스트")]),v._v(" "),e("p",[v._v("Q. Singleton pattern 이란 무엇이고, 어떤 장점과 단점이 있을까요?")]),v._v(" "),e("p",[v._v("Q. 싱글턴 코드는 테스트를 어렵게 만드는 문제가 있습니다. 왜 그럴까요? 싱글턴이 좋지 않다는데 왜 스프링 프레임워크 같은 녀석들은 별다른 규칙이 없을 때 "),e("em",[v._v("기본으로")]),v._v(" Singleton bean 을 만들까요?")]),v._v(" "),e("p",[v._v("Q. 좋은 Test 라고 평가할 수 있는 가장 중요한 요소를 말씀해주세요. 후보자님은 어떤 Test 를 좋은 Test 라고 정의하십니까?")]),v._v(" "),e("p",[v._v("Q. Callback function(또는 Closure) 이 뭔가요? 주의할 점이 있을까요?")]),v._v(" "),e("p",[v._v("Q. Mutable, Immutable 이란 뭔가요? 각각은 어떤 특징이 있을까요?")]),v._v(" "),e("p",[v._v("Q. Acceptance, Smoke, End-to-End, Integration, Unit test 같은 용어들을 본인만의 방법으로 구분짓는 기준이 있습니까?")]),v._v(" "),e("p",[v._v("Q. 메소드의 파라미터로 전달한 객체를 메소드 내에서 마음대로 바꾸지 못 하게 하려면 어떻게 코딩하는게 좋을까요? 왜 메소드가 파라미터를 조작하는 것이 문제가 될까요? 문제가 아닐 수도 있지 않을까요?")]),v._v(" "),e("p",[v._v("Q. 음료수 자판기에 탑재한 소프트웨어를 제작했다고 가정해 보겠습니다. 작성하신 소프트웨어의 통합 테스트 시나리오를 어떻게 작성하시겠습니까? 생각나는대로 말씀해 주세요.")]),v._v(" "),e("p",[v._v("Q. 현재 다루시는 플랫폼에서의 테스트 자동화를 어떻게 구축 하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. test code 를 작성하는 본인만의 기준이 있습니까? test 실행 속도를 높이려면 어떤 방법이 좋을까요?")]),v._v(" "),e("p",[v._v("Q. blackbox testing, whitebox testing 의 차이에 대해 설명해주세요. 어떤 상황에서 어떤 테스트 방법을 사용하시겠습니까?")]),v._v(" "),e("p",[v._v('Q. 상속의 이점 중 "코드의 중복을 줄여준다" 는 말이 있습니다. 그런데 코드 중복을 줄이기 위해서 상속을 쓰는 것은 매우 좋지 않은 코딩 방식이라고 저희는 생각합니다. 이에 대한 후보자님의 의견을 듣고 싶습니다.')]),v._v(" "),e("p",[v._v("Q. Java 의 Marker interface (아무 메소드도 없이 타입만 있는) 에 대해 어떻게 생각하시나요?")]),v._v(" "),e("p",[v._v("Q. 코드 응집성(cohesion)이란 말을 어떻게 설명하실 수 있습니까? 응집도가 낮은 코드와 높은 코드를 예를 들어 설명해 주세요.")]),v._v(" "),e("p",[v._v("Q. NodeJS 로 실행하는 서버와 통신하는 Spring 또는 Python 서버를 구현할 때, 어떻게 하시겠습니까? HTTP 외의 방법을 쓰고 싶다면 어떻게 해야 할까요?")]),v._v(" "),e("p",[v._v("Q. 네이버 같은 서비스에서 IP 주소가 바뀔 경우 접속 경고 등의 오류를 발생시킨다. 어떻게 구현하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 서비스의 memory leak 을 어떻게 판단하고, 해결하시겠습니까?")]),v._v(" "),e("p",[v._v("Q. 우리 서비스가 대 성공해서 이용자가 4000만이 되었다고 가정합니다. 이용자 4천만 돌파 기념으로 선착순으로 접속한 사용자에게 보너스 포인트를 주는 이벤트를 운영하려 합니다. 모든 이용자들에게 공평하게, 플랫폼이 제공하는 Push 를 보내려 하는데요. 이 경우, 어떤 점들을 고려해야 할까요?")]),v._v(" "),e("p",[v._v("Q. MSA vs Monolithic 을 선택하는 기준이 있습니까?")]),v._v(" "),e("p",[v._v("Q. M 인프라 시스템이 A 시스템 대비 가격이 많이 싸졌다고 가정해 보겠습니다. 우리의 인프라 시스템을 A 에서 M 으로 최대한 빨리 바꾸려면 어떤 점을 고려해야 할까요?")]),v._v(" "),e("p",[v._v("Q. 우리 앱의 어떤 페이지(또는 특정 view) 의 로딩이 매우 늦다면 어떻게 개선할 수 있을까요?")]),v._v(" "),e("p",[v._v("Q. 우리가 사용하는 앱들의 API 는 예고없이 바뀌기도 합니다. 외부 API 가 마구 변경되는 상황에서도 우리 앱이 크래시 나지 않게 하려면 어떻게 해야 할까요?")]),v._v(" "),e("p",[v._v("Q. 제작한 애플리케이션이 얼마나 사용자 친화적인지를 측정할 수 있는 방법이 있을까요?")]),v._v(" "),e("h2",{attrs:{id:"nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[v._v("#")]),v._v(" NodeJS")]),v._v(" "),e("p",[v._v("Q. "),e("code",[v._v("Promise")]),v._v(" 에 대해 설명해 보세요.")]),v._v(" "),e("p",[v._v("Q. Typescript 의 "),e("code",[v._v("type")]),v._v(" 과 "),e("code",[v._v("interface")]),v._v(" 의 공통점 및 차이점을 설명해 보세요.")]),v._v(" "),e("p",[v._v("Q. Typescript 의 "),e("code",[v._v("interface")]),v._v(" 의 특징? 컴파일 이후에는 어떻게 되는지 말씀해주세요.")]),v._v(" "),e("p",[v._v("Q. Javascript 와 Java 의 차이를 우리 할머니도 알아들으실 수 있도록 설명해주실 수 있습니까?")]),v._v(" "),e("p",[v._v("자바스크립트:\n자바:")]),v._v(" "),e("p",[v._v("Q. Map 의 키로 "),e("code",[v._v("number")]),v._v(", "),e("code",[v._v("string")]),v._v(" 대신 "),e("code",[v._v("object")]),v._v(" 를 쓰고 싶다면, 어떤 점을 고려해야 합니까?")]),v._v(" "),e("p",[v._v("Q. Prototype 기반 상속과 일반적인 OOP 에서의 상속은 어떤 차이가 있습니까?")]),v._v(" "),e("h2",{attrs:{id:"web"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[v._v("#")]),v._v(" Web")]),v._v(" "),e("p",[v._v("Q. 비동기로 처리한 작업을 UI 에 표시하기 위해 어떤 일이 필요한지 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. DOM 의 class와 id의 차이?")]),v._v(" "),e("p",[v._v("class: 비슷한 특징 또는 의미를 가진 요소끼리 묶어 한번에 스타일을 적용할 수 있다.\nid: 딱 한 HTML 엘리먼트를 나타내는데 사용. 한 페이지에서 한 엘리먼트를 의미한다.")]),v._v(" "),e("p",[v._v("Q. Event bubbling 과 Event capturing 에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. 웹 UI 프레임워크들은 SPA 로 개발하는게 2022년 현재 대세인데 native app 에서는 그런 방식이 일반적이지 않다. 왜 그럴까요?")]),v._v(" "),e("p",[v._v("Q. flutter/RN 이 제공하는 hot reload 와 hot restart(live reload) 의 차이에 대해 설명해주세요.")]),v._v(" "),e("p",[v._v("Q. React 를 이용해 구현한 SPA 의 SEO 경험을 공유해주세요.")])])}),[],!1,null,null,null);_.default=a.exports}}]);