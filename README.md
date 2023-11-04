# home-work
likelion-8 HTML/CSS homework
---


### home-work 미리보기
https://juhyuny.github.io/home-work/mission-01/mission01.html 
---


## HTML 마크업 
---
### 구조
![HTML:CSS 과제-마크업 구조](https://github.com/juhyuny/home-work/assets/141771716/f2b6e1d8-5a4c-4673-a514-fca7878b6c62)


### 마크업
![HTML:CSS 과제-마크업](https://github.com/juhyuny/home-work/assets/141771716/6b9905d8-f3be-42cd-8283-2af671816cf0)




1. article 태그를 사용하고 임의의 heading을 추가하여 .sr-only로 숨김 처리.
2. 마우스를 올리고 hover되는 영역이 한 li영역의 전체라는 것을 보여주기 위해 a 태그로 li 내부의 있는 모든 태그를 감쌈.
   
```
    <li><a href="/"></a></li>
```


3. logo 하단의 있는 글을 해당 카드의 헤딩역할로 h3 태그로 마크업.
4. 큰 아이템과 작은아이템의 구조 차이
  - 큰 아이템 : 왼쪽에 배치될 img와 h3를 item-title로 묶음.

```
    <div class="item-title">
      <img />
      <h3></h3>
    </div>
    <img />
    <span class="btn-list"></span>
```


  - 작은 아이템 

```
    <img />
    <h3></h3>
    <img />
    <span class="btn-list"></span>
```


5. hover 전/후 버튼을 span.bth-list로 묶음.

```
    <span class="btn btn-list">
        <img src="images/button.png" alt="~바로가기" />
        <span class="buy-btn">
          <p>구매하기</p>
          <img src="images/angle-right.png" alt="~구매하기" />
        </span>
      </span>
```



## CSS
---
1. 변수 지정

```
    :root {
      --basic-height: 310px;
      --blue-600: #0074E9;
      --gray-100: #f3f3f3;
      --gray-500: #c4c4c4;
      --gray-800: #4e4e4e;
      --white: #ffffff;
      --opacity-20: rgba(0,0,0, .2);
    }
```


2. item들 배치방법


   .item-container에
   - flex 적용
   - 가로 지정
   - 가로값이 넘으면 줄내림이 되도록 flex-wrap:wrap 적용

```
    .item-container {
      width: 502px;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
      margin-top: 16px;
    }
```


3. 버튼 리스트(hover 전 이미지와 hover 후 버튼) 가로로 나열 후 위치 지정

```
    /* 버튼 리스트(.btn-list) 기준점을 item 으로 지정 */
    .item {position:relative;}

    /* 버튼 리스트의 위치 지정 */
    .btn-list {
      display: flex;
      position: absolute;
      left: 20px;
      bottom: 20px; 
    }
```

4. hover 전 버튼과 hover 후 버튼이 겹치도록 위치 조정

```
    .buy-btn {
      display: none;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      width: 112px;
      height: 42px;
      padding: 12px 18px 13px 20px;
      background-color: var(--blue-600);
      color: #fff;
      font-size: 0.875rem;

      /* margin 마이너스 값으로 버튼만큼 위치 당기기 */
      margin-left: -42px;

    }
```

5. item을 hover했을 때 적용되는 style

```
    /* 아이템의 border 변화 */
    .item:hover {
      border: 1px solid var(--blue-600);
    }

    /* 구매하기 버튼 보이기 */
    .item:hover .buy-btn {
      display: flex;
    }
```


