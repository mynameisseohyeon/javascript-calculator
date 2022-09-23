let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
const onClickNumber = (event) => { 
    /*함수자리에 들어가야 하기 때문에 함수를  return해줘야 한다 
    => 함수가 아닐 시에는 원래 undefind값을 리턴 */
    if(!operator) { //비어있다
        numOne += event.target.textContent;
        $result.value += event.target.textContent; //화면에 나타나도록 변경
        return;
    } //비어있지 않다.
    if(!numTwo) { //numTwo가 없는 상태일 때 화면의 텍스트를 지워라
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent; //화면에 나타나도록 변경
    
}; /* 함수가 함수를 return하는 함수 => 고차함수(high order function) */
const switchOperator = () => { //함수 결과값 도출
    switch(operator) {
    case '+':
        $result.value = parseInt(numOne) + parseInt(numTwo);
        break;
    case '-':
        $result.value = numOne - numTwo; //-,*,/는 문자열로 바꿔주지 않아도 자동으로 변경된다
        break;
    case '*':
        $result.value = numOne * numTwo;
        break;
    case '/':
        $result.value = numOne / numTwo;
        break;
    default:
        break;
    }
}

document.querySelector('#num-0').addEventListener('click', onClickNumber);
document.querySelector('#num-1').addEventListener('click', onClickNumber);
document.querySelector('#num-2').addEventListener('click', onClickNumber);
document.querySelector('#num-3').addEventListener('click', onClickNumber);
document.querySelector('#num-4').addEventListener('click', onClickNumber);
document.querySelector('#num-5').addEventListener('click', onClickNumber);
document.querySelector('#num-6').addEventListener('click', onClickNumber);
document.querySelector('#num-7').addEventListener('click', onClickNumber);
document.querySelector('#num-8').addEventListener('click', onClickNumber);
document.querySelector('#num-9').addEventListener('click', onClickNumber);

const onClickOperator = (op) => () => {
    if(numTwo) {
        switchOperator();
        numOne = $result.value;
        numTwo = '';
    }
    if(numOne) { //첫 번째 숫자를 지정한 경우
        operator = op;
        $operator.value = op;
    }else { //첫 번째 숫자를 지정하지 않은 경우
        alert('숫자를 먼저 입력하세요.');
    };
};

document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo) {
        switchOperator(); 
        $operator.value = '';
        numOne = $result.value;
        operator = '';
        numTwo = '';
    } else{
        alert('숫자를 먼저 입력하세요.');
    }
});
document.querySelector('#clear').addEventListener('click', () =>  {
    numOne = "";
    operator = "";
    numTwo = "";
    $operator.value = "";
    $result.value = "";
});