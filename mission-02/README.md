# Mission-02 Ediya - Login Page


## HTML 마크업 구조 이미지
![mission-02-markup](https://github.com/juhyuny/home-work/assets/141771716/77ead259-8006-431e-adb3-bf87d2a8ffc6)

## HTML 구조
```html

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
        <div class="login-set login-email">
          <label for="userEmail" class="user-email">이메일</label>
          <div class="user-input email-input">
            <input type="email" id="userEmail" name="userEmail" placeholder="example@email.com" />
            <span class="input-icon input-status small-icon"></span>
            <em class="form-message">이메일 입력 방법이 잘못되었습니다. (예:user@domain.io)</em>
          </div>
        </div>
        <div class="login-set login-password">
          <label for="userPassword" class="user-password">비밀번호</label>
          <div class="user-input password-input">
            <input type="password" id="userPassword" name="userPassword" placeholder="숫자, 영어 조합 6자 이상" minlength="6" />
            <div class="input-icon">
              <button type="button" class="button-password small-icon"><span class="sr-only">눈 가리기</span></button>
              <span class="input-status small-icon"></span>
            </div>
            <em class="form-message">패스워드는 숫자, 영어 조합 6자 이상 입력해야 합니다.</em>
          </div>
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


## 조건
#### 입력 폼 상태 class
- 이메일 폼 영역과 패스워드 폼 각 영역전체(.login-set)에 상태변화 class를 추가하여 해당 자식들의 css가 변경되도록 함.
- 체크박스는 .is-active를 가지면 체크박스의 이미지가 checked 이미지로 변경되도록 함.


1. email
    - is-focus
    - is-invalid
    - is-valid

2. password
    - is-focus
    - is-invalid
    - is-visible

3. save button
    - is-active



#### 모바일 반응형
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
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/6ade374f-98aa-4418-b405-ca76842c61e3" width="350px"/>


4. invalid 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/a5dbc80c-0262-4e8b-9a30-36e1994bb02d" width="350px"/>


5. 비밀번호 visible 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/e33123b1-8fc0-4b12-b221-33b6dcd15fc8" width="350px"/>


6. 이메일 저장 버튼 active(checked) 상태
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/f1467b72-e90b-4d9f-a1af-0bfcc1e1f818" width="350px"/>


7. 모바일 반응형 화면
   <br><img src="https://github.com/juhyuny/home-work/assets/141771716/3a53f22e-105d-4eb9-9a90-5875a025b564" width="350px"/>



   













 