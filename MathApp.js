
const mathBoxPerent = document.getElementById('math-box-parent')
const mathbox = []
let actionMathArray=
[
    ":",
    "X",
    "-",
    "+",
]
let  boolButtonPlus = true
let  boolButtonMinus = true
let  boolButtonMultiply = true
let  boolButtonDivid = true
let indexQuestion = 0
let MinNumber = 1
let MaxNumber = 10 // we random the number between to number th
                            // e menn number and the maax number


//const buttonParant = document.getElementById()
const buttonPlus = document.getElementById('button+')

const buttonMinus = document.getElementById("button-")
const buttonMultipla = document.getElementById('buttonX')
const buttonDiviation = document.getElementById('button:')
const buttonRelodQuestion = document.getElementById('button-question')

const buttonCreateNewQuestion = document.getElementById("create-question")


buttonPlus.addEventListener('click',clickHandler)
buttonMultipla.addEventListener('click',clickHandler)
buttonDiviation.addEventListener('click',clickHandler)
buttonMinus.addEventListener('click',clickHandler)






buttonCreateNewQuestion.addEventListener('click',CreateMathBox)
buttonRelodQuestion.addEventListener('click',RelodQuestion)
CreateMathBox(21)// create math box the contin the number









function clickHandler(event) {
    
    const clickedElement = event.target
   const buttonstring =clickedElement.innerText
   switch (buttonstring)
   {
    case  '+':
       if (boolButtonPlus)
       {
        boolButtonPlus = false
        actionMathArray = actionMathArray.filter(data => data != '+');
        clickedElement.style.borderColor  = 'white'
        console.log(actionMathArray)
       }else
       {
        clickedElement.style.borderColor  = 'black'
        actionMathArray.push('+')
        boolButtonPlus = true
        console.log(actionMathArray)

       }
        break
        case  '-':
            if (boolButtonMinus)
            {
                boolButtonMinus = false
                actionMathArray = actionMathArray.filter(data => data != '-');
             clickedElement.style.borderColor  = 'white'
            }else
            {
             clickedElement.style.borderColor  = 'black'
             boolButtonMinus = true
             actionMathArray.push('-')
     
            }
           
            break
            case  'X':
                if (boolButtonMultiply)
                {
                    boolButtonMultiply = false
                    actionMathArray = actionMathArray.filter(data => data != 'X');
                 clickedElement.style.borderColor  = 'white' // dont activ math
                }else
                {
                 clickedElement.style.borderColor  = 'black'
                 boolButtonMultiply = true
                 actionMathArray.push('X')
         
                }
               
                break
                case  ':':
                    if (boolButtonDivid)
                    {
                        boolButtonDivid = false
                        actionMathArray = actionMathArray.filter(data => data != ':');
                     clickedElement.style.borderColor  = 'white'
                    }else
                    {
                     clickedElement.style.borderColor  = 'black'
                     boolButtonDivid = true
                     actionMathArray.push(':')
             
                    }
                   
                    break  


   }
  }

MaxNumber = 15
//// method

function AddButtonPlus()
{

    
}function AddButtonMinus()
{

    
}function AddButtonMultiply()
{

    
}function AddButtonDivid()
{

    
}


function CreateMathBox()
{
    console.log("working")
    for (let index = 0; index < 3; index++) {
        const temp = document.createElement('div')
        temp.classList.add('math-box')
        mathbox.push(temp)
        temp.innerText = CreateInnerText()
        mathBoxPerent.append(temp)
    }
}

function RelodQuestion()
{
    indexQuestion =0
    for (let index = 0; index < mathbox.length; index++) {
        const element = mathbox[index];
        element.innerText =CreateInnerText()
    }

}

function EditMathBox()
{
    for (let index = 0; index < mathbox.length; index++) {
        const temp = mathbox[index]
        temp.innerText = CreateInnerText()
        
    }
}

function CreateInnerText()
{   
    indexQuestion++
    let number1=""
    let number2=""
    let questionString = ""
    const actionMath = actionMathArray[RandomIntFromInterval(0,actionMathArray.length-1)]
        switch (actionMath)
        {
            case '+':
                                number1 = RandomIntFromInterval(MinNumber,MaxNumber)
                                number2 = RandomIntFromInterval(MinNumber,MaxNumber)
                                questionString = number1+actionMath+number2+" ="
                break
                case '-':
                                number2 = RandomIntFromInterval(MinNumber,MaxNumber)
                                number1 = RandomIntFromInterval(number2,2*MaxNumber)
                              
                                questionString = number1+actionMath+number2+" ="
                    break
                    case ':': 
                                number2 = RandomIntFromInterval(MinNumber,MaxNumber)
                                number1 = RandomIntFromInterval(MinNumber+1,MaxNumber)
                                number1 = number2*number1
                               
                                questionString =  number1+actionMath+number2+" ="
                        break
                        case 'X':
                                number1 = RandomIntFromInterval(MinNumber,MaxNumber)
                                number2 = RandomIntFromInterval(MinNumber,MaxNumber)
                                questionString =  number1+actionMath+number2+" ="
                            break
        }
            let temp = indexQuestion + ") "
            

            questionString = temp + questionString
    return questionString
    }

function RandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


