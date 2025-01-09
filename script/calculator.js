

var num = '';

document.getElementById('clear_all').addEventListener('click', () => display('AC'));
document.getElementById('clear_screen').addEventListener('click', () => display('c'));
document.getElementById('percentage').addEventListener('click', () => display('%'));
document.getElementById('divide').addEventListener('click', () => display('/'));
document.getElementById('seven').addEventListener('click', () => display('7'));
document.getElementById('eight').addEventListener('click', () => display('8'));
document.getElementById('nine').addEventListener('click', () => display('9'));
document.getElementById('multiply').addEventListener('click', () => display('*'));
document.getElementById('four').addEventListener('click', () => display('4'));
document.getElementById('five').addEventListener('click', () => display('5'));
document.getElementById('six').addEventListener('click', () => display('6'));
document.getElementById('minus').addEventListener('click', () => display('-'));
document.getElementById('one').addEventListener('click', () => display('1'));
document.getElementById('two').addEventListener('click', () => display('2'));
document.getElementById('three').addEventListener('click', () => display('3'));
document.getElementById('plus').addEventListener('click', () => display('+'));
document.getElementById('zero').addEventListener('click', () => display('0'));
document.getElementById('decimal').addEventListener('click', () => display('.'));
document.getElementById('backspace').addEventListener('click', () => display('b'));
document.getElementById('equals').addEventListener('click', () => display('='));

document.addEventListener('keydown', (event) => {
  const key = event.key;
  switch (key) {
    case 'Enter':
      display('=');
      break;

    case '=':
      display('=');
      break;

    case 'Backspace':
      display('b');
      break;
    case '%':
      display('%');
      break;
    case '/':
      display('/');
      break;
    case '7':
      display('7');
      break;
    case '8':
      display('8');
      break;
    case '9':
      display('9');
      break;
    case '*':
      display('*');
      break;
    case '4':
      display('4');
      break;
    case '5':
      display('5');
      break;
    case '6':
      display('6');
      break;
    case '-':
      display('-');
      break;
    case '1':
      display('1');
      break;
    case '2':
      display('2');
      break;
    case '3':
      display('3');
      break;
    case '+':
      display('+');
      break;
    case '0':
      display('0');
      break;
    case '.':
      display('.');
      break;
    case 'Delete':  // 'AC' for clear
      display('AC');
      break;
    case 'c':
      display('c');
      break;
     
  }
});


//here num is a string value
let c = -1;//index of last string

function display(value) {// displaying the numbers..assigning them to the functions


  if (value === 'AC')//for clering all
  {
    num = '';
    c = -1;
    console.clear();
    document.getElementById('answer').innerText='';

  }

  else if (value === 'c')
  {
    num = '';
    c = -1;
    console.clear();
  }

  else if (value === 'b')//backspacing
  {

    num = num.slice(0, c);
    c--;
  }

  else if (value === '=') {
    check_valid(num);
  }

  else//rest functions
  {
    num += value;
    c++;
  }
  
  document.getElementById('type').innerText = num;


}




function string_to_numbers(num_string) {
  num_string += 'd';//number is identified by the special character at the end.. so for the last number any spec. charac is added like d which will be removed easily
  let num_arry = [];
  let num_operator = [];
  let c = 0, d = 0, num_s = '';


  for (let i = 0; i < num_string.length; i++) {

    if (isNaN(Number(num_string.charAt(i))) & num_string.charAt(i)!='.' ) {
      num_arry[c] = parseFloat(num_s);
      num_s = '';                                               //89+990
      c++;
      num_operator[d] = num_string.charAt(i);
      d++;
    }


    else
      num_s += num_string.charAt(i);//stores the string value of num before any operand

  }
  num_operator.splice(d-- - 1, 1);
  //dummy special charac removed

 calculation(num_arry,num_operator);

}







function check_valid(strg)//checks for validity
{

  let c = 0;
  for (let i = 0; i < strg.length; i++) {
    let a = !isNaN(Number(strg.charAt(i)));
    let b = !isNaN(Number(strg.charAt(i + 1)));


    if (a === false & b === false)
      c++;


  }
  if ((isNaN(Number(strg.charAt(strg.length - 1)))))//if last letter is operator
    c++;

  if ((isNaN(Number(strg.charAt(0)))))//if first letter is operator
    c++;


  if (c === 0) {
    string_to_numbers(strg);

  } else {

    num = '';
    display('SYNTAX ERROR!');
    setTimeout(() => display('AC'), 1000);

  }


}


function calculation(numbers, operators) {
  let result = numbers[0];
  console.log('first:',result);
  let l = numbers.length;//length of number array..(length of operatorrs is usaually l-1)
  for (let i = 0; i < l-1; i++)
     {

    let nextNumber = numbers[i + 1]

    console.log(nextNumber,'...',operators[i]);

    switch (operators[i])
     {
      case '+':
        {
          result += nextNumber;
          break;
        }

      case '-':
        {
          result -= nextNumber;
          break;
        }

      case '*':
        {
          result *= nextNumber;
          break;
        }
      case '/':
        {
          result /= nextNumber;
          break;
        }
      case '%':
        {
          result %= nextNumber;
          break;
        }

      default:
        result = 'unvalid operator';

    }
  }

 
  document.getElementById('answer').innerText=result;
}


