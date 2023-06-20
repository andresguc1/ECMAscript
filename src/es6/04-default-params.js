// Old version 
function newUSer(name, age, country) {
    var name  = name ||  'Andres';
    var age = age || '38';
    var country = country || 'CO';
    console.log(name, age, country);
}

// ES6 sintaxis

function newAdmin(name = 'Susana', age = 8, country='CO') {
    console.log(name, age, country);
}

