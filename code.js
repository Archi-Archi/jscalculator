(function () {
    const ogLog = console.log;
    const htmlConsole = document.getElementById('html-console');
    console.log = function(...args) {
        ogLog.apply(console, args);
        const formatted = args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
        );
        
        if (htmlConsole) {
            htmlConsole.textContent += formatted.join(' ') + '\n';
        }
    };
})();

const button1 = document.getElementById("1")
const button2 = document.getElementById("2")
const button3 = document.getElementById("3")
const button4 = document.getElementById("4")
const button5 = document.getElementById("5")
const button6 = document.getElementById("6")
const button7 = document.getElementById("7")
const button8 = document.getElementById("8")
const button9 = document.getElementById("9")
const button0 = document.getElementById("0")

const buttonplus = document.getElementById("+")
const buttonminus = document.getElementById("-")
const buttontimes = document.getElementById("*")
const buttondivide = document.getElementById("/")

const divhead = document.getElementById("header")
const divbody = document.getElementById("body")
const divbody2 = document.getElementById("bodyy")

const buttonmode = document.getElementById("mode")

var x = 0
var op = 1 // 1 = additon, 2 =  minus, 3 = times, 4 = division. very simple
var col = 0 // 0 = dark, 1 = light.

buttonmode.addEventListener("click", function(event) {
        const h1 = divhead.querySelector('h1');
        const h3 = divhead.querySelector('h3');
        const h11 = divbody.querySelector('h2');
        const h22 = divbody.querySelector('h2');
        const h111 = divbody2.querySelector('h2');
        const h222 = divbody2.querySelector('h2');
        const button = document.querySelectorAll('.button');
        if (col == 0) {
            col = 1;
            divhead.style.backgroundColor = 'white';
            divhead.style.color = 'black';
            divhead.style.border = '10px solid black';
            divbody.style.backgroundColor = 'white';
            divbody.style.color = 'black';
            divbody.style.border = '10px solid black';
            divbody2.style.backgroundColor = 'white';
            divbody2.style.color = 'black';
            divbody2.style.border = '10px solid black';
            h1.style.color = 'black';
            h3.style.color = 'darkgray';
            h22.style.color = 'black';
            h222.style.color = 'black';
            document.body.style.backgroundColor = 'white';
        } else if (col == 1) {
            col = 0;
            document.body.style.backgroundColor = 'black';
            divhead.style.backgroundColor = 'darkblue';
            divhead.style.color = 'blue';
            divhead.style.border = '10px solid blue';
            divbody.style.backgroundColor = '#000020';
            divbody.style.color = 'darkblue';
            divbody.style.border = '10px solid darkblue';
            divbody2.style.backgroundColor = '#000020';
            divbody2.style.color = 'darkblue';
            divbody2.style.border = '10px solid darkblue';
            h1.style.color = 'lightblue';
            h3.style.color = 'blue';
            h22.style.color = 'blue';
            h222.style.color = 'darkblue';
            button.style.backgroundColor = '#000020'
        }
    });

console.log("| Javascript (ES2026) | ", x, " | ")

buttonplus.addEventListener("click", function(event) {
        op = 1;
        console.log("Operation Mode: Addition | ")
    });
buttonminus.addEventListener("click", function(event) {
        op = 2;
        console.log("Operation Mode: Subtraction | ")
    });
buttontimes.addEventListener("click", function(event) {
        op = 3;
        console.log("Operation Mode: Multiplication | ")
    });
buttondivide.addEventListener("click", function(event) {
        op = 4;
        console.log("Operation Mode: Division | ")
    });


button1.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 1 | ")
            x += 1;
        } else if (op == 2) {
            console.log(x, "- 1 | ")
            x -= 1;
        } else if (op == 3) {
            console.log(x, "* 1 | ")
            x = x * 1;
        } else if (op == 4) {
            console.log(x, "/ 1 | ")
            x = x / 1;
        }
        console.log(x, " | ")
    });
button2.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 2 | ")
            x += 2;
        } else if (op == 2) {
            console.log(x, "- 2 | ")
            x -= 2;
        } else if (op == 3) {
            console.log(x, "* 2 | ")
            x = x * 2;
        } else if (op == 4) {
            console.log(x, "/ 2 | ")
            x = x / 2;
        }
        console.log(x)
    });
button3.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 3 | ")
            x += 3;
        } else if (op == 2) {
            console.log(x, "- 3 | ")
            x -= 3;
        } else if (op == 3) {
            console.log(x, "* 3 | ")
            x = x * 3;
        } else if (op == 4) {
            console.log(x, "/ 3 | ")
            x = x / 3;
        }
        console.log(x)
    });
button4.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 4 | ")
            x += 4;
        } else if (op == 2) {
            console.log(x, "- 4 | ")
            x -= 4;
        } else if (op == 3) {
            console.log(x, "* 4 | ")
            x = x * 4;
        } else if (op == 4) {
            console.log(x, "/ 4 | ")
            x = x / 4;
        }
        console.log(x)
    });
button5.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 5 | ")
            x += 5;
        } else if (op == 2) {
            console.log(x, "- 5 | ")
            x -= 5;
        } else if (op == 3) {
            console.log(x, "* 5 | ")
            x = x * 5;
        } else if (op == 4) {
            console.log(x, "/ 5 | ")
            x = x / 5;
        }
        console.log(x)
    });
button6.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 6 | ")
            x += 6;
        } else if (op == 2) {
            console.log(x, "- 6 | ")
            x -= 6;
        } else if (op == 3) {
            console.log(x, "* 6 | ")
            x = x * 6;
        } else if (op == 4) {
            console.log(x, "/ 6 | ")
            x = x / 6;
        }
        console.log(x)
    });
button7.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 7 | ")
            x += 7;
        } else if (op == 2) {
            console.log(x, "- 7 | ")
            x -= 7;
        } else if (op == 3) {
            console.log(x, "* 7 | ")
            x = x * 7;
        } else if (op == 4) {
            console.log(x, "/ 7 | ")
            x = x / 7;
        }
        console.log(x)
    });
button8.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 8 | ")
            x += 8;
        } else if (op == 2) {
            console.log(x, "- 8 | ")
            x -= 8;
        } else if (op == 3) {
            console.log(x, "* 8 | ")
            x = x * 8;
        } else if (op == 4) {
            console.log(x, "/ 8 | ")
            x = x / 8;
        }
        console.log(x)
    });
button9.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 9 | ")
            x += 9;
        } else if (op == 2) {
            console.log(x, "- 9 | ")
            x -= 9;
        } else if (op == 3) {
            console.log(x, "* 9 | ")
            x = x * 9;
        } else if (op == 4) {
            console.log(x, "/ 9 | ")
            x = x / 9;
        }
        console.log(x)
    });
button0.addEventListener("click", function(event) {
        if (op == 1) {
            console.log(x, "+ 0 | ")   
            x += 0;
        } else if (op == 2) {
            console.log(x, "- 0 | ")
            x -= 0;
        } else if (op == 3) {
            console.log(x, "* 0 | ")
            x = x * 0;
        } else if (op == 4) {
            console.log(x, "/ 0 | ")
            console.log("nuh uh | ")
        }
        console.log(x)
    });
