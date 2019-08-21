## Data Structures & Algorithms by JS

자바스크립트 자료구조 & 알고리즘 공부 후 정리
링크 : https://www.youtube.com/watch?v=t2CEgPsws3U&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ&index=13


### Data Structure

데이터 단위와 데이터 자체 사이의 물리적 또는 논리적 관계
-> 자료를 효율적으로 이용할 수 있도록 컴퓨터에 저장하는 방법

데이터 단위: 데이터를 구성하는 한 덩어리


### Stack

스택은 데이터를 일시적으로 저장하기 위한 자료구조로, 가장 나중에 넣은 데이터를 가장 먼저 꺼낸다.(Last In First Out)

ex) browser’s back button
    사이트 스택의 맨 위에 막 방문했던 사이트를 추가한다
```
stack.push(‘www.facebook.com’)
 ```

뒤로가기 버튼을 누르면 전에 방문했던 사이트를 제거
```
stack.pop()
```

Function is traditionally provided in the stack
* push : for placing data onto a stack
* pop: for removing the top element of a stack
* peek: for displaying the top element of a stack
* length, size : for determining how many elements are on a stack

자바스크립트의 좋은 점은 array object가 이미 스택으로 사용하기 위해 필요한 모든 함수들을 가지고 있다는 것이다.
array를 stack으로 사용하면 된다.
pop은 item을 삭제하지만 peek은 삭제하지 않고 스택의 맨 위 값을 반환한다.
