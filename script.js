function write(element) {
    document.writeln(element);
}


write("<br/>");
write("Segitiga siku-siku model 1");
write("<hr/>");

for(let a = 0; a < 5; a++){
    for(let b = 0; b <= a; b++){
        write('1');
    }
    write("<br/>");
}

write("<br/> <br/>")
write("Segitiga siku-siku model 2");
write("<hr/>")

for (let c = 0; c < 5; c++) {
  for(let d = 5; d > c; d--) {
      write('1');
  }
  write('<br/>');
}

write("<br/> <br/>");
write("Segitiga siku-siku model 3");
write("<hr/>");

for(let e = 0 ; e < 5; e++) {
    for(let f = 5; f > e+1; f--) {
        write("0");
    }
    for(let g = 0; g <= e; g++) {
        write("1");
    }
    write('<br/>');
}

write("<br/> <br/>");
write("Segitiga siku-siku model 4");
write("<hr/>");

for(let h = 0; h < 5; h++) {
    for(i = 0; i < h; i++) {
        write("0");
    }
    for(let j = 5; j > h; j--) {
        write("1");
    }
    write('<br/>');
}

write("<br/> <br/>");
write("Segitiga sama-kaki model 1");
write("<hr/>");

for(let k = 0; k < 5; k++) {
    for(let l = 5; l > k+1; l-- ) {
        write('0');
    }
    for(let m = 0; m <= k; m++) {
        write('1')
    }
    for(let n = 1; n <= k; n++) {
        write('1');
    }
    write('<br/>');
}

write("<br/> <br/>");
write("Segitiga sama-kaki model 2");
write("<hr/>");

for(let o = 0; o < 5; o++) {
    for(let p = 0; p < o; p++) {
        write("0");
    }
    for(let q = 5; q > o; q--) {
        write("1");
    }
    for(let r = 4; r > o; r--) {
        write("1")
    }
    write('<br/>')
}