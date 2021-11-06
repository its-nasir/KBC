const prompt=require("prompt-sync")()
var questions=[
    {"question":'which of these sounds would you associated with the heart?',"answer": 'Dhak Dhak'},
    {"question": "in the ramyana, which demon impersonated rama's voice , screeming , 'Lakshman! help me?" ,"answer": 'Marich'},
    {"question":"with which of these cards would you associate the phrase Aam Aadmi Adhikar ?","answer":"Aadhar card"},
    {"question":"the sasural of which of these international sports persons from india in pakistan?","answer":"Saina mirza"},
    {"question":"which of these words pharases was famously used in many of his dialogues by actor 'Pran' ","answer":"Barkhurdaar"},
    {"question":"which of these is a term for a place where people gather for sayri and gazal ?","answer":"Mushaira"},
    {"question":"in the Mugal era, ehich of these harbours was also known as Babul mecca and Meccaidwar","answer":"Surat"},
    {"question":"after whome is the annual award, given by the Govt of India to an outstanding handloom weaver named ?","answer":"Sant kabir"},
    {"question":"Damascus is the capital of witch country ?","answer":"Syria"},
    {"question":"which is the largest banana producing country in the world?","answer":"India"},
    {"question":"which of these words mean 'water' ?","answer":"Varun"},
    {"question":"which gas is most reactiveof all chemical elements","answer":"Flurine"},
    {"question":"which of these spoprts man started cariar as atraivlling ticket examiner with Indian Railway","answer":"Mahendra singh dhoni"},
    {"question":"which is the coldest place in the india","answer":"Drass"}
];
var options=[
    {"option":['Tring Tring', 'Tap Tap','Click click','Dhak Dhak']},
    {"option":['Surpanakkha','Khora','Marich','Dushana']},
    {"option":['Pan card','Votter card','Aadhar card','Ration card']},
    {"option":['Siana nehwal','Saina mirza','Anisa sayyed','Anjum chopra']},
    {"option":['Khamosh','Barkhurdaar','Jaani','Babu mosai']},
    {"option":['Rukhsar','Mushaira','Shikara','Mahabara']},
    {"option":['Bharuch','Surat','Porbandar','Khambal']},
    {"option":['Acharya vinoba bhave','Sant kabir','Mahatma Gandhi','Gul ahmed']},
    {"option":['Tunisia','Jordan','Syria','Lebanon']},
    {"option":['Brazil','India','Maxico','China']},
    {"option":['Rahul','Suraj','Varun','Rajiv']},
    {"option":['Oxigen','Clorine','Flurine','Hydrogen']},
    {"option":['Bhuvneshwar kumar','Shekhar dhavan','Ravindra jadeja','Mahendra singh dhoni']},
    {"option":['Yusmarg','Kulgam','Drass','Leh']}
]
var No=0
var prize_amount=[5000,125000,30000000,70000000,1];
for (var i in questions){
    console.log(questions[i]["question"]);
    for (j=0;j<4;j+=2){                         //var j in options[i]["option"]
        console.log(j+1,options[i]["option"][j],"               ",j+2,options[i]["option"][j+1]);
    }
    if (No===0){
        var life_line=Number(prompt("Yes - 1   ,  No - 2"))
        if (life_line===1){
            No=life_line;
        }
    }
    if (life_line===1 && No===1){
        if (options[i]["option"][0]==questions[i]["answer"]){
            options[i]["option"]=[options[i]["option"][0],options[i]["option"][1] ]
            console.log(1,options[i]["option"][0],"               ",2,options[i]["option"][1]);
        }else{
            options[i]["option"]=[options[i]["option"][0],questions[i]["answer"]]
            console.log(1,options[i]["option"][0],"              ",2,questions[i]["answer"]);
        }
        No++
    }
    if (No!=0) {
        promp=Number(prompt("enter which number of answer is correct :   "))
    }else{
        promp=Number(prompt("enter which number of answer is correct :   "))
    }
        if (options[i]["option"][promp-1]===questions[i]["answer"]){
            console.log("correct");
            if (prize_amount[4]<=8){
                console.log(prize_amount[0])
                prize_amount[0] =prize_amount[0] *2
            }else if (prize_amount[4]<=11,prize_amount[4]++){
                console.log(prize_amount[1]);
                prize_amount[1]=prize_amount[1]*2
            }else{
                console.log(prize_amount[2]);
                prize_amount[2]+40000000
            }
        }else{
            console.log("false");
            break;
        }
}