// 타입 단언(type assertion)
let b = a as string;

// DOM API 조작
// <div id="app">hi</div>

let div = document.querySelector('div') as HTMLDivElement;
// 타입 단언 시에는 null 체크를 하지 않아도 된다.
if (div) {
    div.innerHTML;
}