
https://github.com/user-attachments/assets/234f6737-3e31-4477-a216-3879ae606fbe
# EXP-MISSION-ToDo-App
JavaScript를 이용하여 Todo App 만들기 실습.
<br>

1. 프로젝트 구성
- HTML, CSS, JavaScript를 사용하여 Todo App을 만드는 실습을 진행했습니다.
- HTML코드에서는 헤더의 제목과 '새로운 TODO 추가하기' 버튼만 생성하였고 TODO에 해당하는 요소는 JavaScript로 생성하였습니다.
- CSS는 HTML의 헤더와 버튼 Boby 등 메인 틀 디자인과 JavaScript로 생성한 할 일의 객체 item 요소와 div의 요소를 가지고 있는 actions의 디자인을 작성하였습니다.
- JavaScript에는 createNewTodo(), createTodoElement(), saveToLocalStorage(), loadFromLocalStorage(), displayTodos()의 함수를 만들어 사용했습니다.

<br>

2. 기능
1) '새로운 TODO 추가하기' 버튼을 누르면 TODO를 입력할 수 있는 요소가 생성됩니다. 이는 createNewTodo() 함수를 사용하여 요소의 데이터를 가지고 입력할 수 있는 요소를 생성합니다.
2) 요소가 생성된 뒤 Todo를 입력하고 다른 곳을 누르면 입력 편집기가 닫히고 Todo가 등록됩니다. 한번 작성된 Todo는 편집 아이콘을 누르기 전까지 수정이 불가능합니다.
3) 편집 아이콘을 누르면 입력 편집기가 활성화되고 Todo text를 수정 가능합니다. 등록과 같이 작성이 끝난 뒤 다른 곳을 누르면 편집기가 닫힙니다.
4) Todo를 삭제하려면 요소에 있는 제거 아이콘을 누르면 item 요소 전체가 삭제 됩니다.
5) Todo의 일정이 마쳤으면 왼쪽 체크박스를 클릭합니다. 클릭하면 요소의 text에 밑줄이 생기고 전체 요소가 반투명화됩니다.
6) 2, 3, 4, 5의 핸들러가 작동하는 JavaScript 함수는 createTodoElement()입니다.
7) 새로고침을 누를 경우 로컬 스토리지를 활용하여 저장된 데이터가 날아가지 않게 됩니다. 로컬 스토리지를 이용한 함수는 saveToLocalStorage(), loadFromLocalStorage(), displayTodos()입니다.
8) saveToLocalStorage()는 로컬 스토리지에 저장하는 역할을 하는데 추가한 item 데이터 객체는 배열로 받아왔기 때문에 스토리지에 저장하기 위해서는 string으로 변환하는 작업이 필요합니다. 그 후 window 함수를 사용하여 변환된 데이터를 저장합니다. 각 데이터는 데이터 조작이 필요한 챕터 사용하여 해당 데이터 무결성을 보장합니다.
9) 새로고침 후 로컬 스토리지에서 데이터를 불러오는 함수는 loadFromLocalStorage() 입니다. 데이터의 개수만큼 Loop를 사용하여 데이터를 불러오고 item 객체에 맞게 배열로 변환하는 작업을 합니다.
10) 데이터를 불러온 다음 화면이 나타내는 함수는 displayTodos() 입니다. todo의 개수만큼 Loop를 사용하고 해당 데이터를 list.append를 사용하여 화면에 요소를 불러오게 됩니다.

<br>

3. 느낀점
- JavaScript의 경우 기존에 다루기는 해보았지만 혼자서 능숙하게 다루지는 못해서 걱정이 많았습니다. 해당 프로젝트는 강의를 보며 참고해서 만든 프로젝트라서 웹 페이지에 동작하는 것을 중심으로 공부하며 진행하였습니다. 이를 통해 JavaScript의 구문과 형식에 대해 정리된 것 같고 아직은 많이 어렵지만 웹에서 많이 사용하고 react는 JavaScript의 라이브러리로 알고 있는 만큼 앞으로 더 열심히 공부해야겠다고 느꼈습니다. 또한 웹 페이지의 데이터를 관리할 떄 MySQL, Oracle 등의 DB를 사용했었는데 로컬 스토리지라는 것을 이번 프로젝트를 통해 새롭게 알게 되어 아직 모르는 부분들이 많다고 생각들었습니다.

4. 시연 영상
https://github.com/user-attachments/assets/bb9716d7-5edd-4691-82a9-e0445751e7e9
