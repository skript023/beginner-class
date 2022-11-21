let let_type = 0;
const const_type = 0;
var var_type = 0;

if (let_type == 0) console.log("let adalah 0");
else if (let_type > 0) console.log("let_type lebih dari 0");
else if (let_type != 0) console.log("let_type tidak sama dengan 0");
else if (let_type < 0) console.log("let_data kurang dari 0");
else if (let_type >= 0) console.log("let lebih atau sama dengan 0");
else if (let_type <= 0) console.log("let kurang atau sama dengan 0");
else console.log("tidak memenuhi kondisi");

switch(let_type)
{
    case 0:
        console.log("let adalah 0");
        break;
    case 1:
        console.log("let adalah 2");
        break;
    default:
        console.log("tidak memenuhi kondisi");
        break;
}

