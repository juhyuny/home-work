# Mission-02 Ediya - Login Page


## HTML 마크업 구조 이미지

![header-markup](https://github.com/juhyuny/home-work/assets/141771716/e1d01d54-1b55-4353-9e65-2e175922031a)
![mission-02-markup-edit](https://github.com/juhyuny/home-work/assets/141771716/2c1bef6b-9538-44f0-8d87-9709714ec99b)



## HTML 구조
1, 컴포넌트 
  - header
  - navigation
2. 메인 화면(로그인 화면)

<details>
<summary>HTML 마크업 구조</summary>
<div markdown="1">


```html

  <!-- 헤더 -->
  <header class="header">
    <div class="header-inner">
      <h1 class="brand">
        <a href="#" class="logo-link">
          <img src="./images/brand-lightmode.svg" alt="EDIYA COFFEE" />
        </a>
      </h1>
      <button type="button" class="button button-bg button-burger" aria-label="메뉴 열기">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1739 30H32.8261C34.3913 30 34.3913 32 32.8261 32H17.1739C15.6087 32 15.6087 30 17.1739 30Z"
            fill="#616161" />
          <path d="M17.1739 24H32.8261C34.3913 24 34.3913 26 32.8261 26H17.1739C15.6087 26 15.6087 24 17.1739 24Z"
            fill="#616161" />
          <path d="M17.1739 18H32.8261C34.3913 18 34.3913 20 32.8261 20H17.1739C15.6087 20 15.6087 18 17.1739 18Z"
            fill="#616161" />
        </svg>
      </button>
      <nav class="navigation" aria-label="메인 메뉴">
        <ul>
          <li class="is-active"><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="#">이디야 음료</a></li>
          <li><a href="#">이디야 뉴스</a></li>
          <li><a href="#">매장 찾기</a></li>
        </ul>
        <button type="button" class="button button-bg button-close" aria-label="메뉴 닫기">
          <span class="close" aria-hidden="true">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M31.4728 17.1493C31.6637 16.9497 31.9732 16.9497 32.1641 17.1493C32.355 17.3488 32.355 17.6724 32.1641 17.8719L25.6912 24.6386L32.8553 32.128C33.0462 32.3275 33.0462 32.6511 32.8553 32.8506C32.6645 33.0501 32.355 33.0501 32.1641 32.8506L25 25.3612L17.8359 32.8506C17.645 33.0501 17.3355 33.0501 17.1446 32.8506C16.9537 32.6511 16.9537 32.3275 17.1446 32.128L24.3087 24.6386L17.8359 17.8719C17.645 17.6724 17.645 17.3488 17.8359 17.1493C18.0268 16.9497 18.3363 16.9497 18.5271 17.1493L25 23.916L31.4728 17.1493Z"
                fill="#F5F5F5" />
            </svg>

          </span>
        </button>
      </nav>
    </div>
  </header>

  <section class="login-inner">
    <div class="login-group">

      <!-- 로그인 타이틀 -->
      <div class="login-title">
        <h2>로그인</h2>
        <div class="welcome-text">
          <p>Welcome, Ediya Coffee</p>
          <p>이디야커피에 오신 것을 환영합니다.</p>
        </div>
      </div>
      <!-- 로그인 입력 폼 -->
      <form action="/" class="login-form">
        <!-- 이메일 입력 인풋 -->
        <div class="login-set login-email">
          <label for="userEmail" class="user-email">이메일</label>
          <input type="email" id="userEmail" name="userEmail" placeholder="example@email.com" class="user-input" />
          <span class="input-icon input-status small-icon"></span>
          <em class="form-message">이메일 입력 방법이 잘못되었습니다. (예:user@domain.io)</em>
        </div>
        <!-- 비밀번호 입력 인풋 -->
        <div class="login-set login-password">
          <label for="userPassword" class="user-password">비밀번호</label>
          <input type="password" id="userPassword" name="userPassword" placeholder="숫자, 영어 조합 6자 이상" minlength="6"
            class="user-input" />
          <div class="input-icon">
            <button type="button" class="button-password small-icon"><span class="sr-only">비밀번호 보기</span></button>
            <span class="input-status small-icon"></span>
          </div>
          <em class="form-message">패스워드는 숫자, 영어 조합 6자 이상 입력해야 합니다.</em>
        </div>
      </form>
      <!-- 이메일 저장 체크 -->
      <div class="save-email">
        <label for="saveEmail" tabindex="0">이메일 저장</label>
        <input type="checkbox" id="saveEmail" class="save-btn" />
      </div>
      <!-- 로그인/회원가입 버튼 -->
      <div class="login-btn-container">
        <button class="login-btn login-summit">로그인</button>
        <a href="/" class="login-btn signup-btn">회원가입</a>
      </div>

    </div>
  </section>

```

</div>
</details>


## 조건
### 상태 class
- 이메일 폼 영역과 패스워드 폼 각 영역전체(.login-set)에 상태변화 class를 추가하여 해당 자식들의 css가 변경되도록 함.
- 체크박스는 .is-active를 가지면 체크박스의 이미지가 checked 이미지로 변경되도록 함.


#### 헤더
1. 선택된 navigation menu li 폰트 굵기 변화
     - is-active
  
2. 모바일 헤더, 햄버거 메뉴 클릭 시 메뉴 나오기
     - is-active


#### 로그인 폼
1. email(상태)
    - is-focus
    - is-invalid
    - is-valid

2. password(상태, 비밀번호 보기/숨기기)
    - is-focus
    - is-invalid
    - is-visible

3. save button - 체크박스
    - is-active
  

## 반응형 이미지
#### 헤더 반응형
- 데스크탑
![스크린샷 2023-11-14 오전 1 48 16](https://github.com/juhyuny/home-work/assets/141771716/c1aa441f-3869-440c-8b2a-ab29cf89c282)


- 모바일 (햄버거 메뉴)
- ![스크린샷 2023-11-14 오전 1 48 01](https://github.com/juhyuny/home-work/assets/141771716/fd687d87-ce11-470e-9ebb-515ddc45f642)




#### 로그인 폼 반응형
@media (max-width: 600;) {}

```css

/* 모바일 화면 */
@media (max-width: 600px) {
  
  .login-group {
    width: 100%;
    padding: 0 32px;
  }
  
  .login-form {
    width: 100%;
  }
  
  .login-btn-container {
    width: 100%;
    flex-flow: column nowrap;
  }
   
  .login-btn-container .login-btn {
    width: 100%;
  }
}

```



## 상태 화면
focus 기본 상태 활성화되지만 안보이게 캡쳐했습니다

1. normal 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/47f61ec0-a4b3-45ee-b54f-a1663fb615f6" width="350px"/>


3. focus 상태
   - focus 상태로 변환시 transition 속성으로 애니메이션 되도록
   
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/6ade374f-98aa-4418-b405-ca76842c61e3" width="350px"/>


4. invalid 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/a5dbc80c-0262-4e8b-9a30-36e1994bb02d" width="350px"/>


5. 비밀번호 visible 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/e33123b1-8fc0-4b12-b221-33b6dcd15fc8" width="350px"/>


6. 이메일 저장 버튼 active(checked) 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/f1467b72-e90b-4d9f-a1af-0bfcc1e1f818" width="350px"/>


7. 모바일 반응형 화면
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/3a53f22e-105d-4eb9-9a90-5875a025b564" width="350px"/>



   













 
